import pandas as pd
import seaborn as sns
from collections import defaultdict
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

        us_data = defaultdict(int)
        # for race in OTHER:
        #     us_data[race] += df_state[f'tract{race}'].sum().item()
        # us_data["wov"] = df_state[f'tracthunv'].sum().item()
        # us_data["total"] = df_state[f'ohu2010'].sum().item()
        us_data["wov"] = df_state[f'tractlowi'].sum().item()
        us_data["total"] = df_state[f'pop2010'].sum().item()
    return us_data


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
    lila_state = get_us_data(df2015, abb)
    print(lila_state)
    print('done.')
