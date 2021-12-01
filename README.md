# Simple Twitter API    
### Simple Twitter developed in fullstack mode (全端模式開發的 Simple Twitter 論壇網頁)      

Live Demo： https://alphitter-turagon.herokuapp.com       

Github repo: https://github.com/Turagon/twitter-fullstack-2020       

### Function List(功能)      
1. User login, logout, register(使用者可以註冊、登入、登出)        
2. When user register new account, will indicate ID availability in real time(使用者註冊時 會即時顯示帳號是否可用)                   
3. Could edit or create personal information 使用者可以編輯個人資料 (account, name, email, password)         
4. Could upload or edit user profile include avatar, background 使用者能編輯自己的暱稱、自我介紹、個人頭像與封面    
5. Real time display input words length if over the limitation 使用者編輯帳號或是自我介紹時，即時顯示輸入字數              
6. Could publish, reply, thumbup tweet 使用者可以發表推文，回覆/按讚他人的推文             
7. Could follow or disfollow other twitter 使用者可以追蹤/取消追蹤他人
8. After login, user could see information as below :         
登入的使用者可以看到以下頁籤：     
tweets 推文   
replies 推文與回覆    
following 跟隨中的對象    
follower 跟隨者   
liked tweet 喜歡的內容    
top 10 twitters 側邊欄可以看到追隨人數Top 10的使用者    
administrator can login admin page 管理者(admin)可從後台登入頁面進入後台    
admin could browse user data, all tweets 可以瀏覽使用者數據summary，包括推文數、按讚數、追隨人數、追隨者人數     

### Environment setup   
Before starting this app, please install NPM, MySQL, MySQL Workbench        
請預先安裝 NPM, MySQL, MySQL Workbench     

### Install 
1. Clone this app from https://github.com/Turagon/twitter-fullstack-2020        
   在終端機輸入指令 clone 此專案至本機電腦，並安裝相關套件         
   $ git clone https://github.com/Turagon/twitter-fullstack-2020 

2. go to the download directory from terminal   
   開啟終端cd到下載的目錄下     
   $ cd twitter-fullstack-2020 

3. create .env file and setting variables    
  * SESSION_SECRET         
  * IMGUR_CLIENT_ID 

  設定環境變數檔案，建立.env檔。
  設定參數如下:    
  * SESSION_SECRET    
  * IMGUR_CLIENT_ID
  for IMGUR_CLIENT_ID, you need go to Imgur official site register an account and apply for it                 
  需要註冊並取得IMGUR_CLIENT_ID。 Imgur官網：https://imgur.com/       

MySQL Workbench 新增資料庫     

Please refer to config.json for the database setting
開發環境的資料庫名稱：twitter_workspace 測試環境的資料庫名稱：twitter_workspace_test 可參考config.json     

Run migration after database is built
執行 migration     
$ npx sequelize db:migrate    
新增種子資料     
$ npx sequelize db:seed:all


啟動 web server，看到 server on 表示啟動成功     
$ export NODE_ENV=development     
$ npm run dev     
server on

ID and password
測試帳號、密碼       
Admin 帳號： root                 

user 帳號：     
user1           
user2            
user3            
user4           
user5           
user6               

Password for above users is same as below.
password： 12345678

Contributors     
Rex
rexlin6245@gmail.com 