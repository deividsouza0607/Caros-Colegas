
document.addEventListener('DOMContentLoaded', () => {
    // 1. Seleciona o elemento da moeda e o texto
    const moeda = document.getElementById('moeda');
    const textoRevelado = document.getElementById('texto-revelado'); 
    
    let revelado = false; 

    // 2. Adiciona o "ouvinte" de evento para o clique
    moeda.addEventListener('click', () => {
        if (!revelado) {
            
            textoRevelado.classList.add('revelado');
            
            // ⭐️ AQUI É ONDE VOCÊ COLOCA O SEU TEXTO GRANDE
            textoRevelado.innerHTML = `
                <h3>Caros colegas!</h3>
                <p>
Esta é uma homenagem a cada membro da equipe, com as referências,<br>
 bordões e as peculiaridades que tornaram nosso dia a dia único. <br><br>

Abaixo:
Nome(s)	Homenagem / Bordão Interno<br><br>
<mark>Marco:</mark>  Obrigado por tudo! Pela oportunidade de conhecer essa
Família Compumaq! <br> Ainda vamos finalizar o vídeo da obra.<br><br>

<mark>Juliano:</mark>  Outro grande Músico e Vocalista, Mestre do Jiu.<br>
 Muitas vendas e comissões para todos!<br><br>

 
<mark>Margareth:</mark> Sem ela não temos Café! Primeira a chegar e arrumar a bagunça do pessoal.<br><br><br>


<mark>Fernando:</mark>  O cara! Ajudando o pessoal a não cometer tantos erros!<br>
(Diz que não apoia o PT, mas torce pelo time da cor partidária!).<br><br>

<mark>Lucas:</mark> Internacional! Grande Pai Lucas, Mestre do chimarrão<br>
 e seus conhecimentos, inventor do nosso Mascote Loguinho.<br><br>
	
<mark>Juliana:</mark> Diuliannnnnaaa "Cafézinhooo!"<br><br>

<mark>Pedro periféricos:</mark> Sózinho isolado com saudade do Micael, mas Joga Valorant!<br><br>

<mark>Léo Estronda:</mark> Michael Maicouuuuu auuuu,ainda <br>
não aprendeu a dancinha mas um dia vaí!<br><br>

<mark>Nilva:</mark>  Gratiluz! Sempre resolvendo as graxas de todo mundo!<br><br>

<mark>Gisa:</mark> Me apelidou como De Souza. Não aguenta o barulho da sala ao lado!<br>
 (Como ela diz: usa fone ou coloca uma música decente.)<br><br>

<mark>Marluci:</mark>  Sempre Ouvindo aquele Metal rock, a Lenda das Impressoras junto com a Paula,<br>
 Dion e o Pedro! Chama o Will! <br><br>

<mark>Paula:</mark>  Ta me tirando! Arruma esses equipamentos no elevador direito.<br>
 (Parceira da Lenda das Impressoras).<br><br>

<mark>Pedro Externo:</mark> Menino Pedro. Dizia ele que nunca <br>
recolheria uma máquina se quer quando fosse para o externo, <br>
kkk assim ele pensava. De todos os erros no início e acertos,<br>
 quem diria que o guri deu Bom!<br><br>

<mark>Daniel:</mark> Fã da eterna banda Nightwish. Dizia ele:<br>
 "Não esqueça de olhar nos Logs! Sim, é um caminho, <br>
 se você não sabe por onde começar, é um norte."<br><br>

<mark>Dion:</mark> Oh locoo meu! Sempre salvando os Furby e nos ensinando umas AT.<br>
 ("Hoje é um bom dia para vooar com o Drone!").<br><br>

<mark>Mateus Russo:</mark>  Saudade daqueles tempos com a Tr4! Grande músico,<br>
 mas ainda não aprendeu a ser positivo, <br>
Ilon Musk! E um dia vai a Lagoa Vermelha, Pripyat! Hurra!<br><br>

<mark>Ivo:</mark>  Mister Crawlin É o Mister, não tem comparação. <br>
Suas Fantasias makes incríveis e a Caravan.<br><br>

<mark>Julio:</mark>  Músico nato. Sempre que começávamos a ensaiar, <br>
o universo conspirava com algum acontecimento próximo kkk.<br><br>

<mark>Vagner:</mark>  Caneta Azul  "Bah! Ah ô meu!" e  a sua moto envenenada.<br>
 Esse bebe em festa, tá maluco!<br><br>

<mark>Gabriel Pim:</mark> O Pim Tempus cuturnos e seus Playstation e Xbox irrecuperáveis.<br>
 Olha o choque! Bora crimpar uns cabos!<br><br>

<mark>Murilo:</mark> Grande Murilo, "Se quebrar, volta ao normal" <br>
como ele disse uma vez.<br><br>

<mark>Fabio:</mark> Agora vende! E suas JBLs a todo volume.<br>
Quem sabe um dia conserta a minha caixa.<br><br>

<mark>Bruno:</mark> Eterno "quer comprar Galeto?". Ainda não abriu a franquia, <br>
mas logo ele vai. Como vamos ficar rico hoje?<br><br>

<mark>Leozinho Bananinha:</mark> E a maldição do Mercúrio Retrógrado.<br><br>

<mark>Mateus Matarazo:</mark> Grande e pequeno, ou anão, ainda não descobrimos ao certo,<br><br>

 mas um dia falará  sozinho com a xicara! kkk.<br>

<mark>Cleber:</mark> Grande Kleberson, "Já foi mais fácil!"<br><br>

<mark>Kairo:</mark> Jovem Kairo,	com o seu estilo único, mas se clonou, tá tudo certo.<br><br>

<mark>Lívia:</mark> Lívia Mariana:Mariana conta um! Vai para Aldisney, <br>
e ainda não aprendeu que o Sergey não é um sistema operacional!<br><br>

<mark>Lidiane:</mark> A Didi! Tem como colocar mais um agendamento! <br>
(Dava medo, Nossa atleta e medalista.).<br><br>

<mark>Isaabela:</mark> Bom, não tem muito o que falar, é a Bella.<br><br>

<mark>Ina:</mark>Ina:  Ina  outra cantora nata com seus parabéns no dia certo...<br>
 Muitas histórias deve ter vivido nessa empresa, já é patrimônio.<br><br>

<mark>Augusto:</mark>  Augustus Justus e as caronas em dia de chuva. <br>
(Ainda não aprendeu a dirigir e vai ficar solteiro por muito tempo, pelo jeito)<br><br>

<mark>Lucaw:</mark>  Empreendedor Nato. Se puxando sempre. Cuidado com o Tigrinho!<br><br>

<mark>Rodrigo:</mark>  Dinho dizia ele " E a fazenda de Mirtilo, como tá!" <br>
Ainda não aguenta o Augusto, porém conseguiu uma brecha para descansar <br>
(diz ele que era cirurgia! Melhoras!).<br><br>

<mark>Felipe:</mark>  Filipe Banks, quando dizia: “trouxe uma enrrabada minha!<br>
”Sabíamos que era coisa séria.<br><br>

<mark>Mateus Baiano:</mark> Mateus Renegade com seu pé de Banana que ele pega do vizinho <br>
(ele diz que não, mas sempre traz consigo 2 bananas, pelo menos é pontual no café!kkk).<br><br>

<mark>Gabriel Estoque:</mark> Ainda não sei o que falar dele, não consegui decifrar a linha do seu raciocínio,<br>
parece que está ausente em seus próprios pensamentos.<br><br>

<mark>Jose Eduardo:</mark> DUDU. Um dia vou achar aquelas fitas do 64, mister do Linux.<br>

                </p>
                <p>
                
                    <br>
                    Att:Deivid de Souza - Outubro de 2025<br>
                    O Lema de Despedida
"Tudo certo e nada resolvido! Caféééé"<br>
(Michael Maicouuuuu auuuu, tá maluco, forasteriro, Matáaa, Boa Tarde Deivid!!!)<br>
                </p>
            `;
            
            revelado = true;
        } else {
            // Mensagem de repetição após o texto ter sido revelado
            textoRevelado.innerHTML = "Até a Próxima! O assunto JÁ FOI REVELADO. Bora Trabalhar!";
        }
    });

});
