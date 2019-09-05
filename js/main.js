/*
 * spa.js
 * Root namespace module
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

/*
const marked = require('marked')
const markdown = '# heading\n' +
  '## list\n' +
  '- list1\n' +
  '- list2\n\n' +
  '## code\n' +
  '```js\n' +
  'let x = 1;\n' +
  '```\n' +
  '## table\n' +
  '| col1 | col2 |\n' +
  '---|---\n' +
  'abc|123\n' +
  'xyz|456';
*/
/*
//ダイアログでファイルが選択された時
obj1.addEventListener("change",function(evt){

  var file = evt.target.files;

  //FileReaderの作成
  var reader = new FileReader();
  //テキスト形式で読み込む
  reader.readAsText(file[0]);
  
  //読込終了後の処理
  reader.onload = function(ev){
    //テキストエリアに表示する
    document.test.txt.value = reader.result;
  }
},false);
console.log(marked(markdown))
*/
/*copy paste*/
/*
var printMarkdown = (function( $ ) {
  var
  //定数を設定する
    configMap={//モジュール構成値
      extended_height : 434,
      extended_width    : 600,
      extended_title: 'click to retract',
      retracted_height : 16,
      retracted_width    : 300,
      retracted_title : 'click to expand',
      template_html : '<div class="mdPrintArea"></div>'
    },
    //その他全てのモジュールスコープ変数を宣言すす
    $mdArea,initModule;

  //パブリックメゾッド/initModule
  //初期状態を設定し、機能を提供する
  initModule= function ($container){
    //HTMLのレンダリング
    $container.html(configMap.template_html);
    $mdArea= $container.find('.mdPrintArea');//htmlの内容物からdiv "~"を探し、モジュールスコープ変数に格納。モジュールスコープ変数はspa名前空間述べての関数で使用可能
    //FileReaderの作成
    var reader = new FileReader();
    //テキスト形式で読み込む
    reader.readAsText("../Memos/read_papers/test.md");
    //読込終了後の処理
    reader.onload = function(ev){
      //テキストエリアに表示する
      $mdArea.html(
        "hello"
      );
    }
    $mdArea.html(
      "hello2"
    );
    return true;
  };

  return{initModule : initModule};
}( jQuery ) );
*/
function printHeader() {
  document.write (
    '<header>'
      + '<ul style="list-style: none;display: inline-block;">'
        + '<li><a class="topbutton" href="./index.html">Top</a></li>'
        + '<li><a class="topbutton" href="./about_naomi.html">About "Naomi"</a></li>'
        + '<li><a class="topbutton" href="./projects.html">Projects</a></li>'
        + '<li><a class="topbutton" href="./memos.html">Memos</a></li>'
        + '<li><a class="topbutton" href="./garally.html">Garally</a></li>'
        + '<li><a class="topbutton" href="./contacts.html">Contacts</a></li>'
      + '</ul>'
      + '</header>'
    );
}

var printMarkdown = (function () {
  var initModule = function ( $container ) {
    $container.html(
      '<h1 style="display:inline-block; margin:25px;">'
        + 'hello world!'
      + '</h1>'
    );
  };

  return { initModule: initModule };
}());


