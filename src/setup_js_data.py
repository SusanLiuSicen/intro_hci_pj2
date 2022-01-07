import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt
import numpy as np
from pprint import pprint

RACES = ['white', 'black', 'asian', 'nhopi', 'aian', 'omultir', 'hispanic']
OTHER = ['kids', 'seniors']


def get_us_data(df, abb):
    for dist in ['1and10']:  # , '1', '10', '20']:
        fd = df[f'lilatracts_{dist}'].astype(bool)
        df_state = df[fd].groupby('state').sum().reset_index()

        full_state = df.groupby('state').sum().reset_index()

        state_data = {}
        for s in full_state['state']:
            race_stats = []
            state_abb = abb[abb['state'] == s]['abbreviation'].item()
            for race in RACES:
                race_stats.append(dict(
                    race=race,
                    total=int(1000 * (full_state[full_state['state'] == s][f'tract{race}'].item() /
                                      full_state[full_state['state'] == s]['pop2010'].item())) / 10.,
                    share=int(1000 * (df_state[df_state['state'] == s][f'tract{race}'].item() /
                                      full_state[full_state['state'] == s][f'tract{race}'].item())) / 10.))
            state_data[state_abb] = race_stats

        us_data = []
        for race in RACES:
            race_stats = dict(
                race=race,
                total=int(1000 * (full_state[f'tract{race}'].sum().item() /
                                  full_state['pop2010'].sum().item())) / 10.,
                share=int(1000 * (df_state[f'tract{race}'].sum().item() /
                                  full_state[f'tract{race}'].sum().item())) / 10.)
            us_data.append(race_stats)

        totals = []
        for s in df_state['state']:
            state_abb = abb[abb['state'] == s]['abbreviation'].item()
            value = int(
                1000 * df_state[(df_state['state'] == s)]['pop2010'].item() / full_state[full_state['state'] == s][
                    'pop2010'].item()) / 10.
            state_dict = dict(id=f'US-{state_abb}', value=value)
            totals.append(state_dict)

    return state_data, us_data, totals


def get_tract_stats(df, abb, dist='1and10'):
    fd = df[f'lilatracts_{dist}'].astype(bool)
    subdf = df[[f'tract{r}' for r in RACES]]
    subdf.columns = [c.replace('tract', '') for c in subdf.columns]

    dominant_race = subdf.idxmax(axis='columns')
    fd_dominant_race = subdf[fd].idxmax(axis='columns')

    print(fd_dominant_race.value_counts() / dominant_race.value_counts())

    med_income_dominant = pd.concat((dominant_race, df['medianfamilyincome']), axis=1)
    fd_med_income_dominant = pd.concat((fd_dominant_race, df['medianfamilyincome']), axis=1)
    med_income_dominant = med_income_dominant.groupby(0).mean()
    fd_med_income_dominant = fd_med_income_dominant.groupby(0).mean()

    med_poverty_dominant = pd.concat((dominant_race, df['povertyrate']), axis=1)
    fd_med_poverty_dominant = pd.concat((fd_dominant_race, df['povertyrate']), axis=1)
    med_poverty_dominant = med_poverty_dominant.groupby(0).mean()
    fd_med_poverty_dominant = fd_med_poverty_dominant.groupby(0).mean()

    med_la_dominant = pd.concat((dominant_race, df['hunvflag']), axis=1)
    fd_med_la_dominant = pd.concat((fd_dominant_race, df['hunvflag']), axis=1)
    med_la_dominant = med_la_dominant.groupby(0).mean()
    fd_med_la_dominant = fd_med_la_dominant.groupby(0).mean()

    med_snap_dominant = pd.concat((dominant_race, 100 * df['tractsnap'] / df['pop2010']), axis=1)
    fd_med_snap_dominant = pd.concat((fd_dominant_race, 100 * df['tractsnap'] / df['pop2010']), axis=1)
    med_snap_dominant = med_snap_dominant.groupby(0).mean()
    fd_med_snap_dominant = fd_med_snap_dominant.groupby(0).mean()

    summary = pd.concat((dominant_race.value_counts(), med_income_dominant,
                         med_poverty_dominant, med_la_dominant, med_snap_dominant), axis=1)
    fd_summary = pd.concat((fd_dominant_race.value_counts(), fd_med_income_dominant,
                            fd_med_poverty_dominant, fd_med_la_dominant, fd_med_snap_dominant), axis=1)

    # data = dict(
    # category='',
    # value='',
    # slice_settings='',
    # breakdown = dict(category='', value='')
    # )

    CAT_MAP = {'medianfamilyincome': 'Median Family Income ($K)',
               'povertyrate': 'Poverty Rate (%)',
               f'la{dist}': f'Low Access {dist} (%)',
               'hunvflag': 'No vehicle @ half mile (%)',
               1: 'Households receiving SNAP benefits (%)'}
    data = []
    for race in RACES:
        category = race
        value = 100 * fd_summary[0][race].item() / summary[0][race].item()
        all_cols = []
        for i, col in enumerate(fd_summary.columns):
            breakdown = {}
            if col == 0:
                continue
            breakdown['category'] = CAT_MAP[col]
            value2 = fd_summary[col][race].item()
            if col == 'medianfamilyincome':
                value2 /= 1e3
            elif col == 'hunvflag':
                value2 *= 100
            # elif col == f'la{dist}':
            #     continue
                # value2 *= 100
            value2 = float(int(value2 * 100) / 100.)
            breakdown['value'] = value2
            breakdown['full'] = 100
            # breakdown['columnSettings'] = {
            #     'fill': f'chart.get("colors").getIndex({i})'
            # }
            all_cols.append(breakdown)
        data.append(dict(category=race,
                         value=float(int(value * 100) / 100.),
                         breakdown=all_cols
                         ))

    pprint(data)


if __name__ == '__main__':
    df2015 = pd.read_csv('../data/2015-fara.csv')
    df2015.columns = df2015.columns.str.lower()
    df2019 = pd.read_csv('../data/2019-fara.csv')
    df2019.columns = df2019.columns.str.lower()

    for k in df2019.keys():
        if 'share' in k:
            df2019[k] /= 100.

    abb = pd.read_csv('../data/abbrev.csv')

    # lila_state, lila_us, totals = get_us_data(df2015, abb)
    # lila_state, lila_us, totals = get_us_data(df2019, abb)
    get_tract_stats(df2019, abb)
    print('done.')
