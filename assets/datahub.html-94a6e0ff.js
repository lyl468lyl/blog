import{_ as n,o as s,c as a,e as t}from"./app-c74164ac.js";const p={},e=t(`<h1 id="data-hub-功能实现" tabindex="-1"><a class="header-anchor" href="#data-hub-功能实现" aria-hidden="true">#</a> data hub 功能实现</h1><h4 id="一-销售订单将仿真数据自动插入datahub功能" tabindex="-1"><a class="header-anchor" href="#一-销售订单将仿真数据自动插入datahub功能" aria-hidden="true">#</a> 一 . 销售订单将仿真数据自动插入datahub功能</h4><p>源码修改:</p><ol><li><p>/opt/module/frappe-bench/erpnext/erpnext/controllers/selling_controller.py</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code></code></pre><div class="line-numbers" aria-hidden="true"></div></div></li></ol><p>def set_total_in_words(self): from frappe.utils import money_in_words</p><pre><code>	if self.meta.get_field(&quot;base_in_words&quot;):

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>客户端开发请求功能:</p></li></ol><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>import json
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
            <span class="token string">&quot;owner&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;test&quot;</span><span class="token punctuation">,</span>
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
        <span class="token comment"># headers = {</span>
        <span class="token comment">#     &#39;Authorization&#39;: &quot;token b35823535ff6d52:55fa707ca16e4c5&quot;</span>
        <span class="token comment"># }</span>

        headers <span class="token operator">=</span> <span class="token punctuation">{</span>
            <span class="token string">&#39;Authorization&#39;</span><span class="token punctuation">:</span> <span class="token string">&quot;token 8175f5133014dab:ed25df6991bae0c&quot;</span>
        <span class="token punctuation">}</span>





        response <span class="token operator">=</span> requests<span class="token operator">.</span>request<span class="token punctuation">(</span><span class="token string">&quot;POST&quot;</span><span class="token punctuation">,</span> url<span class="token punctuation">,</span> headers<span class="token operator">=</span>headers<span class="token punctuation">,</span>data<span class="token operator">=</span>data<span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>response<span class="token operator">.</span>json<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>response<span class="token operator">.</span>status_code <span class="token operator">==</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Success&quot;</span><span class="token punctuation">)</span>
            parentId<span class="token operator">=</span>response<span class="token operator">.</span>json<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token string">&#39;data&#39;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">]</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span>parentId<span class="token punctuation">)</span>
            dataItem <span class="token operator">=</span> <span class="token punctuation">{</span>
                <span class="token string">&quot;docstatus&quot;</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                <span class="token string">&quot;item_code&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;4X90S92381&quot;</span><span class="token punctuation">,</span>
                <span class="token string">&quot;ensure_delivery_based_on_produced_serial_no&quot;</span><span class="token punctuation">:</span><span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token string">&quot;delivery_date&quot;</span><span class="token punctuation">:</span>date_obj1<span class="token punctuation">,</span>
                <span class="token string">&quot;item_name&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;通信电源用阻燃软电缆 ZA-RVV 1×70 0.6/1kV YD B0&quot;</span><span class="token punctuation">,</span>
                <span class="token string">&quot;description&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;通信电源用阻燃软电缆 ZA-RVV 1×70 0.6/1kV YD B0&quot;</span><span class="token punctuation">,</span>
                <span class="token string">&quot;item_group&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;Products&quot;</span><span class="token punctuation">,</span>
                <span class="token string">&quot;qty&quot;</span><span class="token punctuation">:</span><span class="token number">0.016</span><span class="token punctuation">,</span>
                <span class="token string">&quot;stock_uom&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;Km&quot;</span><span class="token punctuation">,</span>
                <span class="token string">&quot;uom&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;Km&quot;</span><span class="token punctuation">,</span>
                <span class="token string">&quot;conversion_factor&quot;</span><span class="token punctuation">:</span><span class="token number">1</span><span class="token punctuation">,</span>
                <span class="token string">&quot;stock_qty&quot;</span><span class="token punctuation">:</span><span class="token number">0.016</span><span class="token punctuation">,</span>
                <span class="token string">&quot;price_list_rate&quot;</span><span class="token punctuation">:</span><span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token string">&quot;base_price_list_rate&quot;</span><span class="token punctuation">:</span><span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token string">&quot;margin_rate_or_amount&quot;</span><span class="token punctuation">:</span><span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token string">&quot;rate_with_margin&quot;</span><span class="token punctuation">:</span><span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token string">&quot;discount_percentage&quot;</span><span class="token punctuation">:</span><span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token string">&quot;discount_amount&quot;</span><span class="token punctuation">:</span><span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token string">&quot;base_rate_with_margin&quot;</span><span class="token punctuation">:</span><span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token string">&quot;rate&quot;</span><span class="token punctuation">:</span><span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token string">&quot;amount&quot;</span><span class="token punctuation">:</span><span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token string">&quot;base_rate&quot;</span><span class="token punctuation">:</span><span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token string">&quot;base_amount&quot;</span><span class="token punctuation">:</span><span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token string">&quot;stock_uom_rate&quot;</span><span class="token punctuation">:</span><span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token string">&quot;is_free_item&quot;</span><span class="token punctuation">:</span><span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token string">&quot;grant_commission&quot;</span><span class="token punctuation">:</span><span class="token number">1</span><span class="token punctuation">,</span>
                <span class="token string">&quot;valuation_rate&quot;</span><span class="token punctuation">:</span><span class="token number">10</span><span class="token punctuation">,</span>
                <span class="token string">&quot;gross_profit&quot;</span><span class="token punctuation">:</span><span class="token operator">-</span><span class="token number">10</span><span class="token punctuation">,</span>
                <span class="token string">&quot;weight_per_unit&quot;</span><span class="token punctuation">:</span><span class="token number">2518.9</span><span class="token punctuation">,</span>
                <span class="token string">&quot;total_weight&quot;</span><span class="token punctuation">:</span><span class="token number">40.302</span><span class="token punctuation">,</span>
                <span class="token string">&quot;warehouse&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;Stores - S&quot;</span><span class="token punctuation">,</span>
                <span class="token string">&quot;bom_no&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;BOM-20T2S0CK00&quot;</span><span class="token punctuation">,</span>
                <span class="token string">&quot;projected_qty&quot;</span><span class="token punctuation">:</span><span class="token operator">-</span><span class="token number">55.042</span><span class="token punctuation">,</span>
                <span class="token string">&quot;actual_qty&quot;</span><span class="token punctuation">:</span><span class="token number">596</span><span class="token punctuation">,</span>
                <span class="token string">&quot;item_tax_rate&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;{}&quot;</span><span class="token punctuation">,</span>
                <span class="token string">&quot;transaction_date&quot;</span><span class="token punctuation">:</span>date_obj1<span class="token punctuation">,</span>
                <span class="token string">&quot;parent&quot;</span><span class="token punctuation">:</span>parentId<span class="token punctuation">,</span>
                <span class="token string">&quot;parentfield&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;items&quot;</span><span class="token punctuation">,</span>
                <span class="token string">&quot;parenttype&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Sales Order&quot;</span><span class="token punctuation">,</span>
                <span class="token string">&quot;priority&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;4476.0000&quot;</span><span class="token punctuation">,</span>
                <span class="token string">&quot;priority_type&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;60.0000&quot;</span><span class="token punctuation">,</span>
                <span class="token string">&quot;ots_sla&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;8&quot;</span><span class="token punctuation">,</span>
                <span class="token string">&quot;brand_map&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;OPTION&quot;</span><span class="token punctuation">,</span>
                <span class="token string">&quot;derived_net_revenue&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;59.2252&quot;</span><span class="token punctuation">,</span>
                <span class="token string">&quot;process_file_num&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;1193&quot;</span><span class="token punctuation">,</span>
                <span class="token string">&quot;locked&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;未锁定&quot;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span>
            urlItem <span class="token operator">=</span> <span class="token string">&quot;http://192.168.50.73/api/resource/Sales Order Item&quot;</span>
            response <span class="token operator">=</span> requests<span class="token operator">.</span>request<span class="token punctuation">(</span><span class="token string">&quot;POST&quot;</span><span class="token punctuation">,</span> urlItem<span class="token punctuation">,</span> headers<span class="token operator">=</span>headers<span class="token punctuation">,</span> data<span class="token operator">=</span>dataItem<span class="token punctuation">)</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span>response<span class="token operator">.</span>json<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="二-aps用户功能和datahub用户打通-aps跳转datahub自动登录功能" tabindex="-1"><a class="header-anchor" href="#二-aps用户功能和datahub用户打通-aps跳转datahub自动登录功能" aria-hidden="true">#</a> 二 aps用户功能和datahub用户打通(aps跳转datahub自动登录功能)</h4><ol><li><p>开发接口接收aps传过来的账号密码:</p><p>http://192.168.50.23/api/method/frappe.www.login.set_username_password?name=xiaoli&amp;password=aaa</p><p>apps/frappe/frappe/www/login.py</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>
<span class="token variable">@frappe</span><span class="token operator">.</span>whitelist<span class="token punctuation">(</span>allow_guest<span class="token operator">=</span>True<span class="token punctuation">)</span>
def set_username_password<span class="token punctuation">(</span>name<span class="token punctuation">,</span> password<span class="token punctuation">)</span><span class="token punctuation">:</span>
	<span class="token keyword">print</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>
	<span class="token keyword">print</span><span class="token punctuation">(</span>password<span class="token punctuation">)</span>
	frappe<span class="token operator">.</span>cache<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">.</span>set_value<span class="token punctuation">(</span><span class="token string">&quot;userName&quot;</span><span class="token punctuation">,</span> name<span class="token punctuation">)</span>
	frappe<span class="token operator">.</span>cache<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">.</span>set_value<span class="token punctuation">(</span><span class="token string">&quot;password&quot;</span><span class="token punctuation">,</span> password<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>获取账号密码</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>def get_context<span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">:</span>
	userInfo<span class="token operator">=</span>frappe<span class="token operator">.</span>cache<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">.</span>get_value<span class="token punctuation">(</span><span class="token string">&quot;userName&quot;</span><span class="token punctuation">)</span>
	password <span class="token operator">=</span> frappe<span class="token operator">.</span>cache<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">.</span>get_value<span class="token punctuation">(</span><span class="token string">&quot;password&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">print</span><span class="token punctuation">(</span>userInfo<span class="token punctuation">)</span>
	<span class="token keyword">print</span><span class="token punctuation">(</span>password<span class="token punctuation">)</span>
	context<span class="token punctuation">[</span><span class="token string">&quot;userName&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> userInfo
	context<span class="token punctuation">[</span><span class="token string">&quot;password&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> password
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于框架使用frappe,使用jinja模版.将账号传入html端</p><p>apps/frappe/frappe/www/login.html</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code><span class="token operator">&lt;</span>div style<span class="token operator">=</span><span class="token string">&quot;display: none&quot;</span> class<span class="token operator">=</span><span class="token string">&quot;user&quot;</span><span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span>userName<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token filehandle symbol">&lt;/div&gt;</span>
<span class="token operator">&lt;</span>div style<span class="token operator">=</span><span class="token string">&quot;display: none&quot;</span> class<span class="token operator">=</span><span class="token string">&quot;password&quot;</span><span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span>password<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token filehandle symbol">&lt;/div&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>apps/frappe/frappe/templates/includes/login/login.js</p><p>js端获取账号</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code><span class="token variable">$(</span>window<span class="token punctuation">)</span><span class="token operator">.</span>on<span class="token punctuation">(</span><span class="token string">&quot;hashchange&quot;</span><span class="token punctuation">,</span> function <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

		var userInfo<span class="token operator">=</span><span class="token variable">$(</span><span class="token string">&quot;.user&quot;</span><span class="token punctuation">)</span><span class="token operator">.</span>text<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 		var passwd<span class="token operator">=</span><span class="token variable">$(</span><span class="token string">&quot;.password&quot;</span><span class="token punctuation">)</span><span class="token operator">.</span>text<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		console<span class="token operator">.</span>log<span class="token punctuation">(</span>userInfo<span class="token punctuation">)</span>
 		console<span class="token operator">.</span>log<span class="token punctuation">(</span>passwd<span class="token punctuation">)</span>

		<span class="token operator">//</span>用传过来的userInfo passwd进行登录

		var args <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
		args<span class="token operator">.</span>cmd <span class="token operator">=</span> <span class="token string">&quot;login&quot;</span><span class="token punctuation">;</span>
		args<span class="token operator">.</span>usr <span class="token operator">=</span> userInfo
		args<span class="token operator">.</span>pwd <span class="token operator">=</span> passwd<span class="token punctuation">;</span>
		args<span class="token operator">.</span>device <span class="token operator">=</span> <span class="token string">&quot;desktop&quot;</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>args<span class="token operator">.</span>usr <span class="token operator">||</span> <span class="token operator">!</span>args<span class="token operator">.</span>pwd<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			frappe<span class="token operator">.</span>msgprint<span class="token punctuation">(</span><span class="token string">&#39;{{ _(&quot;Both login and password required&quot;) }}&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">return</span> false<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		login<span class="token operator">.</span>call<span class="token punctuation">(</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token keyword">return</span> false<span class="token punctuation">;</span>

 
		login<span class="token operator">.</span>route<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 	<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>apps/frappe/frappe/www/message.html</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code><span class="token operator">&lt;</span>div style<span class="token operator">=</span><span class="token string">&quot;display: none&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span>a id<span class="token operator">=</span><span class="token string">&quot;loginitem&quot;</span> href<span class="token operator">=</span><span class="token string">&#39;{{ primary_action or &quot;/&quot; }}&#39;</span> class<span class="token operator">=</span><span class="token string">&#39;btn btn-primary btn-sm&#39;</span><span class="token operator">&gt;</span>
			确定<span class="token filehandle symbol">&lt;/a&gt;</span><span class="token filehandle symbol">&lt;/div&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>
<span class="token filehandle symbol">&lt;script&gt;</span>
	frappe<span class="token operator">.</span>ready<span class="token punctuation">(</span>function<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

		<span class="token keyword">if</span> <span class="token punctuation">(</span>window<span class="token operator">.</span>location<span class="token operator">.</span>hash <span class="token operator">||</span> window<span class="token operator">.</span>location<span class="token operator">.</span>href<span class="token operator">.</span>includes<span class="token punctuation">(</span><span class="token string">&#39;/app&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			localStorage<span class="token operator">.</span>setItem<span class="token punctuation">(</span><span class="token string">&#39;session_last_route&#39;</span><span class="token punctuation">,</span> window<span class="token operator">.</span>location<span class="token operator">.</span>pathname <span class="token operator">+</span> window<span class="token operator">.</span>location<span class="token operator">.</span>hash <span class="token operator">+</span> window<span class="token operator">.</span>location<span class="token operator">.</span>search<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

		<span class="token variable">$(</span><span class="token string">&#39;.btn-primary&#39;</span><span class="token punctuation">)</span><span class="token operator">.</span>focus<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		var link <span class="token operator">=</span> document<span class="token operator">.</span>getElementById<span class="token punctuation">(</span><span class="token string">&#39;loginitem&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		console<span class="token operator">.</span>log<span class="token punctuation">(</span>link<span class="token punctuation">)</span>
		link<span class="token operator">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token filehandle symbol">&lt;/script&gt;</span>
<span class="token punctuation">{</span><span class="token operator">%</span> endblock <span class="token variable">%}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>apps/frappe/frappe/handler.py</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>
<span class="token variable">@frappe</span><span class="token operator">.</span>whitelist<span class="token punctuation">(</span>allow_guest<span class="token operator">=</span>True<span class="token punctuation">)</span>
def web_logout<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
	frappe<span class="token operator">.</span><span class="token keyword">local</span><span class="token operator">.</span>login_manager<span class="token operator">.</span>logout<span class="token punctuation">(</span><span class="token punctuation">)</span>
	frappe<span class="token operator">.</span>db<span class="token operator">.</span>commit<span class="token punctuation">(</span><span class="token punctuation">)</span>

	frappe<span class="token operator">.</span>respond_as_web_page<span class="token punctuation">(</span>
		<span class="token string">&quot;用户切换&quot;</span><span class="token punctuation">,</span> <span class="token filehandle symbol">_</span><span class="token punctuation">(</span><span class="token string">&quot;用户切换中....&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> indicator_color<span class="token operator">=</span><span class="token string">&quot;green&quot;</span>
	<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>客户端请求</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code><span class="token comment">#调用接口的客户端(aps端)</span>

  <span class="token variable">$.</span>ajax<span class="token punctuation">(</span><span class="token punctuation">{</span>
         <span class="token operator">//</span> url<span class="token punctuation">:</span><span class="token string">&quot;http://192.168.50.23/api/method/frappe.www.login.set_username_password?name=duchengkun@shangjian.com&amp;password=zxc%3C%3E?123&quot;</span><span class="token punctuation">,</span>
        url<span class="token punctuation">:</span> <span class="token string">&quot;http://192.168.50.23/api/method/frappe.www.login.set_username_password?name=Administrator&amp;password=123&quot;</span><span class="token punctuation">,</span>

        type<span class="token punctuation">:</span> <span class="token string">&quot;GET&quot;</span><span class="token punctuation">,</span>
       success<span class="token punctuation">:</span> function<span class="token punctuation">(</span>response<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            console<span class="token operator">.</span>log<span class="token punctuation">(</span>response<span class="token punctuation">)</span>
            var newWindow <span class="token operator">=</span> window<span class="token operator">.</span>open<span class="token punctuation">(</span><span class="token string">&#39;_blank&#39;</span><span class="token punctuation">)</span>
            newWindow<span class="token operator">.</span>location<span class="token operator">=</span><span class="token string">&#39;http://192.168.50.23/?cmd=web_logout&#39;</span>

  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  error<span class="token punctuation">:</span> function<span class="token punctuation">(</span>xhr<span class="token punctuation">,</span> status<span class="token punctuation">,</span> error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token operator">//</span> 处理错误
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>备注</p><p>在html中如何使用js代码,使用{% block script %}和{% endblock %},如下代码</p><p>apps/frappe/frappe/www/error.html</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code><span class="token punctuation">{</span><span class="token operator">%</span> block script <span class="token variable">%}</span>
<span class="token filehandle symbol">&lt;script&gt;</span>
	let toggle_button <span class="token operator">=</span> <span class="token variable">$(</span><span class="token string">&quot;.view-error&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	let error_log <span class="token operator">=</span> <span class="token variable">$(</span><span class="token string">&quot;.error-content&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	toggle_button<span class="token operator">.</span>on<span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>error_log<span class="token operator">.</span>hasClass<span class="token punctuation">(</span><span class="token string">&quot;hidden&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			toggle_button<span class="token operator">.</span>html<span class="token punctuation">(</span><span class="token string">\`{{ _(&quot;Hide Traceback&quot;) }}\`</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			error_log<span class="token operator">.</span>removeClass<span class="token punctuation">(</span><span class="token string">&quot;hidden&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			toggle_button<span class="token operator">.</span>html<span class="token punctuation">(</span><span class="token string">\`{{ _(&quot;Show Traceback&quot;) }}\`</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			error_log<span class="token operator">.</span>addClass<span class="token punctuation">(</span><span class="token string">&quot;hidden&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token filehandle symbol">&lt;/script&gt;</span>
<span class="token punctuation">{</span><span class="token operator">%</span> endblock <span class="token variable">%}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>7.10 修改frappe/frappe/public/js/frappe/views/workspace/workspace.js</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>this<span class="token operator">.</span>page<span class="token operator">.</span>add_inner_button<span class="token punctuation">(</span>__<span class="token punctuation">(</span><span class="token string">&quot;Create Workspace&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
			this<span class="token operator">.</span>initialize_new_page<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token operator">//</span>加入数据生成
				this<span class="token operator">.</span>page<span class="token operator">.</span>add_inner_button<span class="token punctuation">(</span>__<span class="token punctuation">(</span><span class="token string">&quot;数据生成&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

			<span class="token variable">$.</span>ajax<span class="token punctuation">(</span><span class="token punctuation">{</span>
                url<span class="token punctuation">:</span> <span class="token string">&quot;http://192.168.50.229:7500/PC/new_orders&quot;</span><span class="token punctuation">,</span>
                method<span class="token punctuation">:</span> <span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span>
				success<span class="token punctuation">(</span>result<span class="token punctuation">,</span> status<span class="token punctuation">,</span> xhr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                console<span class="token operator">.</span>log<span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
             <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			
			frappe<span class="token operator">.</span>msgprint<span class="token punctuation">(</span>__<span class="token punctuation">(</span><span class="token string">&#39;数据生成成功&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,11),o=[e];function i(l,c){return s(),a("div",null,o)}const r=n(p,[["render",i],["__file","datahub.html.vue"]]);export{r as default};
