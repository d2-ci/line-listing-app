/*! For license information please see lt.f81dc8c7.chunk.js.LICENSE.txt */
(self.webpackChunkline_listing_app=self.webpackChunkline_listing_app||[]).push([[2420],{4728:function(i,e,s){!function(i){"use strict";var e={ss:"sekundė_sekundžių_sekundes",m:"minutė_minutės_minutę",mm:"minutės_minučių_minutes",h:"valanda_valandos_valandą",hh:"valandos_valandų_valandas",d:"diena_dienos_dieną",dd:"dienos_dienų_dienas",M:"mėnuo_mėnesio_mėnesį",MM:"mėnesiai_mėnesių_mėnesius",y:"metai_metų_metus",yy:"metai_metų_metus"};function s(i,e,s,a){return e?"kelios sekundės":a?"kelių sekundžių":"kelias sekundes"}function a(i,e,s,a){return e?_(s)[0]:a?_(s)[1]:_(s)[2]}function n(i){return i%10==0||i>10&&i<20}function _(i){return e[i].split("_")}function d(i,e,s,d){var t=i+" ";return 1===i?t+a(i,e,s[0],d):e?t+(n(i)?_(s)[1]:_(s)[0]):d?t+_(s)[1]:t+(n(i)?_(s)[1]:_(s)[2])}i.defineLocale("lt",{months:{format:"sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"),standalone:"sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"),isFormat:/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/},monthsShort:"sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),weekdays:{format:"sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį".split("_"),standalone:"sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"),isFormat:/dddd HH:mm/},weekdaysShort:"Sek_Pir_Ant_Tre_Ket_Pen_Šeš".split("_"),weekdaysMin:"S_P_A_T_K_Pn_Š".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY [m.] MMMM D [d.]",LLL:"YYYY [m.] MMMM D [d.], HH:mm [val.]",LLLL:"YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",l:"YYYY-MM-DD",ll:"YYYY [m.] MMMM D [d.]",lll:"YYYY [m.] MMMM D [d.], HH:mm [val.]",llll:"YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"},calendar:{sameDay:"[Šiandien] LT",nextDay:"[Rytoj] LT",nextWeek:"dddd LT",lastDay:"[Vakar] LT",lastWeek:"[Praėjusį] dddd LT",sameElse:"L"},relativeTime:{future:"po %s",past:"prieš %s",s:s,ss:d,m:a,mm:d,h:a,hh:d,d:a,dd:d,M:a,MM:d,y:a,yy:d},dayOfMonthOrdinalParse:/\d{1,2}-oji/,ordinal:function(i){return i+"-oji"},week:{dow:1,doy:4}})}(s(2135))}}]);