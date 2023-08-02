---

date: 2013-6-25

category: datahub

tag:

  - datahub

---

# data hub 功能实现

####  一 . 销售订单将仿真数据自动插入datahub功能

 源码修改:

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

   客户端开发请求功能:

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
            "owner":"test",
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
        # headers = {
        #     'Authorization': "token b35823535ff6d52:55fa707ca16e4c5"
        # }

        headers = {
            'Authorization': "token 8175f5133014dab:ed25df6991bae0c"
        }





        response = requests.request("POST", url, headers=headers,data=data)
        print(response.json())
        if(response.status_code == 200):
            print("Success")
            parentId=response.json()['data']['name']
            print(parentId)
            dataItem = {
                "docstatus": 1,
                "item_code": "4X90S92381",
                "ensure_delivery_based_on_produced_serial_no":0,
                "delivery_date":date_obj1,
                "item_name":"通信电源用阻燃软电缆 ZA-RVV 1×70 0.6/1kV YD B0",
                "description":"通信电源用阻燃软电缆 ZA-RVV 1×70 0.6/1kV YD B0",
                "item_group":"Products",
                "qty":0.016,
                "stock_uom":"Km",
                "uom":"Km",
                "conversion_factor":1,
                "stock_qty":0.016,
                "price_list_rate":0,
                "base_price_list_rate":0,
                "margin_rate_or_amount":0,
                "rate_with_margin":0,
                "discount_percentage":0,
                "discount_amount":0,
                "base_rate_with_margin":0,
                "rate":0,
                "amount":0,
                "base_rate":0,
                "base_amount":0,
                "stock_uom_rate":0,
                "is_free_item":0,
                "grant_commission":1,
                "valuation_rate":10,
                "gross_profit":-10,
                "weight_per_unit":2518.9,
                "total_weight":40.302,
                "warehouse":"Stores - S",
                "bom_no":"BOM-20T2S0CK00",
                "projected_qty":-55.042,
                "actual_qty":596,
                "item_tax_rate":"{}",
                "transaction_date":date_obj1,
                "parent":parentId,
                "parentfield": "items",
                "parenttype": "Sales Order",
                "priority":"4476.0000",
                "priority_type":"60.0000",
                "ots_sla":"8",
                "brand_map":"OPTION",
                "derived_net_revenue":"59.2252",
                "process_file_num":"1193",
                "locked":"未锁定",
            }
            urlItem = "http://192.168.50.73/api/resource/Sales Order Item"
            response = requests.request("POST", urlItem, headers=headers, data=dataItem)
            print(response.json())

```



#### 二 aps用户功能和datahub用户打通(aps跳转datahub自动登录功能)

1. 开发接口接收aps传过来的账号密码:

   http://192.168.50.23/api/method/frappe.www.login.set_username_password?name=xiaoli&password=aaa

    apps/frappe/frappe/www/login.py

   ```perl
   
   @frappe.whitelist(allow_guest=True)
   def set_username_password(name, password):
   	print(name)
   	print(password)
   	frappe.cache().set_value("userName", name)
   	frappe.cache().set_value("password", password)
   
   ```

   获取账号密码

   ```perl
   def get_context(context):
   	userInfo=frappe.cache().get_value("userName")
   	password = frappe.cache().get_value("password")
   	print(userInfo)
   	print(password)
   	context["userName"] = userInfo
   	context["password"] = password
   ```

   

   由于框架使用frappe,使用jinja模版.将账号传入html端

   apps/frappe/frappe/www/login.html

   ```perl
   <div style="display: none" class="user">{{userName}}</div>
   <div style="display: none" class="password">{{password}}</div>
   ```

   

   apps/frappe/frappe/templates/includes/login/login.js

   js端获取账号

   ```perl
   $(window).on("hashchange", function () {
   
   		var userInfo=$(".user").text();
			var passwd=$(".password").text();
   		console.log(userInfo)
			console.log(passwd)
   
   		//用传过来的userInfo passwd进行登录
   
   		var args = {};
   		args.cmd = "login";
   		args.usr = userInfo
   		args.pwd = passwd;
   		args.device = "desktop";
   		if (!args.usr || !args.pwd) {
   			frappe.msgprint('{{ _("Both login and password required") }}');
   			return false;
   		}
   		login.call(args);
   
   		return false;
   
	
   		login.route();
		});
   ```
   
   
   
   
   
   
   
   apps/frappe/frappe/www/message.html
   
   ```perl
   <div style="display: none"><a id="loginitem" href='{{ primary_action or "/" }}' class='btn btn-primary btn-sm'>
   			确定</a></div>
   ```
   
   
   
   ```perl
   
   <script>
   	frappe.ready(function() {
   
   		if (window.location.hash || window.location.href.includes('/app')) {
   			localStorage.setItem('session_last_route', window.location.pathname + window.location.hash + window.location.search);
   		}
   
   		$('.btn-primary').focus();
   		var link = document.getElementById('loginitem');
   		console.log(link)
   		link.click()
   	});
   </script>
   {% endblock %}
   ```
   
   apps/frappe/frappe/handler.py
   
   ```perl
   
   @frappe.whitelist(allow_guest=True)
   def web_logout():
   	frappe.local.login_manager.logout()
   	frappe.db.commit()
   
   	frappe.respond_as_web_page(
   		"用户切换", _("用户切换中...."), indicator_color="green"
   	)
   ```
   
   
   
   
   
   
   
   客户端请求
   
   ```perl
   #调用接口的客户端(aps端)
   
     $.ajax({
            // url:"http://192.168.50.23/api/method/frappe.www.login.set_username_password?name=duchengkun@shangjian.com&password=zxc%3C%3E?123",
           url: "http://192.168.50.23/api/method/frappe.www.login.set_username_password?name=Administrator&password=123",
   
           type: "GET",
          success: function(response) {
               console.log(response)
               var newWindow = window.open('_blank')
               newWindow.location='http://192.168.50.23/?cmd=web_logout'
   
     },
     error: function(xhr, status, error) {
       // 处理错误
     }
   });
   ```
   
   
   
   备注 
   
   在html中如何使用js代码,使用{% block script %}和{% endblock %},如下代码
   
   apps/frappe/frappe/www/error.html
   
   ```perl
   {% block script %}
   <script>
   	let toggle_button = $(".view-error");
   	let error_log = $(".error-content");
   
   	toggle_button.on('click', () => {
   		if (error_log.hasClass("hidden")) {
   			toggle_button.html(`{{ _("Hide Traceback") }}`);
   			error_log.removeClass("hidden");
   		} else {
   			toggle_button.html(`{{ _("Show Traceback") }}`);
   			error_log.addClass("hidden");
   		}
   	})
   </script>
   {% endblock %}
   ```
   
   
   
   
   
   
   
   
   
   
   
   7.10 修改frappe/frappe/public/js/frappe/views/workspace/workspace.js
   
   ```perl
   this.page.add_inner_button(__("Create Workspace"), () => {
   			this.initialize_new_page();
   		});
   
   		//加入数据生成
   				this.page.add_inner_button(__("数据生成"), () => {
   
   			$.ajax({
                   url: "http://192.168.50.229:7500/PC/new_orders",
                   method: 'get',
   				success(result, status, xhr) {
                   console.log(result);
                }
               });
   			
   			frappe.msgprint(__('数据生成成功'));
   
   		});
   
   ```
   
   
   
   







