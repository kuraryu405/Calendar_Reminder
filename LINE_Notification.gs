function postContent() {
  var sheet =SpreadsheetApp.getActiveSheet(); 
  var LastRow = sheet.getLastRow();
  var content = "\n明日の予定をお知らせします\n";

  if (LastRow === 0) {
      content +="明日の予定はなし\nゆっくりお過ごしください\n\n"
    }
    else {

  for (var n=1;n<=LastRow;n++){
  var title=sheet.getRange(n, 1).getValue();
  var start=sheet.getRange(n, 2).getValue();
  var end=sheet.getRange(n, 3).getValue();
  var jst_start = Utilities.formatDate(start,"JST","yyyy年M月d日 H時m分");
  var jst_end = Utilities.formatDate(end,"JST","yyyy年M月d日 H時m分");

  var schedule = title + ": \n"+jst_start+"から"+jst_end+"まで\n\n";
  content +=schedule  
  }
    }

  content += "\n以上";
  sendPostContent(content);
}

function sendPostContent(content) {
  var token = ['Your linenotify token'];
  var options = {
    "method": "post",
    "payload" : {"message": content },
    "headers": {"Authorization": "Bearer " + token}    
  };
  UrlFetchApp.fetch("https://notify-api.line.me/api/notify", options);
}

