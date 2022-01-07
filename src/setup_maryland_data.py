import pandas as pd
from collections import defaultdict

#RACES = ['white', 'black', 'asian', 'nhopi', 'aian', 'omultir', 'hispanic']
#OTHER = ['kids', 'seniors']


def get_data(df):

    df_county_total = df.groupby('county').sum().reset_index()
    print(df_county_total)

    county_name = "Allegany"
    total_pop = 0
    pop_desert = 0
    id = 24001

    for ind in df.index:
        if (df['county'][ind] != county_name):
            str_num = "{:.2f}".format(pop_desert/total_pop*100)
            str_num = "\'" + str_num + "%" + "\'"
            print('\'id\':', id, ',')
            print('\'name\': \'', county_name, '\',')
            print('\'value\':', str_num)
            print('}, {')
            county_name = df['county'][ind]
            if (id == 24005):
                 id = 24009
            elif (county_name == "Baltimore City"):
                 id = 24510
            else:
                 id = id + 2
            pop_desert = 0
            total_pop = 0
             
        total_pop = total_pop + df['pop2010'][ind]
        if (df['lilatracts_1and10'][ind] == 1):
            pop_desert = pop_desert + df['pop2010'][ind]

    str_num = "{:.2f}".format(pop_desert/total_pop*100)
    str_num = "\'" + str_num + "%" + "\'"
    print('\'id\':', id, ',')
    print('\'name\': \'', county_name, '\',')
    print('\'value\':', str_num)

def get_county_data(df):

    county_name = "Allegany"
    total_pop = 0
    white_pop = 0
    black_pop = 0
    asian_pop = 0
    nhopi_pop = 0
    aian_pop = 0
    omultir_pop = 0
    hispanic_pop = 0

    total = 0
    white = 0
    black = 0
    asian = 0
    nhopi = 0
    aian = 0
    omultir = 0
    hispanic = 0

    for ind in df.index:
        if (df['county'][ind] != county_name):
            if (total_pop == 0):
                white_pop = 0
                black_pop = 0
                asian_pop = 0
                nhopi_pop = 0
                aian_pop = 0
                omultir_pop = 0
                hispanic_pop = 0
                total_pop = 1
            if (total == 0):
                total = 1
                white = 0
                black = 0
                asian = 0
                nhopi = 0
                aian = 0
                omultir = 0
                hispanic = 0
            str_num = "case \'" + county_name + "\':" + "\n"
            print(str_num)
            print("return [{")
            print("\"category\": \"White\",")
            str_val = "\"value\": " + "{:.2f}".format(white_pop/total_pop*100)
            str_total = "\"total\": " + "{:.2f}".format(white/total*100) + ","
            print(str_total)
            print(str_val)
            print("},{")

            print("\"category\": \"Black\",")
            str_val = "\"value\": " + "{:.2f}".format(black_pop/total_pop*100)
            str_total = "\"total\": " + "{:.2f}".format(black/total*100) + ","
            print(str_total)
            print(str_val)
            print("},{")

            print("\"category\": \"Asian\",")
            str_val = "\"value\": " + "{:.2f}".format(asian_pop/total_pop*100)
            str_total = "\"total\": " + "{:.2f}".format(asian/total*100) + ","
            print(str_total)
            print(str_val)
            print("},{")

            print("\"category\": \"NHOPI\",")
            str_val = "\"value\": " + "{:.2f}".format(nhopi_pop/total_pop*100)
            str_total = "\"total\": " + "{:.2f}".format(nhopi/total*100) + ","
            print(str_total)
            print(str_val)
            print("},{")

            print("\"category\": \"AIAN\",")
            str_val = "\"value\": " + "{:.2f}".format(aian_pop/total_pop*100)
            str_total = "\"total\": " + "{:.2f}".format(aian/total*100) + ","
            print(str_total)
            print(str_val)
            print("},{")

            print("\"category\": \"OMultiR\",")
            str_val = "\"value\": " + "{:.2f}".format(omultir_pop/total_pop*100)
            str_total = "\"total\": " + "{:.2f}".format(omultir/total*100) + ","
            print(str_total)
            print(str_val)
            print("},{")

            print("\"category\": \"Hispanic\",")
            str_val = "\"value\": " + "{:.2f}".format(hispanic_pop/total_pop*100)
            str_total = "\"total\": " + "{:.2f}".format(hispanic/total*100) + ","
            print(str_total)
            print(str_val)
            print("}];")

            county_name = df['county'][ind]
            total_pop = 0
            white_pop = 0
            black_pop = 0
            asian_pop = 0
            nhopi_pop = 0
            aian_pop = 0
            omultir_pop = 0
            hispanic_pop = 0

            total = 0
            white = 0
            black = 0
            asian = 0
            nhopi = 0
            aian = 0
            omultir = 0
            hispanic = 0

        white = white + df['tractwhite'][ind]
        black = black + df['tractblack'][ind]
        asian = asian + df['tractasian'][ind]
        nhopi = nhopi + df['tractnhopi'][ind]
        aian = aian + df['tractaian'][ind]
        omultir = omultir + df['tractomultir'][ind]
        hispanic = hispanic + df['tracthispanic'][ind]
        total = total + df['pop2010'][ind]

        if (df['lilatracts_1and10'][ind] == 1):
            white_pop = white_pop + df['tractwhite'][ind]
            black_pop = black_pop + df['tractblack'][ind]
            asian_pop = asian_pop + df['tractasian'][ind]
            nhopi_pop = nhopi_pop + df['tractnhopi'][ind]
            aian_pop = aian_pop + df['tractaian'][ind]
            omultir_pop = omultir_pop + df['tractomultir'][ind]
            hispanic_pop = hispanic_pop + df['tracthispanic'][ind]
            total_pop = total_pop + df['pop2010'][ind]

    str_num = "case \'" + county_name + "\':" + "\n"
    print(str_num)
    print("return [{")
    print("\"category\": \"White\",")
    str_val = "\"value\": " + "{:.2f}".format(white_pop/total_pop*100)
    str_total = "\"total\": " + "{:.2f}".format(white/total*100) + ","
    print(str_total)
    print(str_val)
    print("},{")

    print("\"category\": \"Black\",")
    str_val = "\"value\": " + "{:.2f}".format(black_pop/total_pop*100)
    str_total = "\"total\": " + "{:.2f}".format(black/total*100) + ","
    print(str_total)
    print(str_val)
    print("},{")

    print("\"category\": \"Asian\",")
    str_val = "\"value\": " + "{:.2f}".format(asian_pop/total_pop*100)
    str_total = "\"total\": " + "{:.2f}".format(asian/total*100) + ","
    print(str_total)
    print(str_val)
    print("},{")

    print("\"category\": \"NHOPI\",")
    str_val = "\"value\": " + "{:.2f}".format(nhopi_pop/total_pop*100)
    str_total = "\"total\": " + "{:.2f}".format(nhopi/total*100) + ","
    print(str_total)
    print(str_val)
    print("},{")

    print("\"category\": \"AIAN\",")
    str_val = "\"value\": " + "{:.2f}".format(aian_pop/total_pop*100)
    str_total = "\"total\": " + "{:.2f}".format(aian/total*100) + ","
    print(str_total)
    print(str_val)
    print("},{")

    print("\"category\": \"OMultiR\",")
    str_val = "\"value\": " + "{:.2f}".format(omultir_pop/total_pop*100)
    str_total = "\"total\": " + "{:.2f}".format(omultir/total*100) + ","
    print(str_total)
    print(str_val)
    print("},{")

    print("\"category\": \"Hispanic\",")
    str_val = "\"value\": " + "{:.2f}".format(hispanic_pop/total_pop*100)
    str_total = "\"total\": " + "{:.2f}".format(hispanic/total*100) + ","
    print(str_total)
    print(str_val)
    print("}];")
             
    

if __name__ == '__main__':
    all_data = pd.read_csv('./data/maryland_data.csv')
    all_data.columns = all_data.columns.str.lower()

    #get_data(all_data)

    get_county_data(all_data)