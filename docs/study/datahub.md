---

date: 2013-6-25

category: datahub

tag:

  - datahub

---

# data hub 源码修改

1. /opt/module/frappe-bench/erpnext/erpnext/controllers/selling_controller.py

   ```perl
def set_total_in_words(self):
   		from frappe.utils import money_in_words
   
   		if self.meta.get_field("base_in_words"):

   			base_amount = abs(
				
   				
   				float(self.base_grand_total) if self.is_rounded_total_disabled() else float(self.base_rounded_total)
   			)
   			self.base_in_words = money_in_words(base_amount, self.company_currency)
   
   		if self.meta.get_field("in_words"):
   			amount = abs(
   
   				float(self.grand_total) if self.is_rounded_total_disabled() else float(self.rounded_total)
   				
   				)
   
   			self.in_words = money_in_words(amount, self.currency)
   ```
   
   
   
2. /opt/module/frappe-bench/erpnext/erpnext/controllers/accounts_controller.py

   ```perl
   
   for d in self.get("payment_schedule"):
   				if d.invoice_portion:
   					d.payment_amount = flt(
   						 float(grand_total) * flt(d.invoice_portion / 100), d.precision("payment_amount")
   					)
   					d.base_payment_amount = flt(
   						float(base_grand_total) * flt(d.invoice_portion / 100), d.precision("base_payment_amount")
   					)
   					d.outstanding = d.payment_amount
   				elif not d.invoice_portion:
   					d.base_payment_amount = flt(
   						d.payment_amount * self.get("conversion_rate"), d.precision("base_payment_amount")
   					)
   ```

   

3. apps/frappe/frappe/model/document.py

   ```perl
   def _validate(self):
   		# self._validate_mandatory()
   		self._validate_data_fields()
   		self._validate_selects()
   		self._validate_non_negative()
   		self._validate_length()
   		self._validate_code_fields()
   		self._sync_autoname_field()
   		self._extract_images_from_text_editor()
   		self._sanitize_content()
   		self._save_passwords()
   		self.validate_workflow()
   ```

   

```perl
import json
import datetime
from time import strftime, time
import pandas as pd
import requests

import os,sys,random,string
import numpy as np
import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d import Axes3D
import pandas as pd
import requests
from datetime import datetime
from werkzeug.sansio.multipart import MultipartEncoder

if __name__ == '__main__':
    # python代码
    # 带全正的请求
    if __name__ == '__main__':
        string_date = "2023-04-07"
        # 转换字符串为日期类型
        date_obj = datetime.strptime(string_date, "%Y-%m-%d").date()

        string_date1 = "2023-07-11"

        # 转换字符串为日期类型
        date_obj1 = datetime.strptime(string_date, "%Y-%m-%d").date()

        url = "http://192.168.50.73/api/resource/Sales Order"
        data = {
            "so": "so_test_00",
            "docstatus":1,
            "title":"{customer_name}",
            "naming_series":"SAL-ORD-.YYYY.-",
            "customer":"200010134",
            "customer_name":"200010134",
            "order_type":"Sales",
            "transaction_date":date_obj,
            "delivery_date":date_obj1,
            "company":"shangjian",
            "currency":"CNY",
            "conversion_rate":1,
            "selling_price_list":"Standard Selling",
            "price_list_currency":"CNY",
            "plc_conversion_rate":1,
            "total_qty":10000,
            "total_net_weight":0.5,
            "base_in_words":"CNY 零 。",
            "in_words":"CNY 零 。",
            "apply_discount_on":"Grand Total",
            "customer_address":"China",
            "address_display":"China<br>China<br>",
            "customer_group":"Individual",
            "territory":"China",
            "delivery_status":"Not Delivered",
            "billing_status":"Not Billed",
            "language":"en",
            "sales_line":"20",
            "base_grand_total":0.00,
            "base_rounded_total": 0.00,
            "grand_total":0.0,
            "rounded_total":0.0,


        }
        headers = {
            'Authorization': "token b35823535ff6d52:55fa707ca16e4c5"
        }



        response = requests.request("POST", url, headers=headers,data=data)
        print(response.json())
        if(response.status_code == 200):
            print("Success")
            # parentId=response.json()['data']['name']
            # dataItem = {"item_name": "李玉龙", "item_age": 40, "parent": parentId, "parenttype": "Article",
            #             "parentfield": "items"}
            # urlItem = "http://192.168.50.73/api/resource/Sales Order Item"
            # response = requests.request("POST", urlItem, headers=headers, data=dataItem)
            # print(response.json())













```



1. 

2. 

   



