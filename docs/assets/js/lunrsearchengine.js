function lunr_search(e){if(document.getElementById("lunrsearchresults").innerHTML="<ul></ul>",e){document.getElementById("lunrsearchresults").innerHTML="<p>Search results for '"+e+"'</p>"+document.getElementById("lunrsearchresults").innerHTML;var a=idx.search(e);if(a.length>0)for(var t=0;t<a.length;t++){var s=a[t].ref,o=documents[s].url,r=documents[s].title,l=documents[s].body.substring(0,160)+"...";document.querySelectorAll("#lunrsearchresults ul")[0].innerHTML=document.querySelectorAll("#lunrsearchresults ul")[0].innerHTML+"<li class='lunrsearchresult'><a href='"+o+"'><span class='title'>"+r+"</span><span class='body'>"+l+"</span><span class='url'>"+o+"</span></a></li>"}else document.querySelectorAll("#lunrsearchresults ul")[0].innerHTML="<li class='lunrsearchresult'>No results found...</li>"}return!1}function lunr_search(e){if($("#lunrsearchresults").show(400),$("body").addClass("modal-open"),document.getElementById("lunrsearchresults").innerHTML='<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Fechar"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-primary btn-sm" data-dismiss="modal">Fechar</button></div></div> </div></div>',e){document.getElementById("modtit").innerHTML="<h5 class='modal-title'>Procurando por '"+e+"'</h5>"+document.getElementById("modtit").innerHTML;var a=idx.search(e);if(a.length>0)for(var t=0;t<a.length;t++){var s=a[t].ref,o=documents[s].url,r=documents[s].title,l=documents[s].body.substring(0,160)+"...";document.querySelectorAll("#lunrsearchresults ul")[0].innerHTML=document.querySelectorAll("#lunrsearchresults ul")[0].innerHTML+"<li class='lunrsearchresult'><a href='"+o+"'><span class='title'>"+r+"</span><small><span class='body'>"+l+"</span><span class='url'>"+o+"</span></small></a></li>"}else document.querySelectorAll("#lunrsearchresults ul")[0].innerHTML="<li class='lunrsearchresult'>OOps, nada encontrado, tente novamente.</li>"}return!1}var documents=[{id:0,url:"https://tarefaedu.lzart.com.br//404.html",title:"404",body:"404 P\xe1gina n\xe3o encontrada!Voc\xea pode usar a barra de busca ou voltar pra home! "},{id:1,url:"https://tarefaedu.lzart.com.br//about",title:"Sobre o projeto",body:"Sejam todos bem vindos! Criei este site com o intuito de compartilhar dicas, atividades, conhecimentos, experi\xeancias e muito mais. Espero muito que gostem \u2764\ufe0f Para que o projeto possa seguir em frente, pe\xe7o a sua colabora\xe7\xe3o, uma vez que possuo gastos com a hospedagem site, manuten\xe7\xe3o do dom\xednio, CDN e com programas e ferramentas que permitem a cria\xe7\xe3o de conte\xfados de qualidade para voc\xeas. Qualquer ajuda \xe9 bem vinda \ud83d\ude33 chave Pix: tarefaeducacao@gmail. com Convido voc\xeas a conhecerem meu canal no YouTube \xe9 s\xf3 clicar aqui :) Por l\xe1 eu compartilho diversos conte\xfados interessantes, que complementam de modo geral os assuntos presentes aqui no site. "},{id:2,url:"https://tarefaedu.lzart.com.br//author",title:"Quem sou eu",body:"                                                                                                                                                                                    Luana:         Ol\xe1 pessoal, Tudo bem com voc\xeas? Eu sou a Lu, sou formada em Pedagogia e especialista em Alfabetiza\xe7\xe3o e Letramento.                "},{id:3,url:"https://tarefaedu.lzart.com.br//categories",title:"Categories",body:"Abaixo voc\xea pode conferir tarefas das seguintes categorias:: "},{id:4,url:"https://tarefaedu.lzart.com.br//contact-sucess/",title:"Mensagem enviada",body:"Sua mensagem foi enviada com sucesso!Obrigada! "},{id:5,url:"https://tarefaedu.lzart.com.br//contact",title:"Contato",body:" Tem alguma d\xfavida ou sugest\xe3o? Nos envie pelo formul\xe1rio abaixo:   "},{id:6,url:"https://tarefaedu.lzart.com.br//",title:"Home",body:"    "},{id:7,url:"https://tarefaedu.lzart.com.br//robots.txt",title:"",body:"User-agent: *Sitemap: {{ site. url }}/sitemap. xmlDisallow: /contact-success/ "}],idx=lunr(function(){this.ref("id"),this.field("title"),this.field("body"),documents.forEach(function(e){this.add(e)},this)});$(function(){$("#lunrsearchresults").on("click","#btnx",function(){$("#lunrsearchresults").hide(5),$("body").removeClass("modal-open")})});