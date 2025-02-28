import requests,re
from bs4 import BeautifulSoup
url = "https://usbible.fhl.net/new/read.php?chineses=%E7%94%B3&nodic=0&chap=4"

payload = {}
headers = {
  'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
  'Accept-Language': 'zh-TW,zh;q=0.9,en-US;q=0.8,en;q=0.7',
  'Cache-Control': 'max-age=0',
  'Connection': 'keep-alive',
  'Cookie': 'Bstrongflag=0; BTABFLAG=1; PHPSESSID=25aqpegp757dnuuagj49dbikap; BTAIU=0; BTABFG=1; __utma=245323905.392038328.1740730173.1740730173.1740730173.1; __utmc=245323905; __utmz=245323905.1740730173.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); __utmt=1; Bchap=2; Bchineses=%E5%B0%BC; Bid=12309; __utmb=245323905.13.10.1740730173; BTABFG=1; BTABFLAG=1; BTAIU=0; Bchap=2; Bchineses=%E5%B0%BC; Bid=12309; Bstrongflag=0',
  'Referer': 'https://usbible.fhl.net/',
  'Sec-Fetch-Dest': 'document',
  'Sec-Fetch-Mode': 'navigate',
  'Sec-Fetch-Site': 'same-origin',
  'Sec-Fetch-User': '?1',
  'Upgrade-Insecure-Requests': '1',
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36',
  'sec-ch-ua': '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
  'sec-ch-ua-mobile': '?0',
  'sec-ch-ua-platform': '"Windows"'
}

response = requests.request("GET", url, headers=headers, data=payload,verify=False)

soup = BeautifulSoup(response.text, "html.parser") 

tag_td =soup.select('td')

count=0
strat=0

for td in tag_td:
    count+=1
    #print(td.getText())
    if td.getText()=='註釋':
       strat=count




for i in range(strat,count):
    print(tag_td[i].getText())
    
   
    