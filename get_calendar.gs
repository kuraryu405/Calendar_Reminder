function calendar() {

//1　スプレッドシートを読み込む
  var sp =SpreadsheetApp.getActiveSheet(); 

//2　カレンダーをIDで読み込む
  var cal=CalendarApp.getCalendarById( 'Your CalendarID' ); 

//3　カレンダーのイベントの期間を指定
  var date = new Date();
  var today = new Date(date.getFullYear(),date.getMonth(),date.getDate()+1,0,0);
  var endday = new Date(date.getFullYear(),date.getMonth(),date.getDate() + 1,23,59);
  var event = cal.getEvents(today,endday); 

  sp.clear();

//4　イベントをスプレッドシートへ書き出す
  for(var i=1;i<event.length+1; i++){
    sp.getRange('a'+i).setValue(event[i-1].getTitle()); //イベントタイトル
    sp.getRange('b'+i).setValue(event[i-1].getStartTime()); //イベント開始時刻　　
    sp.getRange('c'+i).setValue(event[i-1].getEndTime());//イベント終了時刻
  }

};