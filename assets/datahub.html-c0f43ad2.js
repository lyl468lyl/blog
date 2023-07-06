import{_ as n,o as s,c as a,e as t}from"./app-d13f43c9.js";const e={},o=t(`<h1 id="data-hub-源码修改" tabindex="-1"><a class="header-anchor" href="#data-hub-源码修改" aria-hidden="true">#</a> data hub 源码修改</h1><ol><li><p>/opt/module/frappe-bench/erpnext/erpnext/controllers/selling_controller.py</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code></code></pre><div class="line-numbers" aria-hidden="true"></div></div></li></ol><p>def set_total_in_words(self): from frappe.utils import money_in_words</p><pre><code>	if self.meta.get_field(&quot;base_in_words&quot;):

		base_amount = abs(
			
			
			float(self.base_grand_total) if self.is_rounded_total_disabled() else float(self.base_rounded_total)
		)
		self.base_in_words = money_in_words(base_amount, self.company_currency)

	if self.meta.get_field(&quot;in_words&quot;):
		amount = abs(

			float(self.grand_total) if self.is_rounded_total_disabled() else float(self.rounded_total)
			
			)

		self.in_words = money_in_words(amount, self.currency)
</code></pre><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>


2. /opt/module/frappe-bench/erpnext/erpnext/controllers/accounts_controller.py

\`\`\`perl

for d in self.get(&quot;payment_schedule&quot;):
				if d.invoice_portion:
					d.payment_amount = flt(
						 float(grand_total) * flt(d.invoice_portion / 100), d.precision(&quot;payment_amount&quot;)
					)
					d.base_payment_amount = flt(
						float(base_grand_total) * flt(d.invoice_portion / 100), d.precision(&quot;base_payment_amount&quot;)
					)
					d.outstanding = d.payment_amount
				elif not d.invoice_portion:
					d.base_payment_amount = flt(
						d.payment_amount * self.get(&quot;conversion_rate&quot;), d.precision(&quot;base_payment_amount&quot;)
					)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li><p>apps/frappe/frappe/model/document.py</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>def _validate<span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
		<span class="token comment"># self._validate_mandatory()</span>
		self<span class="token operator">.</span>_validate_data_fields<span class="token punctuation">(</span><span class="token punctuation">)</span>
		self<span class="token operator">.</span>_validate_selects<span class="token punctuation">(</span><span class="token punctuation">)</span>
		self<span class="token operator">.</span>_validate_non_negative<span class="token punctuation">(</span><span class="token punctuation">)</span>
		self<span class="token operator">.</span>_validate_length<span class="token punctuation">(</span><span class="token punctuation">)</span>
		self<span class="token operator">.</span>_validate_code_fields<span class="token punctuation">(</span><span class="token punctuation">)</span>
		self<span class="token operator">.</span>_sync_autoname_field<span class="token punctuation">(</span><span class="token punctuation">)</span>
		self<span class="token operator">.</span>_extract_images_from_text_editor<span class="token punctuation">(</span><span class="token punctuation">)</span>
		self<span class="token operator">.</span>_sanitize_content<span class="token punctuation">(</span><span class="token punctuation">)</span>
		self<span class="token operator">.</span>_save_passwords<span class="token punctuation">(</span><span class="token punctuation">)</span>
		self<span class="token operator">.</span>validate_workflow<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>import json
import datetime
from time import strftime<span class="token punctuation">,</span> time
import pandas as pd
import requests

import os<span class="token punctuation">,</span>sys<span class="token punctuation">,</span>random<span class="token punctuation">,</span>string
import numpy as np
import matplotlib<span class="token operator">.</span>pyplot as plt
from mpl_toolkits<span class="token operator">.</span>mplot3d import Axes3D
import pandas as pd
import requests
from datetime import datetime
from werkzeug<span class="token operator">.</span>sansio<span class="token operator">.</span>multipart import MultipartEncoder

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    <span class="token comment"># python代码</span>
    <span class="token comment"># 带全正的请求</span>
    <span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
        string_date <span class="token operator">=</span> <span class="token string">&quot;2023-04-07&quot;</span>
        <span class="token comment"># 转换字符串为日期类型</span>
        date_obj <span class="token operator">=</span> datetime<span class="token operator">.</span>strptime<span class="token punctuation">(</span>string_date<span class="token punctuation">,</span> <span class="token string">&quot;%Y-%m-%d&quot;</span><span class="token punctuation">)</span><span class="token operator">.</span>date<span class="token punctuation">(</span><span class="token punctuation">)</span>

        string_date1 <span class="token operator">=</span> <span class="token string">&quot;2023-07-11&quot;</span>

        <span class="token comment"># 转换字符串为日期类型</span>
        date_obj1 <span class="token operator">=</span> datetime<span class="token operator">.</span>strptime<span class="token punctuation">(</span>string_date<span class="token punctuation">,</span> <span class="token string">&quot;%Y-%m-%d&quot;</span><span class="token punctuation">)</span><span class="token operator">.</span>date<span class="token punctuation">(</span><span class="token punctuation">)</span>

        url <span class="token operator">=</span> <span class="token string">&quot;http://192.168.50.73/api/resource/Sales Order&quot;</span>
        data <span class="token operator">=</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;so&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;so_test_00&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;docstatus&quot;</span><span class="token punctuation">:</span><span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token string">&quot;title&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;{customer_name}&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;naming_series&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;SAL-ORD-.YYYY.-&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;customer&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;200010134&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;customer_name&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;200010134&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;order_type&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;Sales&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;transaction_date&quot;</span><span class="token punctuation">:</span>date_obj<span class="token punctuation">,</span>
            <span class="token string">&quot;delivery_date&quot;</span><span class="token punctuation">:</span>date_obj1<span class="token punctuation">,</span>
            <span class="token string">&quot;company&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;shangjian&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;currency&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;CNY&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;conversion_rate&quot;</span><span class="token punctuation">:</span><span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token string">&quot;selling_price_list&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;Standard Selling&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;price_list_currency&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;CNY&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;plc_conversion_rate&quot;</span><span class="token punctuation">:</span><span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token string">&quot;total_qty&quot;</span><span class="token punctuation">:</span><span class="token number">10000</span><span class="token punctuation">,</span>
            <span class="token string">&quot;total_net_weight&quot;</span><span class="token punctuation">:</span><span class="token number">0.5</span><span class="token punctuation">,</span>
            <span class="token string">&quot;base_in_words&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;CNY 零 。&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;in_words&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;CNY 零 。&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;apply_discount_on&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;Grand Total&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;customer_address&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;China&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;address_display&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;China&lt;br&gt;China&lt;br&gt;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;customer_group&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;Individual&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;territory&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;China&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;delivery_status&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;Not Delivered&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;billing_status&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;Not Billed&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;language&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;en&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;sales_line&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;20&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;base_grand_total&quot;</span><span class="token punctuation">:</span><span class="token number">0.00</span><span class="token punctuation">,</span>
            <span class="token string">&quot;base_rounded_total&quot;</span><span class="token punctuation">:</span> <span class="token number">0.00</span><span class="token punctuation">,</span>
            <span class="token string">&quot;grand_total&quot;</span><span class="token punctuation">:</span><span class="token number">0.0</span><span class="token punctuation">,</span>
            <span class="token string">&quot;rounded_total&quot;</span><span class="token punctuation">:</span><span class="token number">0.0</span><span class="token punctuation">,</span>


        <span class="token punctuation">}</span>
        headers <span class="token operator">=</span> <span class="token punctuation">{</span>
            <span class="token string">&#39;Authorization&#39;</span><span class="token punctuation">:</span> <span class="token string">&quot;token b35823535ff6d52:55fa707ca16e4c5&quot;</span>
        <span class="token punctuation">}</span>



        response <span class="token operator">=</span> requests<span class="token operator">.</span>request<span class="token punctuation">(</span><span class="token string">&quot;POST&quot;</span><span class="token punctuation">,</span> url<span class="token punctuation">,</span> headers<span class="token operator">=</span>headers<span class="token punctuation">,</span>data<span class="token operator">=</span>data<span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>response<span class="token operator">.</span>json<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>response<span class="token operator">.</span>status_code <span class="token operator">==</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Success&quot;</span><span class="token punctuation">)</span>
            <span class="token comment"># parentId=response.json()[&#39;data&#39;][&#39;name&#39;]</span>
            <span class="token comment"># dataItem = {&quot;item_name&quot;: &quot;李玉龙&quot;, &quot;item_age&quot;: 40, &quot;parent&quot;: parentId, &quot;parenttype&quot;: &quot;Article&quot;,</span>
            <span class="token comment">#             &quot;parentfield&quot;: &quot;items&quot;}</span>
            <span class="token comment"># urlItem = &quot;http://192.168.50.73/api/resource/Sales Order Item&quot;</span>
            <span class="token comment"># response = requests.request(&quot;POST&quot;, urlItem, headers=headers, data=dataItem)</span>
            <span class="token comment"># print(response.json())</span>













</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li></li><li></li></ol>`,8),p=[o];function i(l,u){return s(),a("div",null,p)}const r=n(e,[["render",i],["__file","datahub.html.vue"]]);export{r as default};
