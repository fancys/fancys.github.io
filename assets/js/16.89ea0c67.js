(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{223:function(s,t,a){"use strict";a.r(t);var e=a(0),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"mssql查看死锁和解锁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mssql查看死锁和解锁"}},[s._v("#")]),s._v(" mssql查看死锁和解锁")]),s._v(" "),a("p",[s._v("--查看被锁表")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v("   request_session_id   锁表进程"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("OBJECT_NAME"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("resource_associated_entity_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" 被锁表名\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v("   sys"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("dm_tran_locks "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" resource_type"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'OBJECT'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("--解锁")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("declare")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@spid")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@spid")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("55")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--锁表进程")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("declare")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@sql")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("varchar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@sql")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'kill '")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("cast"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@spid")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("varchar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("exec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@sql")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);