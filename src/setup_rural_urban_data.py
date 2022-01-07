import pandas as pd
from collections import defaultdict

#RACES = ['white', 'black', 'asian', 'nhopi', 'aian', 'omultir', 'hispanic']
#OTHER = ['kids', 'seniors']


def get_data(df, str):
    total_pop = 0
    sum = 0

    for num in df['pop2010']:
        total_pop = total_pop + num

    str_1_2 = str + 'half'
    str_1 = str + '1'
    str_10 = str + '10'
    str_20 = str + '20'

    for num in df[str_1_2]:  # , '1', '10', '20']:
        sum = sum + num

    print('\'distance\': \'>1/2 Mile\',')
    print('\'value\':', sum/1000000)
    print('}, {')

    sum = 0
    for num in df[str_1]:  # , '1', '10', '20']:
        sum = sum + num

    print('\'distance\': \'>1 Mile\',')
    print('\'value\':', sum/1000000)
    print('}, {')

    sum = 0
    for num in df[str_10]:  # , '1', '10', '20']:
        sum = sum + num

    print('\'distance\': \'>10 Miles\',')
    print('\'value\':', sum/1000000)
    print('}, {')

    sum = 0
    for num in df[str_20]:  # , '1', '10', '20']:
        sum = sum + num

    print('\'distance\': \'>20 Miles\',')
    print('\'value\':', sum/1000000)
    print('}, {')


if __name__ == '__main__':
    all_data = pd.read_csv('./data/rural_data.csv')
    all_data.columns = all_data.columns.str.lower()
    
    rural = all_data.loc[all_data['urban'] == 0]
    urban = all_data.loc[all_data['urban'] == 1]

    #get_data(rural, 'lakids')
    #get_data(rural, 'laseniors')
    #get_data(rural, 'lalowi')
    #get_data(rural, 'lasnap')

    #get_data(urban, 'lakids')
    #get_data(urban, 'laseniors')
    #get_data(urban, 'lalowi')
    get_data(urban, 'lasnap')