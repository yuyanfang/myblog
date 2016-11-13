#### session 对象
  session对象是javax.servlet.http.HttpSession接口的实例对象，它封装了属于客户会话的所有信息。
  
  session在使用时遵循的是session机制。session机制是一种服务器端的机制，在服务端使用类似于散列表的结构来保存信息。
  
  ```
   1. 客户端  --request--> 服务器端 
   
    [检查是否已经创建了session根据sessionid识别，如果存在了就根据sessionid返回数据，如果不存在就创建新sessionid]
    
    例如：购买商品时提示登录，下载资源时提示登录，系统通过session实现对网站的访问控制。
  ```
