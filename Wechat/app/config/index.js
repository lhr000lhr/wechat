import axios from 'axios'

// export const baseUrl = 'http://113.62.127.253:6081/partyBuilding/'
export const baseUrl = 'http://172.16.10.32:9080/api/'
//图片host
export const pictureBaseUrl = baseUrl + 'cms'

//签到图标host
export const pictureSignBaseUrl = baseUrl + 'sign'

//登录接口
export const authUrl = 'uaa/oauth/token'
//token回收
export const revokeTokenUrl = 'uaa/oauth/token'
//获取用户信息
export const userInfoUrl = baseUrl + 'uaa/users/info'
//修改用户信息
export const modifyUserInfoUrl = baseUrl + 'uaa/users'

//首页-获取Banner
export const homeBannerUrl = baseUrl + 'cms/pictures'
//首页-获取内容
export const homeContentUrl = baseUrl + 'cms/contentgroups'
//获取所有频道
export const channelUrl = baseUrl + 'cms/content-groups'
/**
 * 文章详情
 * @param {*} articleId
 * @param {*} type
 */
export const articleDetailUrl = (articleId, type) =>
  baseUrl + `cms/picture-or-articles/${articleId}/information/${type}`
//文章评论
export const articleCommentUrl = (articleId, type) =>
  baseUrl + `cms/comments/${articleId}/${type}`
//提交评论
export const articleCommitCommentUrl = baseUrl + 'cms/comments'
//文章点赞
export const articlePraseUrl = (articleId, type) =>
  baseUrl + `cms/likeCount/${articleId}/${type}`
//评论点赞
export const commentPraseUrl = baseUrl + 'cms/comments-like'

//文章分享
export const articleShareUrl = (articleId, type) =>
  baseUrl + `cms/sharecount/${articleId}/${type}`

//获取会议列表
export const meetingListUrl = baseUrl + 'sign/signmeetings-user/'

//获取签到任务列表
export const meetingsigntaskUrl = baseUrl + 'sign/signtimes/'

//获取会议日程列表
export const meetingdaylistUrl = baseUrl + 'sign/sign-meeting-agendas/'

//获取会议签到首页信息
export const meetingsignhomeUrl = baseUrl + 'sign/signmeetings-sign-task'

//用户签到
export const meetingsignUrl = baseUrl + 'sign/sign-meeting-users/signs'

//********************考试部分 start********************//

//自测列表
export const selfTestListUrl =
  baseUrl + 'online-test/exams/AppExamList/usingByMyself'

//根据自测试卷id获取试卷下所有题目
export const selfTestQuestionListUrl = id =>
  baseUrl + `online-test/exams/${id}/questions`

//获取考试试卷列表
export const onlineTestListUrl = baseUrl + 'online-test/exams/AppExamList'

//开始考试
export const startExamUrl = examId =>
  baseUrl + `online-test/examResults/beginTestingOfResult/${examId}`

//试题提交
export const commitExamUrl =
  baseUrl + 'online-test/examResults/finishTestingOfResult'

//试题收藏 -- 取消收藏
export const examCollectUrl = (questionId, examId) =>
  baseUrl + `online-test/examResults/exam/${examId}/collecting/${questionId}`

//错题集
export const wrongListUrl = baseUrl + 'online-test/wrongQuestions'

//重点题库
export const collectListUrl =
  baseUrl + 'online-test/collecting/questionTypes/questions'

//历史成绩
export const historyScoreUrl = examId =>
  baseUrl + `online-test/examResults/users/testingOfResult/exams/${examId}`

//获取试卷下错题
export const examWrongListUrl = examId =>
  baseUrl + `online-test/wrongQuestions/exam/${examId}/user`

//获取试卷下重点题
export const examCollectListUrl = examId =>
  baseUrl + `online-test/examResults/collecting/exams/${examId}`

//收藏题目刷新
export const examCollectQuestionListUrl = questionTypeId =>
  baseUrl + `online-test/collecting/questionTypes/${questionTypeId}/questions`

//错题题目刷新
export const examWrongQuestionListUrl = questionTypeId =>
  baseUrl + `online-test/wrongQuestions/questionTypes/${questionTypeId}`

//********************考试部分 end********************//

//获取书籍信息
export const bookListUrl = baseUrl + 'ebook/books/bookList'

//设置全局host
axios.defaults.baseURL = baseUrl

axios.defaults.headers.post['Content-Type'] = 'application/json'
