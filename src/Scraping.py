import requests
from bs4 import BeautifulSoup
import pandas as pd


url = 'https://www.meetboston.com/things-to-do/free-things-to-do/'
text = requests.get(url).text
soup = BeautifulSoup(text)

# finding classs elements 
events = soup.find_all('h2')
months = soup.find_all('span', class_='date-month')
days = soup.find_all('span', class_='date-day')
links = soup.find_all('a', class_='read-more')

event_list = []
month_list = []
day_list = []
date_list = []
link_list = []

#getting just text for months
for month in months:
    month_list.append(month.text)


#getting just text for days
for day in days:
    day_list.append(day.text)


# combine day and month for a "date" element
for i in range(len(month_list)):
    date_list.append(month_list[i] + " " + day_list[i])


# find links and if incomplete add https
for link in links:
    if ("https" not in link['href']):
        link_list.append("https://www.meetboston.com" + link['href'])
    else:
        link_list.append(link['href'])



# find events 
for event in events:
    event_text = event.get_text(strip=True)
    event_list.append(event.text.replace('\t', "").replace("\n", "").replace('\r', "").replace("\xa0", ""))


# remove the types of events 
event_list.remove("Festivals")
event_list.remove("Museums & Exhibitions")
event_list.remove("Family Friendly")
event_list.remove("Performing Arts")
event_list.remove("Films / Movies")
event_list.remove("Classes / Lectures")
event_list.remove("Tours & Trails")
event_list.remove("40 Budget-Friendly Things to Do in Boston")




df= pd.DataFrame(list(zip(event_list, date_list, link_list)), columns=['Events', 'Date', "Learn More"])
df = df.drop_duplicates()
df.to_csv('events.csv', index=False)