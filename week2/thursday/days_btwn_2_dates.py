from datetime import date
date1=date(int(input("enter the year1:")),int(input("enter the ymonth1:")),int(input("enter the days1:")))
date2=date(int(input("enter the date2:")),int(input("enter the month2:")),int(input("enter the days2:")))
days=date2-date1
print(days.days)
