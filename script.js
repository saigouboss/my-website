/*
===================================
 ページ読み込み時の処理
===================================
*/


// HTMLの読み込みが完了したら実行
document.addEventListener(
    "DOMContentLoaded",
    function(){

        console.log("Gaming Profile Ready!");

    }
);






/*
===================================
 カードをスクロール表示する機能
===================================
*/


// カードを全部取得
const cards = document.querySelectorAll(".card");



// 画面に入ったか確認する設定
const observer = new IntersectionObserver(

    function(entries){


        entries.forEach(

            function(entry){


                // 画面内に入ったら
                if(entry.isIntersecting){


                    // 表示する
                    entry.target.classList.add("show");


                }


            }

        );


    },


    {

        // 20%見えたら実行

        threshold:0.2

    }


);




// すべてのカードを監視
cards.forEach(

    function(card){


        observer.observe(card);


    }

);