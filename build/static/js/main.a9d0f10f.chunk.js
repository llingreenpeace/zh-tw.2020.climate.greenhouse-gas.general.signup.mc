(this["webpackJsonpclimatestrike-greenhouse-gas"]=this["webpackJsonpclimatestrike-greenhouse-gas"]||[]).push([[0],{13:function(e,t,n){"use strict";n.r(t);n(5),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(6);var a=n(7),i=window.$;var o=function(e){if(1===e)i(".page-2").hide();else{if(2!==e)throw new Error("Unkonw PageNo:"+e);i(".page-1").hide(),i(".page-2").show()}},r=function(){0===i("#page-loading").length&&i("body").append('<div id="page-loading" class="hide">\n\t\t\t  <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>\n\t\t\t</div>'),setTimeout((function(){i("#page-loading").removeClass("hide")}),0)},s=function(){i("#page-loading").addClass("hide"),setTimeout((function(){i("#page-loading").remove()}),1100)},c=function(){0===i("#submitted-error").length&&i("body").append('<div id="submitted-error">\u62b1\u6b49\uff0c\u9023\u7f72\u6642\u767c\u751f\u554f\u984c\uff0c\u8acb\u7a0d\u5f8c\u518d\u5617\u8a66</div>'),i("#submitted-error").click((function(){i("#submitted-error").remove()}))},l=function(e,t){window.dataLayer=window.dataLayer||[],window.dataLayer.push({event:"gaEvent",eventCategory:"petitions",eventAction:"signup",eventLabel:e,eventValue:t}),window.dataLayer.push({event:"fbqEvent",contentName:e,contentCategory:"Petition Signup"})};i(document).ready((function(){i(".hidden-part").hide(),i(window).width()<=991?i(".to-top-btn").click((function(e){i("#center_sign-submit").trigger("click")})).end():i(".page-2").removeClass("normal-scroll"),i("#center_sign-submit").click((function(e){e.preventDefault(),i("#center_sign-submit").hasClass("active")?i("#fake-form").submit():(i(".hidden-part").fadeIn(),i(".section__scroll").hide(),i("#center_sign-submit").addClass("active"),i.fn.fullpage.reBuild())})).end(),i(".close-form-link").click((function(e){e.preventDefault(),i(".hidden-part").fadeOut(),i(".section__scroll").show(),i("#center_sign-submit").removeClass("active"),i.fn.fullpage.reBuild()})).end(),i(".sink--prev").on("click",(function(){var e=i(".sink__spot.active");e.next().length>0?e.next().trigger("click"):i(".sink__spot:eq(0)").trigger("click")})),i(".sink--next").on("click",(function(){var e=i(".sink__spot.active");e.prev().length>0?e.prev().trigger("click"):i(".sink__spot:last-child").trigger("click")})),i(".close-link").click((function(){i(".sink__countries").removeClass("active"),i(".sink__countries").hasClass("active")?(i(".sink__taiwan").css("z-index",2),i(".sink__countries").css("z-index",6)):(i(".sink__countries").css("z-index",0),i(".sink__taiwan").css("z-index",4))})),function(){i.extend(i.validator.messages,{required:"\u6b64\u6b04\u4f4d\u70ba\u5fc5\u586b"}),i.validator.addMethod("email",(function(e,t){return this.optional(t)||/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/i.test(e)}),"Email \u683c\u5f0f\u932f\u8aa4"),i.validator.addMethod("taiwan-phone",(function(e,t){var n=new RegExp(/^(0|886|\+886)?(9\d{8})$/).test(e),a=new RegExp(/^(0|886|\+886){1}[2-8]-?\d{6,8}$/).test(e);return!i("#fake_supporter_phone").val()||(n||a)}),"\u96fb\u8a71\u683c\u5f0f\u4e0d\u6b63\u78ba\uff0c\u8acb\u53ea\u8f38\u5165\u6578\u5b57 0912345678 \u548c 02-23456789"),i.validator.addClassRules({email:{email:!0},"taiwan-phone":{"taiwan-phone":!0}}),i("#fake-form").validate({errorPlacement:function(e,t){t.parents("div.form-field:first").after(e)},submitHandler:function(e){r(),i('#mc-form [name="FirstName"]').val(i("#fake_supporter_firstName").val()),i('#mc-form [name="LastName"]').val(i("#fake_supporter_lastName").val()),i('#mc-form [name="Email"]').val(i("#fake_supporter_emailAddress").val()),i("#fake_supporter_phone").prop("required")||i("#fake_supporter_phone").val()?i('#mc-form [name="MobilePhone"]').val(i("#fake_supporter_phone").val()):i('#mc-form [name="MobilePhone"]').val("0900000000"),i('#mc-form [name="Birthdate"]').val(i("#fake_supporter_birthYear").val()),i('#mc-form [name="OptIn"]').eq(0).prop("checked",i("#fake_optin").prop("checked"));var t=new FormData;i("#mc-form input").each((function(e,n){var a=null;a="checkbox"===n.type?n.checked:n.value,t.append(n.name,a)}));var n=i("#mc-form").prop("action");fetch(n,{method:"POST",body:t}).then((function(e){return e.json()})).then((function(e){e&&(e.Supporter&&l("2020-greenhouse.gas"),o(2)),s()})).catch((function(e){s(),c()}))},invalidHandler:function(e,t){var n=t.numberOfInvalids();n&&console.log(n)}});var e=["me.com","outlook.com","netvigator.com","cloud.com","live.hk","msn.com","gmail.com","hotmail.com","ymail.com","yahoo.com","yahoo.com.tw","yahoo.com.hk"],t=["com","net","org"],a=n(12);i("#fake_supporter_emailAddress").on("blur",(function(){var n=this;a.run({email:i("#fake_supporter_emailAddress").val(),domains:e,topLevelDomains:t,suggested:function(e){i('<div class="email-suggestion">\u60a8\u60f3\u8f38\u5165\u7684\u662f <strong id="emailSuggestion">'.concat(e.full,"</strong> \u55ce\uff1f</div>")).insertAfter("#fake_supporter_emailAddress"),i(".email-suggestion").click((function(){i("#fake_supporter_emailAddress").val(i("#emailSuggestion").html()),i(".email-suggestion").remove()}))},empty:function(){n.emailSuggestion=null}})}));var d=window.location.search;"dd"===new URLSearchParams(d).get("utm_source")&&(i(".is-hidden-at-dd-page-only").hide(),i("#fake_supporter_phone").removeAttr("required"),i("#fake_supporter_phone").attr("placeholder","  \u96fb\u8a71"))}(),function(){var e=document.querySelector('input[name="barTarget"]')?parseInt(document.querySelector('input[name="barTarget"]').value,10):5e4,t=document.querySelector('input[name="barNumber"]')?parseInt(document.querySelector('input[name="barNumber"]').value,10):2762;t<2762&&(t+=2762),t>e&&(e=1e4*Math.ceil(t/1e4)),i("#petition-count").html(t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")),i("#petition-target").html(e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")),new a.Line("#progress-bar",{strokeWidth:2,easing:"easeInOut",duration:1400,color:"rgb(85, 112,71)",trailColor:"transparent",trailWidth:2,svgStyle:{width:"100%",height:"80%",borderRadius:"10px",padding:"1px 0"}}).animate(t/e)}(),function(){var e=(new Date).getFullYear();i("#fake_supporter_birthYear").append('<option value="">\u51fa\u751f\u5e74\u4efd</option>');for(var t=0;t<80;t++){var n='<option value="'.concat(e-t,'-01-01">').concat(e-t,"</option>");i("#fake_supporter_birthYear").append(n),i("#en__field_supporter_NOT_TAGGED_6").append(n)}}()})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},4:function(e,t,n){e.exports=n(13)},5:function(e,t,n){},6:function(e,t,n){}},[[4,1,2]]]);
//# sourceMappingURL=main.a9d0f10f.chunk.js.map