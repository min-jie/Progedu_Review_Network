document.addEventListener("DOMContentLoaded", function () {
  var recordData = [
    // 这里是你的数据...
    {
      reviewId: 14,
      hwNumber: 2,
      reviewerUsername: "D1149604",
      reviewerName: "朱苡甄",
      authorUsername: "D0909463",
      authorName: "朱禎城",
      round: [
        {
          round: 1,
          score: 2,
          time: "2023-10-03 09:03:29",
          feedback: "你沒有輸入提示",
          reviewScore: 0,
          teacherReview: 0,
          status: 3,
          pmId: 14,
        },
        {
          round: 2,
          score: 2,
          time: "2023-10-03 09:05:03",
          feedback: "甚麼都沒打",
          reviewScore: 4,
          teacherReview: 0,
          status: 3,
          pmId: 14,
        },
      ],
      avgReviewScore: 1.6666666666666667,
      avgFeedbackLength: 11.333333333333334,
    },
    {
      reviewId: 13,
      hwNumber: 2,
      reviewerUsername: "D1149580",
      reviewerName: "吳?瑋",
      authorUsername: "D0909463",
      authorName: "朱禎城",
      round: [
        {
          round: 1,
          score: 1,
          time: "2023-10-03 09:06:36",
          feedback: "有，100分",
          reviewScore: -1,
          teacherReview: 0,
          status: 3,
          pmId: 36,
        },
        {
          round: 2,
          score: 1,
          time: "2023-10-03 09:15:45",
          feedback: "可以加一點點註解\n排版要注意",
          reviewScore: -1,
          teacherReview: 0,
          status: 1,
          pmId: 36,
        },
      ],
      avgReviewScore: "No Scores Available",
      avgFeedbackLength: 11.333333333333334,
    },
    {
      reviewId: 12,
      hwNumber: 2,
      reviewerUsername: "D1149474",
      reviewerName: "洪采萱",
      authorUsername: "D0909463",
      authorName: "朱禎城",
      round: [
        {
          round: 1,
          score: 2,
          time: "2023-10-03 09:15:54",
          feedback: "作業未寫",
          reviewScore: -1,
          teacherReview: 0,
          status: 3,
          pmId: 58,
        },
        {
          round: 2,
          score: 1,
          time: "2023-10-03 09:16:05",
          feedback: "完成題目要求，且有加上註解",
          reviewScore: -1,
          teacherReview: 0,
          status: 1,
          pmId: 58,
        },
      ],
      avgReviewScore: "No Scores Available",
      avgFeedbackLength: 11.333333333333334,
    },
    {
      reviewId: 15,
      hwNumber: 2,
      reviewerUsername: "D1149651",
      reviewerName: "林茂杰",
      authorUsername: "D0915755",
      authorName: "陳?言",
      round: [
        {
          round: 1,
          score: 1,
          time: "2023-10-03 09:16:08",
          feedback: "作業正確",
          reviewScore: -1,
          teacherReview: 0,
          status: 3,
          pmId: 15,
        },
        {
          round: 2,
          score: 1,
          time: "2023-10-03 09:16:15",
          feedback: "作業正確",
          reviewScore: -1,
          teacherReview: 0,
          status: 3,
          pmId: 15,
        },
      ],
      avgReviewScore: 3.0,
      avgFeedbackLength: 8.5,
    },
    {
      reviewId: 14,
      hwNumber: 2,
      reviewerUsername: "D1149604",
      reviewerName: "朱苡甄",
      authorUsername: "D0915755",
      authorName: "陳?言",
      round: [
        {
          round: 1,
          score: 2,
          time: "2023-10-03 09:16:52",
          feedback: "沒有完成作業",
          reviewScore: -1,
          teacherReview: 0,
          status: 3,
          pmId: 37,
        },
        {
          round: 2,
          score: 1,
          time: "2023-10-03 09:17:10",
          feedback: "寫得很好",
          reviewScore: -1,
          teacherReview: 0,
          status: 3,
          pmId: 37,
        },
      ],
      avgReviewScore: 1.6666666666666667,
      avgFeedbackLength: 8.5,
    },
    {
      reviewId: 13,
      hwNumber: 2,
      reviewerUsername: "D1149580",
      reviewerName: "吳?瑋",
      authorUsername: "D0915755",
      authorName: "陳?言",
      round: [
        {
          round: 1,
          score: 1,
          time: "2023-10-03 09:17:57",
          feedback: "作業正確",
          reviewScore: -1,
          teacherReview: 0,
          status: 3,
          pmId: 59,
        },
        {
          round: 2,
          score: 1,
          time: "2023-10-03 09:18:26",
          feedback: "作業正確",
          reviewScore: -1,
          teacherReview: 0,
          status: 3,
          pmId: 59,
        },
      ],
      avgReviewScore: "No Scores Available",
      avgFeedbackLength: 8.5,
    },
    {
      reviewId: 16,
      hwNumber: 2,
      reviewerUsername: "D1149754",
      reviewerName: "薛子揚",
      authorUsername: "D0987305",
      authorName: "陳煒明",
      round: [
        {
          round: 1,
          score: 1,
          time: "2023-10-03 09:18:36",
          feedback: "做得好！",
          reviewScore: -1,
          teacherReview: 0,
          status: 3,
          pmId: 16,
        },
        {
          round: 2,
          score: 1,
          time: "2023-10-03 09:18:47",
          feedback:
            "有轉換成功，不過題目要求變數宣告要是 int (整數型態)，且不用再另外開一個 .java 檔，src 內已經有 Temperature.java",
          reviewScore: -1,
          teacherReview: 0,
          status: 1,
          pmId: 16,
        },
      ],
      avgReviewScore: "No Scores Available",
      avgFeedbackLength: 13.833333333333334,
    },
    {
      reviewId: 15,
      hwNumber: 2,
      reviewerUsername: "D1149651",
      reviewerName: "林茂杰",
      authorUsername: "D0987305",
      authorName: "陳煒明",
      round: [
        {
          round: 1,
          score: 2,
          time: "2023-10-03 09:18:49",
          feedback: "卡關了嗎?",
          reviewScore: 4,
          teacherReview: 0,
          status: 3,
          pmId: 38,
        },
        {
          round: 2,
          score: 1,
          time: "2023-10-03 09:19:08",
          feedback: "寫得真好，變數名稱太帥拉",
          reviewScore: -1,
          teacherReview: 0,
          status: 1,
          pmId: 38,
        },
      ],
      avgReviewScore: 3.0,
      avgFeedbackLength: 13.833333333333334,
    },
    {
      reviewId: 14,
      hwNumber: 2,
      reviewerUsername: "D1149604",
      reviewerName: "朱苡甄",
      authorUsername: "D0987305",
      authorName: "陳煒明",
      round: [
        {
          round: 1,
          score: 1,
          time: "2023-10-03 09:19:12",
          feedback: "做得好！",
          reviewScore: -1,
          teacherReview: 0,
          status: 3,
          pmId: 60,
        },
        {
          round: 2,
          score: 2,
          time: "2023-10-03 09:19:23",
          feedback: "請不要交白卷",
          reviewScore: 1,
          teacherReview: 0,
          status: 3,
          pmId: 60,
        },
      ],
      avgReviewScore: 1.6666666666666667,
      avgFeedbackLength: 13.833333333333334,
    },
    {
      reviewId: 17,
      hwNumber: 2,
      reviewerUsername: "D1150033",
      reviewerName: "林畔茵",
      authorUsername: "D1109023",
      authorName: "楊孟憲",
      round: [
        {
          round: 1,
          score: 1,
          time: "2023-10-03 09:19:37",
          feedback: "沒有變數哭了",
          reviewScore: -1,
          teacherReview: 0,
          status: 3,
          pmId: 17,
        },
        {
          round: 2,
          score: 2,
          time: "2023-10-03 09:19:43",
          feedback: "空空如也",
          reviewScore: -1,
          teacherReview: 0,
          status: 3,
          pmId: 17,
        },
      ],
      avgReviewScore: 0.0,
      avgFeedbackLength: 17.666666666666668,
    },
    {
      reviewId: 16,
      hwNumber: 2,
      reviewerUsername: "D1149754",
      reviewerName: "薛子揚",
      authorUsername: "D1109023",
      authorName: "楊孟憲",
      round: [
        {
          round: 1,
          score: 2,
          time: "2023-10-03 09:19:43",
          feedback: "沒有完成",
          reviewScore: -1,
          teacherReview: 0,
          status: 3,
          pmId: 39,
        },
        {
          round: 2,
          score: 1,
          time: "2023-10-03 09:20:04",
          feedback: "未輸出提示輸入字串",
          reviewScore: -1,
          teacherReview: 0,
          status: 3,
          pmId: 39,
        },
      ],
      avgReviewScore: "No Scores Available",
      avgFeedbackLength: 17.666666666666668,
    },
    {
      reviewId: 15,
      hwNumber: 2,
      reviewerUsername: "D1149651",
      reviewerName: "林茂杰",
      authorUsername: "D1109023",
      authorName: "楊孟憲",
      round: [
        {
          round: 1,
          score: 2,
          time: "2023-10-03 09:20:16",
          feedback: "作業未完成",
          reviewScore: 2,
          teacherReview: 0,
          status: 3,
          pmId: 61,
        },
        {
          round: 2,
          score: 1,
          time: "2023-10-03 09:20:25",
          feedback: "可以多注意排版",
          reviewScore: -1,
          teacherReview: 0,
          status: 3,
          pmId: 61,
        },
      ],
      avgReviewScore: 3.0,
      avgFeedbackLength: 17.666666666666668,
    },
    {
      reviewId: 18,
      hwNumber: 2,
      reviewerUsername: "D1150136",
      reviewerName: "陳可軒",
      authorUsername: "D1109070",
      authorName: "柯昀杰",
      round: [
        {
          round: 1,
          score: 1,
          time: "2023-10-03 09:20:37",
          feedback: "作業正確",
          reviewScore: -1,
          teacherReview: 0,
          status: 1,
          pmId: 18,
        },
        {
          round: 2,
          score: 2,
          time: "2023-10-03 09:20:49",
          feedback: "請寫完整程式碼",
          reviewScore: 4,
          teacherReview: 0,
          status: 1,
          pmId: 18,
        },
      ],
      avgReviewScore: 4.0,
      avgFeedbackLength: 7.833333333333333,
    },
    {
      reviewId: 17,
      hwNumber: 2,
      reviewerUsername: "D1150033",
      reviewerName: "林畔茵",
      authorUsername: "D1109070",
      authorName: "柯昀杰",
      round: [
        {
          round: 1,
          score: 2,
          time: "2023-10-03 09:21:10",
          feedback:
            "我從你空白的程式碼中看到了你的嚴謹、你一絲不苟、你的不屑與狂放不羈的性格，所以我向你獻上我最高的敬意   以及0分",
          reviewScore: -1,
          teacherReview: 0,
          status: 3,
          pmId: 40,
        },
        {
          round: 2,
          score: 1,
          time: "2023-10-03 09:21:40",
          feedback: "有料，好猛的攝氏溫度\n",
          reviewScore: -1,
          teacherReview: 0,
          status: 3,
          pmId: 40,
        },
      ],
      avgReviewScore: 0.0,
      avgFeedbackLength: 7.833333333333333,
    },
    {
      reviewId: 16,
      hwNumber: 2,
      reviewerUsername: "D1149754",
      reviewerName: "薛子揚",
      authorUsername: "D1109070",
      authorName: "柯昀杰",
      round: [
        {
          round: 1,
          score: 1,
          time: "2023-10-03 09:22:00",
          feedback: "pass\n",
          reviewScore: -1,
          teacherReview: 0,
          status: 3,
          pmId: 62,
        },
        {
          round: 2,
          score: 1,
          time: "2023-10-03 09:22:03",
          feedback: "作業完成",
          reviewScore: -1,
          teacherReview: 0,
          status: 1,
          pmId: 62,
        },
      ],
      avgReviewScore: "No Scores Available",
      avgFeedbackLength: 7.833333333333333,
    },
    {
      reviewId: 19,
      hwNumber: 2,
      reviewerUsername: "D1150402",
      reviewerName: "潘韋樺",
      authorUsername: "D1123781",
      authorName: "劉得鑌",
      round: [
        {
          round: 1,
          score: 1,
          time: "2023-10-03 09:22:23",
          feedback: "作業完成",
          reviewScore: -1,
          teacherReview: 0,
          status: 1,
          pmId: 19,
        },
        {
          round: 2,
          score: 1,
          time: "2023-10-03 09:22:36",
          feedback: "作業完成",
          reviewScore: -1,
          teacherReview: 0,
          status: 1,
          pmId: 19,
        },
      ],
      avgReviewScore: "No Scores Available",
      avgFeedbackLength: 24.5,
    },
    {
      reviewId: 18,
      hwNumber: 2,
      reviewerUsername: "D1150136",
      reviewerName: "陳可軒",
      authorUsername: "D1123781",
      authorName: "劉得鑌",
      round: [
        {
          round: 1,
          score: 1,
          time: "2023-10-03 09:22:59",
          feedback: "沒東西",
          reviewScore: -1,
          teacherReview: 0,
          status: 1,
          pmId: 41,
        },
        {
          round: 2,
          score: 1,
          time: "2023-10-03 09:23:06",
          feedback: "可以加一點點註解",
          reviewScore: -1,
          teacherReview: 0,
          status: 1,
          pmId: 41,
        },
      ],
      avgReviewScore: 4.0,
      avgFeedbackLength: 24.5,
    },
    {
      reviewId: 17,
      hwNumber: 2,
      reviewerUsername: "D1150033",
      reviewerName: "林畔茵",
      authorUsername: "D1123781",
      authorName: "劉得鑌",
      round: [
        {
          round: 1,
          score: 2,
          time: "2023-10-03 09:23:20",
          feedback: "請不要交白卷",
          reviewScore: 0,
          teacherReview: 0,
          status: 3,
          pmId: 63,
        },
        {
          round: 2,
          score: 1,
          time: "2023-10-03 09:23:45",
          feedback: "在最後增加scanner.close();會更好",
          reviewScore: -1,
          teacherReview: 0,
          status: 3,
          pmId: 63,
        },
      ],
      avgReviewScore: 0.0,
      avgFeedbackLength: 24.5,
    },
    {
      reviewId: 20,
      hwNumber: 2,
      reviewerUsername: "D1176999",
      reviewerName: "林仕鈞",
      authorUsername: "D1123819",
      authorName: "陳堂修",
      round: [
        {
          round: 1,
          score: 1,
          time: "2023-10-03 09:24:00",
          feedback: "scanner沒有close",
          reviewScore: -1,
          teacherReview: 0,
          status: 3,
          pmId: 20,
        },
        {
          round: 2,
          score: 1,
          time: "2023-10-03 09:24:09",
          feedback: "good",
          reviewScore: -1,
          teacherReview: 0,
          status: 3,
          pmId: 20,
        },
      ],
      avgReviewScore: "No Scores Available",
      avgFeedbackLength: 25.5,
    },
    {
      reviewId: 19,
      hwNumber: 2,
      reviewerUsername: "D1150402",
      reviewerName: "潘韋樺",
      authorUsername: "D1123819",
      authorName: "陳堂修",
      round: [
        {
          round: 1,
          score: 1,
          time: "2023-10-03 09:24:38",
          feedback: "good\n",
          reviewScore: -1,
          teacherReview: 0,
          status: 1,
          pmId: 42,
        },
        {
          round: 2,
          score: 2,
          time: "2023-10-03 09:24:57",
          feedback: "作業未完成",
          reviewScore: -1,
          teacherReview: 0,
          status: 1,
          pmId: 42,
        },
      ],
      avgReviewScore: "No Scores Available",
      avgFeedbackLength: 25.5,
    },
    {
      reviewId: 18,
      hwNumber: 2,
      reviewerUsername: "D1150136",
      reviewerName: "陳可軒",
      authorUsername: "D1123819",
      authorName: "陳堂修",
      round: [
        {
          round: 1,
          score: 2,
          time: "2023-10-03 09:25:01",
          feedback: "BAD",
          reviewScore: -1,
          teacherReview: 0,
          status: 1,
          pmId: 64,
        },
        {
          round: 2,
          score: 1,
          time: "2023-10-03 09:25:24",
          feedback: "很棒",
          reviewScore: -1,
          teacherReview: 0,
          status: 1,
          pmId: 64,
        },
      ],
      avgReviewScore: 4.0,
      avgFeedbackLength: 25.5,
    },
    {
      reviewId: 21,
      hwNumber: 2,
      reviewerUsername: "D1271374",
      reviewerName: "黃詠傑",
      authorUsername: "D1123954",
      authorName: "陳啟瑋",
      round: [
        {
          round: 1,
          score: 1,
          time: "2023-10-03 09:25:24",
          feedback: "讚讚",
          reviewScore: -1,
          teacherReview: 0,
          status: 3,
          pmId: 21,
        },
        {
          round: 2,
          score: 1,
          time: "2023-10-03 09:27:08",
          feedback: "有達到要求",
          reviewScore: -1,
          teacherReview: 0,
          status: 3,
          pmId: 21,
        },
      ],
      avgReviewScore: "No Scores Available",
      avgFeedbackLength: 11.5,
    },
    {
      reviewId: 20,
      hwNumber: 2,
      reviewerUsername: "D1176999",
      reviewerName: "林仕鈞",
      authorUsername: "D1123954",
      authorName: "陳啟瑋",
      round: [
        {
          round: 1,
          score: 1,
          time: "2023-10-03 09:27:34",
          feedback: "輸出用float之後導致輸出有小數點",
          reviewScore: -1,
          teacherReview: 0,
          status: 3,
          pmId: 43,
        },
        {
          round: 2,
          score: 1,
          time: "2023-10-03 09:28:07",
          feedback: "有達到要求",
          reviewScore: -1,
          teacherReview: 0,
          status: 3,
          pmId: 43,
        },
      ],
      avgReviewScore: "No Scores Available",
      avgFeedbackLength: 11.5,
    },
    {
      reviewId: 19,
      hwNumber: 2,
      reviewerUsername: "D1150402",
      reviewerName: "潘韋樺",
      authorUsername: "D1123954",
      authorName: "陳啟瑋",
      round: [
        {
          round: 1,
          score: 1,
          time: "2023-10-03 09:28:28",
          feedback: "在最後加上scanner.close();會更好",
          reviewScore: -1,
          teacherReview: 0,
          status: 1,
          pmId: 65,
        },
        {
          round: 2,
          score: 1,
          time: "2023-10-03 09:50:22",
          feedback: "讚欸還有打中文",
          reviewScore: -1,
          teacherReview: 0,
          status: 1,
          pmId: 65,
        },
      ],
      avgReviewScore: "No Scores Available",
      avgFeedbackLength: 11.5,
    },
    {
      reviewId: 22,
      hwNumber: 2,
      reviewerUsername: "D1276723",
      reviewerName: "謝佾諠",
      authorUsername: "D1123985",
      authorName: "許鈞翔",
      round: [
        {
          round: 1,
          score: 1,
          time: "2023-10-03 09:51:23",
          feedback: "pass\n",
          reviewScore: -1,
          teacherReview: 0,
          status: 3,
          pmId: 22,
        },
        {
          round: 2,
          score: 1,
          time: "2023-10-03 09:51:57",
          feedback: "pass",
          reviewScore: -1,
          teacherReview: 0,
          status: 3,
          pmId: 22,
        },
      ],
      avgReviewScore: "No Scores Available",
      avgFeedbackLength: 17.0,
    },
    {
      reviewId: 21,
      hwNumber: 2,
      reviewerUsername: "D1271374",
      reviewerName: "黃詠傑",
      authorUsername: "D1123985",
      authorName: "許鈞翔",
      round: [
        {
          round: 1,
          score: 1,
          time: "2023-10-03 09:52:01",
          feedback: "讚讚",
          reviewScore: -1,
          teacherReview: 0,
          status: 3,
          pmId: 44,
        },
        {
          round: 2,
          score: 2,
          time: "2023-10-03 09:52:16",
          feedback: "尚未完成",
          reviewScore: -1,
          teacherReview: 0,
          status: 3,
          pmId: 44,
        },
      ],
      avgReviewScore: "No Scores Available",
      avgFeedbackLength: 17.0,
    },
    {
      reviewId: 20,
      hwNumber: 2,
      reviewerUsername: "D1176999",
      reviewerName: "林仕鈞",
      authorUsername: "D1123985",
      authorName: "許鈞翔",
      round: [
        {
          round: 1,
          score: 1,
          time: "2023-10-03 09:52:27",
          feedback: "很棒\n",
          reviewScore: -1,
          teacherReview: 0,
          status: 3,
          pmId: 66,
        },
        {
          round: 2,
          score: 1,
          time: "2023-10-03 09:52:38",
          feedback: "pass\n",
          reviewScore: -1,
          teacherReview: 0,
          status: 3,
          pmId: 66,
        },
      ],
      avgReviewScore: "No Scores Available",
      avgFeedbackLength: 17.0,
    },
    {
      reviewId: 23,
      hwNumber: 2,
      reviewerUsername: "D0845235",
      reviewerName: "測試帳號",
      authorUsername: "D1149311",
      authorName: "黃樞瑀",
      round: [
        {
          round: 1,
          score: 2,
          time: "2023-10-03 09:53:03",
          feedback: "尚未完成",
          reviewScore: -1,
          teacherReview: 0,
          status: 3,
          pmId: 23,
        },
        {
          round: 2,
          score: 2,
          time: "2023-10-03 09:53:46",
          feedback: "看起來甚麼都沒打?",
          reviewScore: -1,
          teacherReview: 0,
          status: 1,
          pmId: 23,
        },
      ],
      avgReviewScore: "No Scores Available",
      avgFeedbackLength: 11.0,
    },
    {
      reviewId: 22,
      hwNumber: 2,
      reviewerUsername: "D1276723",
      reviewerName: "謝佾諠",
      authorUsername: "D1149311",
      authorName: "黃樞瑀",
      round: [
        {
          round: 1,
          score: 2,
          time: "2023-10-03 09:53:51",
          feedback: "尚未完成",
          reviewScore: -1,
          teacherReview: 0,
          status: 3,
          pmId: 45,
        },
        {
          round: 2,
          score: 1,
          time: "2023-10-03 09:54:42",
          feedback: "讚讚",
          reviewScore: -1,
          teacherReview: 0,
          status: 3,
          pmId: 45,
        },
      ],
      avgReviewScore: "No Scores Available",
      avgFeedbackLength: 11.0,
    },
    {
      reviewId: 21,
      hwNumber: 2,
      reviewerUsername: "D1271374",
      reviewerName: "黃詠傑",
      authorUsername: "D1149311",
      authorName: "黃樞瑀",
      round: [
        {
          round: 1,
          score: 2,
          time: "2023-10-03 09:54:43",
          feedback: "請繳交完整程式碼",
          reviewScore: -1,
          teacherReview: 0,
          status: 3,
          pmId: 67,
        },
        {
          round: 2,
          score: 1,
          time: "2023-10-03 09:54:47",
          feedback: "讚",
          reviewScore: -1,
          teacherReview: 0,
          status: 3,
          pmId: 67,
        },
      ],
      avgReviewScore: "No Scores Available",
      avgFeedbackLength: 11.0,
    },
    {
      reviewId: 1,
      hwNumber: 2,
      reviewerUsername: "D0909463",
      reviewerName: "朱禎城",
      authorUsername: "D1149400",
      authorName: "張庭媮",
      round: [
        {
          round: 1,
          score: 2,
          time: "2023-10-03 09:55:24",
          feedback: "請繳交完整程式碼",
          reviewScore: -1,
          teacherReview: 0,
          status: 3,
          pmId: 1,
        },
        {
          round: 2,
          score: 1,
          time: "2023-10-03 09:55:33",
          feedback: "good!",
          reviewScore: -1,
          teacherReview: 0,
          status: 1,
          pmId: 1,
        },
      ],
      avgReviewScore: "No Scores Available",
      avgFeedbackLength: 7.166666666666667,
    },
    {
      reviewId: 23,
      hwNumber: 2,
      reviewerUsername: "D0845235",
      reviewerName: "測試帳號",
      authorUsername: "D1149400",
      authorName: "張庭媮",
      round: [
        {
          round: 1,
          score: 1,
          time: "2023-10-03 09:55:49",
          feedback: "input.close();\n變數名稱建議命名有意義的名字",
          reviewScore: -1,
          teacherReview: 0,
          status: 1,
          pmId: 46,
        },
        {
          round: 2,
          score: 1,
          time: "2023-10-03 09:56:17",
          feedback: "讚讚連度C度F都有標",
          reviewScore: -1,
          teacherReview: 0,
          status: 1,
          pmId: 46,
        },
      ],
      avgReviewScore: "No Scores Available",
      avgFeedbackLength: 7.166666666666667,
    },
    {
      reviewId: 22,
      hwNumber: 2,
      reviewerUsername: "D1276723",
      reviewerName: "謝佾諠",
      authorUsername: "D1149400",
      authorName: "張庭媮",
      round: [
        {
          round: 1,
          score: 1,
          time: "2023-10-03 09:56:21",
          feedback: "Nice!",
          reviewScore: -1,
          teacherReview: 0,
          status: 3,
          pmId: 68,
        },
        {
          round: 2,
          score: 2,
          time: "2023-10-03 09:56:33",
          feedback: "作業未完成",
          reviewScore: -1,
          teacherReview: 0,
          status: 3,
          pmId: 68,
        },
      ],
      avgReviewScore: "No Scores Available",
      avgFeedbackLength: 7.166666666666667,
    },
    {
      reviewId: 2,
      hwNumber: 2,
      reviewerUsername: "D0915755",
      reviewerName: "陳?言",
      authorUsername: "D1149474",
      authorName: "洪采萱",
      round: [
        {
          round: 1,
          score: 2,
          time: "2023-10-03 09:56:39",
          feedback: "你裡面是空的，沒有程式",
          reviewScore: 4,
          teacherReview: 0,
          status: 3,
          pmId: 2,
        },
        {
          round: 2,
          score: 1,
          time: "2023-10-03 09:56:41",
          feedback: "做得好",
          reviewScore: -1,
          teacherReview: 0,
          status: 3,
          pmId: 2,
        },
      ],
      avgFeedbackLength: 13.666666666666666,
      avgReviewScore: 3.0,
    },
    {
      reviewId: 1,
      hwNumber: 2,
      reviewerUsername: "D0909463",
      reviewerName: "朱禎城",
      authorUsername: "D1149474",
      authorName: "洪采萱",
      round: [
        {
          round: 1,
          score: 1,
          time: "2023-10-03 09:56:48",
          feedback: "GOOD",
          reviewScore: -1,
          teacherReview: 0,
          status: 3,
          pmId: 24,
        },
        {
          round: 2,
          score: 1,
          time: "2023-10-03 09:57:01",
          feedback: "完美\n",
          reviewScore: -1,
          teacherReview: 0,
          status: 1,
          pmId: 24,
        },
      ],
      avgFeedbackLength: 13.666666666666666,
      avgReviewScore: "No Scores Available",
    },
    {
      reviewId: 23,
      hwNumber: 2,
      reviewerUsername: "D0845235",
      reviewerName: "測試帳號",
      authorUsername: "D1149474",
      authorName: "洪采萱",
      round: [
        {
          round: 1,
          score: 1,
          time: "2023-10-03 09:57:26",
          feedback: "棒",
          reviewScore: -1,
          teacherReview: 0,
          status: 1,
          pmId: 69,
        },
        {
          round: 2,
          score: 1,
          time: "2023-10-03 09:57:26",
          feedback: "scanner.close();",
          reviewScore: -1,
          teacherReview: 0,
          status: 1,
          pmId: 69,
        },
      ],
      avgFeedbackLength: 13.666666666666666,
      avgReviewScore: "No Scores Available",
    },
    {
      reviewId: 3,
      hwNumber: 2,
      reviewerUsername: "D0987305",
      reviewerName: "陳煒明",
      authorUsername: "D1149580",
      authorName: "吳?瑋",
      round: [
        {
          round: 1,
          score: 1,
          time: "2023-10-03 09:58:13",
          feedback: "清楚明瞭",
          reviewScore: -1,
          teacherReview: 0,
          status: 1,
          pmId: 3,
        },
        {
          round: 2,
          score: 1,
          time: "2023-10-03 09:58:57",
          feedback: "作業未完成",
          reviewScore: -1,
          teacherReview: 0,
          status: 1,
          pmId: 3,
        },
      ],
      avgFeedbackLength: 6.5,
      avgReviewScore: "No Scores Available",
    },
    {
      reviewId: 2,
      hwNumber: 2,
      reviewerUsername: "D0915755",
      reviewerName: "陳?言",
      authorUsername: "D1149580",
      authorName: "吳?瑋",
      round: [
        {
          round: 1,
          score: 1,
          time: "2023-10-03 09:59:48",
          feedback: "作業未完成",
          reviewScore: -1,
          teacherReview: 0,
          status: 3,
          pmId: 25,
        },
        {
          round: 2,
          score: 2,
          time: "2023-10-03 10:00:31",
          feedback: "作業未完成",
          reviewScore: -1,
          teacherReview: 0,
          status: 3,
          pmId: 25,
        },
      ],
      avgFeedbackLength: 6.5,
      avgReviewScore: 3.0,
    },
    {
      reviewId: 1,
      hwNumber: 2,
      reviewerUsername: "D0909463",
      reviewerName: "朱禎城",
      authorUsername: "D1149580",
      authorName: "吳?瑋",
      round: [
        {
          round: 1,
          score: 1,
          time: "2023-10-03 10:16:55",
          feedback: "有個小問題，輸出是int型態",
          reviewScore: -1,
          teacherReview: 0,
          status: 3,
          pmId: 47,
        },
        {
          round: 2,
          score: 2,
          time: "2023-10-03 10:19:14",
          feedback: "輸出文字未達要求，並且輸出型態為Int(應為Float、Double)",
          reviewScore: -1,
          teacherReview: 0,
          status: 1,
          pmId: 47,
        },
      ],
      avgFeedbackLength: 6.5,
      avgReviewScore: "No Scores Available",
    },
    {
      reviewId: 4,
      hwNumber: 2,
      reviewerUsername: "D1109023",
      reviewerName: "楊孟憲",
      authorUsername: "D1149604",
      authorName: "朱苡甄",
      round: [
        {
          round: 1,
          score: 2,
          time: "2023-10-03 10:19:45",
          feedback: "未繳交",
          reviewScore: -1,
          teacherReview: 0,
          status: 3,
          pmId: 4,
        },
        {
          round: 2,
          score: 2,
          time: "2023-10-03 10:28:00",
          feedback: "輸出要是整數，因為題目測試結果沒有小數點",
          reviewScore: -1,
          teacherReview: 0,
          status: 3,
          pmId: 4,
        },
      ],
      avgFeedbackLength: 17.666666666666668,
      avgReviewScore: "No Scores Available",
    },
    {
      reviewId: 3,
      hwNumber: 2,
      reviewerUsername: "D0987305",
      reviewerName: "陳煒明",
      authorUsername: "D1149604",
      authorName: "朱苡甄",
      round: [
        {
          round: 1,
          score: 2,
          time: "2023-10-03 10:31:17",
          feedback: "沒有看到程式碼",
          reviewScore: -1,
          teacherReview: 0,
          status: 1,
          pmId: 26,
        },
        {
          round: 2,
          score: 2,
          time: "2023-10-03 10:32:34",
          feedback: "沒有看到程式碼",
          reviewScore: -1,
          teacherReview: 0,
          status: 1,
          pmId: 26,
        },
      ],
      avgFeedbackLength: 13.833333333333334,
      avgReviewScore: "No Scores Available",
    },
    {
      reviewId: 2,
      hwNumber: 2,
      reviewerUsername: "D0915755",
      reviewerName: "陳?言",
      authorUsername: "D1149604",
      authorName: "朱苡甄",
      round: [
        {
          round: 1,
          score: 2,
          time: "2023-10-03 10:34:34",
          feedback: "\t\n輸出要是整數，因為題目測試結果沒有小數點",
          reviewScore: 2,
          teacherReview: 0,
          status: 3,
          pmId: 48,
        },
        {
          round: 2,
          score: 2,
          time: "2023-10-03 10:36:01",
          feedback: "沒有看到程式碼",
          reviewScore: -1,
          teacherReview: 0,
          status: 3,
          pmId: 48,
        },
      ],
      avgFeedbackLength: 8.5,
      avgReviewScore: 3.0,
    },
    {
      reviewId: 5,
      hwNumber: 2,
      reviewerUsername: "D1109070",
      reviewerName: "柯昀杰",
      authorUsername: "D1149651",
      authorName: "林茂杰",
      round: [
        {
          round: 1,
          score: 2,
          time: "2023-10-03 10:37:02",
          feedback: "沒有看到程式碼",
          reviewScore: -1,
          teacherReview: 0,
          status: 3,
          pmId: 5,
        },
        {
          round: 2,
          score: 1,
          time: "2023-10-05 01:15:11",
          feedback: "符合題目要求",
          reviewScore: -1,
          teacherReview: 0,
          status: 3,
          pmId: 5,
        },
      ],
      avgFeedbackLength: 7.833333333333333,
      avgReviewScore: "No Scores Available",
    },
    {
      reviewId: 4,
      hwNumber: 2,
      reviewerUsername: "D1109023",
      reviewerName: "楊孟憲",
      authorUsername: "D1149651",
      authorName: "林茂杰",
      round: [
        {
          round: 1,
          score: 1,
          time: "2023-10-05 01:16:15",
          feedback:
            "有轉換成功，不過題目要求變數宣告要是 int (整數型態)，且不用再另外開一個 .java 檔，src 內已經有 Temperature.java",
          reviewScore: -1,
          teacherReview: 0,
          status: 3,
          pmId: 27,
        },
        {
          round: 2,
          score: 1,
          time: "2023-10-05 01:16:56",
          feedback: "符合題目要求",
          reviewScore: -1,
          teacherReview: 0,
          status: 3,
          pmId: 27,
        },
      ],
      avgFeedbackLength: 17.666666666666668,
      avgReviewScore: "No Scores Available",
    },
    {
      reviewId: 3,
      hwNumber: 2,
      reviewerUsername: "D0987305",
      reviewerName: "陳煒明",
      authorUsername: "D1149651",
      authorName: "林茂杰",
      round: [
        {
          round: 1,
          score: 1,
          time: "2023-10-24 02:41:19",
          feedback: "",
          reviewScore: -1,
          teacherReview: 0,
          status: 1,
          pmId: 49,
        },
        {
          round: 2,
          score: 2,
          time: "2023-10-24 08:32:40",
          feedback:
            "Wrong Answer: City.java第12行有錯誤。Main.java cityPopulation變數有錯誤",
          reviewScore: -1,
          teacherReview: 0,
          status: 1,
          pmId: 49,
        },
      ],
      avgFeedbackLength: 13.833333333333334,
      avgReviewScore: "No Scores Available",
    },
    {
      reviewId: 6,
      hwNumber: 2,
      reviewerUsername: "D1123781",
      reviewerName: "劉得鑌",
      authorUsername: "D1149754",
      authorName: "薛子揚",
      round: [
        {
          round: 1,
          score: 1,
          time: "2023-10-24 08:43:21",
          feedback: "cityPopulation值不同有差嗎?",
          reviewScore: -1,
          teacherReview: 0,
          status: 3,
          pmId: 6,
        },
        {
          round: 2,
          score: 2,
          time: "2023-10-24 08:44:52",
          feedback: "作業沒空寫?",
          reviewScore: -1,
          teacherReview: 0,
          status: 3,
          pmId: 6,
        },
      ],
      avgFeedbackLength: 24.5,
      avgReviewScore: "No Scores Available",
    },
    {
      reviewId: 5,
      hwNumber: 2,
      reviewerUsername: "D1109070",
      reviewerName: "柯昀杰",
      authorUsername: "D1149754",
      authorName: "薛子揚",
      round: [
        {
          round: 1,
          score: 1,
          time: "2023-10-24 09:29:10",
          feedback: "中規中矩",
          reviewScore: -1,
          teacherReview: 0,
          status: 3,
          pmId: 28,
        },
        {
          round: 2,
          score: 1,
          time: "2023-10-24 09:31:39",
          feedback: "中規中矩，附加了輸入方式",
          reviewScore: -1,
          teacherReview: 0,
          status: 3,
          pmId: 28,
        },
      ],
      avgFeedbackLength: 7.833333333333333,
      avgReviewScore: "No Scores Available",
    },
    {
      reviewId: 4,
      hwNumber: 2,
      reviewerUsername: "D1109023",
      reviewerName: "楊孟憲",
      authorUsername: "D1149754",
      authorName: "薛子揚",
      round: [
        {
          round: 1,
          score: 1,
          time: "2023-10-24 09:32:09",
          feedback: "",
          reviewScore: -1,
          teacherReview: 0,
          status: 3,
          pmId: 50,
        },
        {
          round: 2,
          score: 1,
          time: "2023-10-24 09:32:53",
          feedback: "中規中矩",
          reviewScore: -1,
          teacherReview: 0,
          status: 3,
          pmId: 50,
        },
      ],
      avgFeedbackLength: 17.666666666666668,
      avgReviewScore: "No Scores Available",
    },
    {
      reviewId: 7,
      hwNumber: 2,
      reviewerUsername: "D1123819",
      reviewerName: "陳堂修",
      authorUsername: "D1150033",
      authorName: "林畔茵",
      round: [
        {
          round: 1,
          score: 2,
          time: "2023-10-24 09:34:47",
          feedback: "Without any code in.",
          reviewScore: -1,
          teacherReview: 0,
          status: 3,
          pmId: 7,
        },
        {
          round: 2,
          score: 1,
          time: "2023-10-24 09:38:04",
          feedback: "Good Job!",
          reviewScore: -1,
          teacherReview: 0,
          status: 3,
          pmId: 7,
        },
      ],
      avgFeedbackLength: 25.5,
      avgReviewScore: "No Scores Available",
    },
    {
      reviewId: 6,
      hwNumber: 2,
      reviewerUsername: "D1123781",
      reviewerName: "劉得鑌",
      authorUsername: "D1150033",
      authorName: "林畔茵",
      round: [
        {
          round: 1,
          score: 1,
          time: "2023-10-24 09:38:15",
          feedback: "都有達到老師題目的要求 很棒:D!!",
          reviewScore: -1,
          teacherReview: 0,
          status: 1,
          pmId: 29,
        },
        {
          round: 2,
          score: 2,
          time: "2023-10-24 09:38:45",
          feedback: "沒有程式碼",
          reviewScore: -1,
          teacherReview: 0,
          status: 3,
          pmId: 29,
        },
      ],
      avgFeedbackLength: 24.5,
      avgReviewScore: "No Scores Available",
    },
    {
      reviewId: 5,
      hwNumber: 2,
      reviewerUsername: "D1109070",
      reviewerName: "柯昀杰",
      authorUsername: "D1150033",
      authorName: "林畔茵",
      round: [
        {
          round: 1,
          score: 1,
          time: "2023-10-24 09:40:37",
          feedback: "Good Job.",
          reviewScore: -1,
          teacherReview: 0,
          status: 3,
          pmId: 51,
        },
        {
          round: 2,
          score: 1,
          time: "2023-10-24 09:40:41",
          feedback: "程式碼清晰簡潔有力",
          reviewScore: -1,
          teacherReview: 0,
          status: 3,
          pmId: 51,
        },
      ],
      avgFeedbackLength: 7.833333333333333,
      avgReviewScore: "No Scores Available",
    },
    {
      reviewId: 8,
      hwNumber: 2,
      reviewerUsername: "D1123954",
      reviewerName: "陳啟瑋",
      authorUsername: "D1150136",
      authorName: "陳可軒",
      round: [
        {
          round: 1,
          score: 1,
          time: "2023-10-24 09:41:35",
          feedback: "不同於%.2f 反而用的Math.round 很酷又很棒!!",
          reviewScore: -1,
          teacherReview: 0,
          status: 3,
          pmId: 8,
        },
        {
          round: 2,
          score: 1,
          time: "2023-10-24 09:41:58",
          feedback: "跟助教講解的不同，用了Math.round很特別",
          reviewScore: -1,
          teacherReview: 0,
          status: 3,
          pmId: 8,
        },
      ],
      avgFeedbackLength: 11.5,
      avgReviewScore: "No Scores Available",
    },
    {
      reviewId: 7,
      hwNumber: 2,
      reviewerUsername: "D1123819",
      reviewerName: "陳堂修",
      authorUsername: "D1150136",
      authorName: "陳可軒",
      round: [
        {
          round: 1,
          score: 1,
          time: "2023-10-24 09:42:36",
          feedback: "程式碼清晰簡潔有力，還有貼心的註解",
          reviewScore: -1,
          teacherReview: 0,
          status: 3,
          pmId: 30,
        },
        {
          round: 2,
          score: 1,
          time: "2023-10-24 09:44:28",
          feedback: "寫了很多註解，很容易理解",
          reviewScore: -1,
          teacherReview: 0,
          status: 3,
          pmId: 30,
        },
      ],
      avgFeedbackLength: 25.5,
      avgReviewScore: "No Scores Available",
    },
    {
      reviewId: 6,
      hwNumber: 2,
      reviewerUsername: "D1123781",
      reviewerName: "劉得鑌",
      authorUsername: "D1150136",
      authorName: "陳可軒",
      round: [
        {
          round: 1,
          score: 1,
          time: "2023-10-24 09:45:18",
          feedback:
            "在轉換人口裡面的變數盡量不要用m 可以換一個更能讓人一眼就明白的變數名稱 雖然題目沒有要求可以自己輸入城市和人口 但是你做出來了 很棒 但其實不用這麼多",
          reviewScore: -1,
          teacherReview: 0,
          status: 1,
          pmId: 52,
        },
        {
          round: 2,
          score: 1,
          time: "2023-10-24 09:46:28",
          feedback: "跟助教不同，用了Math.round很獨特",
          reviewScore: -1,
          teacherReview: 0,
          status: 3,
          pmId: 52,
        },
      ],
      avgFeedbackLength: 24.5,
      avgReviewScore: "No Scores Available",
    },
    {
      reviewId: 9,
      hwNumber: 2,
      reviewerUsername: "D1123985",
      reviewerName: "許鈞翔",
      authorUsername: "D1150402",
      authorName: "潘韋樺",
      round: [
        {
          round: 1,
          score: 1,
          time: "2023-10-24 09:48:24",
          feedback: "寫法不太一樣,值得學習",
          reviewScore: -1,
          teacherReview: 0,
          status: 3,
          pmId: 9,
        },
        {
          round: 2,
          score: 1,
          time: "2023-10-24 09:48:52",
          feedback: "可",
          reviewScore: -1,
          teacherReview: 0,
          status: 1,
          pmId: 9,
        },
      ],
      avgFeedbackLength: 17.0,
      avgReviewScore: "No Scores Available",
    },
    {
      reviewId: 8,
      hwNumber: 2,
      reviewerUsername: "D1123954",
      reviewerName: "陳啟瑋",
      authorUsername: "D1150402",
      authorName: "潘韋樺",
      round: [
        {
          round: 1,
          score: 1,
          time: "2023-10-24 09:50:04",
          feedback: "可",
          reviewScore: -1,
          teacherReview: 0,
          status: 3,
          pmId: 31,
        },
        {
          round: 2,
          score: 1,
          time: "2023-10-24 09:50:56",
          feedback: "正確 符合要求",
          reviewScore: -1,
          teacherReview: 0,
          status: 3,
          pmId: 31,
        },
      ],
      avgFeedbackLength: 11.5,
      avgReviewScore: "No Scores Available",
    },
    {
      reviewId: 7,
      hwNumber: 2,
      reviewerUsername: "D1123819",
      reviewerName: "陳堂修",
      authorUsername: "D1150402",
      authorName: "潘韋樺",
      round: [
        {
          round: 1,
          score: 1,
          time: "2023-10-24 09:51:12",
          feedback:
            "運行了都沒有看到輸出，研究你的程式好久才發現是需要我先輸入，先輸出提示讓執行者知道要輸出比較好歐，或是至少寫上註解讓人知道要輸入比較好，不過運行上是沒有問題的，讚讚",
          reviewScore: -1,
          teacherReview: 0,
          status: 3,
          pmId: 53,
        },
        {
          round: 2,
          score: 2,
          time: "2023-10-24 09:54:14",
          feedback: "output有誤，數字打錯",
          reviewScore: -1,
          teacherReview: 0,
          status: 3,
          pmId: 53,
        },
      ],
      avgFeedbackLength: 25.5,
      avgReviewScore: "No Scores Available",
    },
    {
      reviewId: 10,
      hwNumber: 2,
      reviewerUsername: "D1149311",
      reviewerName: "黃樞瑀",
      authorUsername: "D1176999",
      authorName: "林仕鈞",
      round: [
        {
          round: 1,
          score: 1,
          time: "2023-10-24 09:54:14",
          feedback: "符合規格，讚讚",
          reviewScore: -1,
          teacherReview: 0,
          status: 3,
          pmId: 10,
        },
        {
          round: 2,
          score: 1,
          time: "2023-10-24 09:54:38",
          feedback: "有歸零 讚讚",
          reviewScore: -1,
          teacherReview: 0,
          status: 3,
          pmId: 10,
        },
      ],
      avgFeedbackLength: 11.0,
      avgReviewScore: "No Scores Available",
    },
    {
      reviewId: 9,
      hwNumber: 2,
      reviewerUsername: "D1123985",
      reviewerName: "許鈞翔",
      authorUsername: "D1176999",
      authorName: "林仕鈞",
      round: [
        {
          round: 1,
          score: 1,
          time: "2023-10-24 09:57:01",
          feedback: "還可以手動輸入城市和人口 非常棒",
          reviewScore: -1,
          teacherReview: 0,
          status: 3,
          pmId: 32,
        },
        {
          round: 2,
          score: 1,
          time: "2023-10-24 09:58:42",
          feedback: "讚讚",
          reviewScore: -1,
          teacherReview: 0,
          status: 3,
          pmId: 32,
        },
      ],
      avgFeedbackLength: 17.0,
      avgReviewScore: "No Scores Available",
    },
    {
      reviewId: 8,
      hwNumber: 2,
      reviewerUsername: "D1123954",
      reviewerName: "陳啟瑋",
      authorUsername: "D1176999",
      authorName: "林仕鈞",
      round: [
        {
          round: 1,
          score: 1,
          time: "2023-10-24 10:23:08",
          feedback: "right",
          reviewScore: -1,
          teacherReview: 0,
          status: 3,
          pmId: 54,
        },
        {
          round: 2,
          score: 1,
          time: "2023-10-24 10:25:40",
          feedback: "正確",
          reviewScore: -1,
          teacherReview: 0,
          status: 3,
          pmId: 54,
        },
      ],
      avgFeedbackLength: 11.5,
      avgReviewScore: "No Scores Available",
    },
    {
      reviewId: 11,
      hwNumber: 2,
      reviewerUsername: "D1149400",
      reviewerName: "張庭媮",
      authorUsername: "D1271374",
      authorName: "黃詠傑",
      round: [
        {
          round: 1,
          score: 1,
          time: "2023-10-24 10:26:23",
          feedback: "正確",
          reviewScore: -1,
          teacherReview: 0,
          status: 3,
          pmId: 11,
        },
        {
          round: 2,
          score: 1,
          time: "2023-10-24 10:47:03",
          feedback: "可以加上註解會更容易理解 code",
          reviewScore: -1,
          teacherReview: 0,
          status: 3,
          pmId: 11,
        },
      ],
      avgFeedbackLength: 7.166666666666667,
      avgReviewScore: "No Scores Available",
    },
    {
      reviewId: 10,
      hwNumber: 2,
      reviewerUsername: "D1149311",
      reviewerName: "黃樞瑀",
      authorUsername: "D1271374",
      authorName: "黃詠傑",
      round: [
        {
          round: 1,
          score: 1,
          time: "2023-10-24 10:49:38",
          feedback: "可以加上註解，這樣可以更清楚每一行 code 在做什麼",
          reviewScore: -1,
          teacherReview: 0,
          status: 3,
          pmId: 33,
        },
        {
          round: 2,
          score: 1,
          time: "2023-10-24 10:52:09",
          feedback: "可以不用寫輸入，直接帶入資料即可",
          reviewScore: -1,
          teacherReview: 0,
          status: 1,
          pmId: 33,
        },
      ],
      avgFeedbackLength: 11.0,
      avgReviewScore: "No Scores Available",
    },
    {
      reviewId: 9,
      hwNumber: 2,
      reviewerUsername: "D1123985",
      reviewerName: "許鈞翔",
      authorUsername: "D1271374",
      authorName: "黃詠傑",
      round: [
        {
          round: 1,
          score: 1,
          time: "2023-10-24 11:51:26",
          feedback: "程式碼寫的很精簡，計算部分直接一行解決，很美觀，讚讚",
          reviewScore: -1,
          teacherReview: 0,
          status: 3,
          pmId: 55,
        },
        {
          round: 2,
          score: 1,
          time: "2023-10-24 11:54:43",
          feedback:
            "數學計算的部分，可以自行簡化，不然這樣寫一行解的意義就不見了\n但整體來說還是很精簡，做的很棒",
          reviewScore: -1,
          teacherReview: 0,
          status: 1,
          pmId: 55,
        },
      ],
      avgFeedbackLength: 17.0,
      avgReviewScore: "No Scores Available",
    },
    {
      reviewId: 12,
      hwNumber: 2,
      reviewerUsername: "D1149474",
      reviewerName: "洪采萱",
      authorUsername: "D1276723",
      authorName: "謝佾諠",
      round: [
        {
          round: 1,
          score: 1,
          time: "2023-10-24 11:57:38",
          feedback:
            "一樣是一行解決的部分，可以再修改一些，不必要太多的運算出現\n但整體寫的還是很棒、很精簡",
          reviewScore: -1,
          teacherReview: 0,
          status: 3,
          pmId: 12,
        },
        {
          round: 2,
          score: 1,
          time: "2023-10-24 14:51:18",
          feedback: "非常棒",
          reviewScore: -1,
          teacherReview: 0,
          status: 1,
          pmId: 12,
        },
      ],
      avgFeedbackLength: 13.666666666666666,
      avgReviewScore: "No Scores Available",
    },
    {
      reviewId: 11,
      hwNumber: 2,
      reviewerUsername: "D1149400",
      reviewerName: "張庭媮",
      authorUsername: "D1276723",
      authorName: "謝佾諠",
      round: [
        {
          round: 1,
          score: 1,
          time: "2023-10-24 14:52:14",
          feedback: "非常棒",
          reviewScore: -1,
          teacherReview: 0,
          status: 3,
          pmId: 34,
        },
        {
          round: 2,
          score: 1,
          time: "2023-10-24 14:54:56",
          feedback: "非常棒",
          reviewScore: -1,
          teacherReview: 0,
          status: 3,
          pmId: 34,
        },
      ],
      avgFeedbackLength: 7.166666666666667,
      avgReviewScore: "No Scores Available",
    },
    {
      reviewId: 10,
      hwNumber: 2,
      reviewerUsername: "D1149311",
      reviewerName: "黃樞瑀",
      authorUsername: "D1276723",
      authorName: "謝佾諠",
      round: [
        {
          round: 1,
          score: 1,
          time: "2023-10-25 12:46:39",
          feedback: "完成 很棒",
          reviewScore: -1,
          teacherReview: 0,
          status: 3,
          pmId: 56,
        },
        {
          round: 2,
          score: 1,
          time: "2023-10-25 12:47:55",
          feedback: "有達到要求",
          reviewScore: -1,
          teacherReview: 0,
          status: 1,
          pmId: 56,
        },
      ],
      avgFeedbackLength: 11.0,
      avgReviewScore: "No Scores Available",
    },
    {
      reviewId: 13,
      hwNumber: 2,
      reviewerUsername: "D1149580",
      reviewerName: "吳?瑋",
      authorUsername: "D0845235",
      authorName: "測試帳號",
      round: [
        {
          round: 1,
          score: 1,
          time: "2023-10-25 13:54:24",
          feedback: "看起來沒問題",
          reviewScore: -1,
          teacherReview: 0,
          status: 3,
          pmId: 13,
        },
        {
          round: 2,
          score: 1,
          time: "2023-10-25 13:56:45",
          feedback: "有符合要求",
          reviewScore: -1,
          teacherReview: 0,
          status: 1,
          pmId: 13,
        },
      ],
      avgFeedbackLength: 6.5,
      avgReviewScore: "No Scores Available",
    },
    {
      reviewId: 12,
      hwNumber: 2,
      reviewerUsername: "D1149474",
      reviewerName: "洪采萱",
      authorUsername: "D0845235",
      authorName: "測試帳號",
      round: [
        {
          round: 1,
          score: 2,
          time: "2023-10-25 13:57:36",
          feedback: "作業未完成",
          reviewScore: -1,
          teacherReview: 0,
          status: 3,
          pmId: 35,
        },
        {
          round: 2,
          score: 1,
          time: "2023-10-25 21:52:56",
          feedback: "可行 但不能隨意更改輸入資料",
          reviewScore: -1,
          teacherReview: 0,
          status: 1,
          pmId: 35,
        },
      ],
      avgFeedbackLength: 13.666666666666666,
      avgReviewScore: "No Scores Available",
    },
    {
      reviewId: 11,
      hwNumber: 2,
      reviewerUsername: "D1149400",
      reviewerName: "張庭媮",
      authorUsername: "D0845235",
      authorName: "測試帳號",
      round: [
        {
          round: 1,
          score: 2,
          time: "2023-10-25 21:54:11",
          feedback: "空的 但不確定是否為我這邊的問題",
          reviewScore: -1,
          teacherReview: 0,
          status: 3,
          pmId: 57,
        },
        {
          round: 2,
          score: 2,
          time: "2023-10-25 21:54:59",
          feedback: "空的",
          reviewScore: -1,
          teacherReview: 0,
          status: 3,
          pmId: 57,
        },
      ],
      avgFeedbackLength: 7.166666666666667,
      avgReviewScore: "No Scores Available",
    },
  ];

  // 建立一個新的空節點集合
  var nodes = new vis.DataSet();
  // 建立一個新的空邊集合
  var edges = new vis.DataSet();

  // 建立一個存放評論分數的空集合
  var reviewerScores = {};
  let reviewerCounts = {};

  // 遍歷記錄數據，計算評論者的平均分數
  recordData.forEach((record) => {
    const reviewerId = record.reviewerUsername; // 從記錄中獲取評論者 ID

    record.round.forEach((rnd) => {
      // 確保評論者 ID 已經在對象中有對應的鍵
      if (!reviewerScores[reviewerId]) {
        reviewerScores[reviewerId] = 0; // 初始化評論者的分數為 0
        reviewerCounts[reviewerId] = 0;
      }
      // 將當前 round 的分數加到評論者的總分上
      reviewerScores[reviewerId] += rnd.reviewScore;
      reviewerCounts[reviewerId]++;
    });
  });

  let avgReviewScores = {};
  for (let reviewerId in reviewerScores) {
    if (reviewerCounts[reviewerId] > 0) {
      // 確保有至少一個有效分數
      avgReviewScores[reviewerId] =
        reviewerScores[reviewerId] / reviewerCounts[reviewerId];
    } else {
      avgReviewScores[reviewerId] = 0; // 處理沒有有效分數的情況
    }
  }

  const maxAvgFeedbackLength = Math.max(
    ...recordData.map((record) => record.avgFeedbackLength),
  );

  // 找出對應的 reviewerName
  const reviewer = recordData.find(
    (record) => record.avgFeedbackLength === maxAvgFeedbackLength,
  ).reviewerName;

  // 將最大 avgFeedbackLength 及其對應的 reviewerName 列印出來
  console.log(
    `Max AvgFeedbackLength: ${maxAvgFeedbackLength}`,
  );

  const authorWithMaxFeedbackLength = recordData.find(
    (record) => record.avgFeedbackLength === maxAvgFeedbackLength
  );
  
  if (authorWithMaxFeedbackLength) {
    const authorName = authorWithMaxFeedbackLength.authorName;
    console.log(`Author with Max AvgFeedbackLength: ${authorName}`);
  } else {
    console.log(`No record found for max AvgFeedbackLength.`);
  }
  

  // 建立一個對象來存儲已經處理過的用戶節點
  var userNodes = {};

  // 確保每位用戶只有一個節點
  recordData.forEach((record) => {
    const authorId = record.authorUsername;
    const reviewerId = record.reviewerUsername;

    if (!userNodes[authorId]) {
      userNodes[authorId] = {
        id: authorId,
        label: record.authorName,
        value: 10, // 初始大小
        color: { background: "#FFD7DE", border: "#FFC0CB" }, // 統一設置為粉紅色
      };
    }

    if (!userNodes[reviewerId]) {
      userNodes[reviewerId] = {
        id: reviewerId,
        label: record.reviewerName,
        value: 10, // 初始大小
        color: { background: "#FFD7DE", border: "#FFC0CB" }, // 統一設置為粉紅色
      };
    }
  });

  // 將所有用戶節點添加到節點集合中
  for (let userId in userNodes) {
    nodes.add(userNodes[userId]);
  }

  // 遍歷每條記錄，為每個交互創建邊
  recordData.forEach((record) => {
    const authorId = record.authorUsername;
    const reviewerId = record.reviewerUsername;

    // 確保 reviewer 和 author 節點存在
    if (!userNodes[reviewerId]) {
      console.warn(`Reviewer node not found: ${reviewerId}`);
    }
    if (!userNodes[authorId]) {
      console.warn(`Author node not found: ${authorId}`);
    }

    record.round.forEach((rnd) => {
      var isCommentEmpty =
        rnd.feedback.trim() === "" || rnd.feedback === "無回饋";
      var nodeSize = getSizeByReviewScore(avgReviewScores[reviewerId]);

      
      // 計算正規化分數和對應的顏色，更新節點
      const normalizedScore = (record.avgFeedbackLength / maxAvgFeedbackLength) * 88;
      const lightness = 95 - normalizedScore * 0.5; // 計算亮度，範圍從90%到10%
      const nodeColor = `hsl(350, 80%, ${lightness}%)`;  // 色相 (Hue) 設置為 345，飽和度 (Saturation) 設置為 100%，而亮度 (Lightness) 則根據正規化分數計算。
      if (!userNodes[authorId]) {
        userNodes[authorId] = {
          id: authorId,
          label: record.authorName,
          value: 10, // 初始大小
          color: { background: nodeColor, border: nodeColor }, // 根據正規化分數設置顏色
        };
      }
    
      if (!userNodes[reviewerId]) {
        userNodes[reviewerId] = {
          id: reviewerId,
          label: record.reviewerName,
          value: 10, // 初始大小
          color: { background: "#FFD7DE", border: "#FFC0CB" }, // 統一設置為粉紅色
        };
      }
      // 決定邊的顏色
      let edgeColor = isCommentEmpty ? "red" : "#199FD8";
      if (rnd.status === 1) {
        const firstRound = record.round.find((r) => r.status === 3);
        if (firstRound && firstRound.score === 1) {
          edgeColor = "#3CE62D"; // 第一回合分數為1，第二回合設為綠色
        }
      }

      // 添加評論者到作者的邊
      if (userNodes[reviewerId] && userNodes[authorId]) {
        edges.add({
          from: reviewerId,
          to: authorId,
          arrows: "to",
          dashes: isCommentEmpty,
          color: edgeColor,
        });
      }

      // 添加作者到評論者的邊
      if (userNodes[reviewerId] && userNodes[authorId]) {
        edges.add({
          from: authorId,
          to: reviewerId,
          arrows: "to",
          dashes: isCommentEmpty,
          color: edgeColor,
        });
      }

      // 更新用戶節點大小和顏色
      if (userNodes[authorId]) {
        userNodes[authorId].value += nodeSize;
        userNodes[authorId].color = {
          background: nodeColor,
          border: nodeColor,
        };
      }
    });
  });

  // 根據評分來確定節點大小的函數
  function getSizeByReviewScore(avgReviewScore) {
    if (avgReviewScore > 0 && avgReviewScore < 1) return 100;
    if (avgReviewScore == 1) return 200;
    if (avgReviewScore == 2) return 300;
    if (avgReviewScore == 3) return 400;
    if (avgReviewScore == 4) return 500;
    return 10; // 其他情況默認為最小大小 10
  }

  // 獲取容器元素，通常是一個 div，用來展示網絡圖
  var container = document.getElementById("reviewNetwork");
  // 構造網絡圖所需的數據，包括節點和邊
  var data = {
    nodes: nodes,
    edges: edges,
  };
  
  var options = {
    nodes: {
      scaling: {
        min: 10, // 節點大小的最小值為 10
        max: 500, // 節點大小的最大值為 400
        label: {
          // 關於節點標籤的配置
          enabled: true, // 啟用標籤顯示
          min: 14, // 標籤字體的最小大小為 14
          max: 200, // 標籤字體的最大大小為 200
          maxVisible: 30, // 最大可見範圍為 30 單位
          drawThreshold: 5, // 繪製閾值為 5
        },
        customScalingFunction: function (min, max, total, value) {
          // 自定義的節點大小調整函數，根據節點的值（value）決定其大小
          if (value <= 10) return 0.1; // 預設值
          if (value <= 100) return 0.15; // 如果值小於或等於 100，則大小比例為 0.25
          if (value <= 200) return 0.2; // 如果值小於或等於 200，則大小比例為 0.5
          if (value <= 300) return 0.25; // 如果值小於或等於 300，則大小比例為 0.75
          if (value <= 400) return 0.3; // 如果值小於或等於 400，則大小比例為 1
          return 0.35; // 如果值大於 400，大小比例為 1
        },
      },
    },
    edges: {
      physics: true, // 啟用物理屬性
      length: 400, // 設置邊的初始長度
    },
    physics: {
      barnesHut: {
        gravitationalConstant: -2000,
        centralGravity: 0.3,
        springLength: 200,
        springConstant: 0.04,
        damping: 0.09,
        avoidOverlap: 0
      },
      minVelocity: 0.75
    }
  };

  // 創建一個新的 network，並將其附加到容器上
  var network = new vis.Network(container, data, options);
});
