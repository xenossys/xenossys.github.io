
	  import Post_0 from "./Post_0"
import Post_1 from "./Post_1"
 
	
	  const Router : any = {"Post_0":{"component":"","path":"../src/_posts/test1.md","fileName":"Post_0","title":"블로그만들기","author":"Xenossys","date":"2020-12-15","categories":"[React-Native]","tags":"[React-native, error, test]","subTitle":"개발 연차가 조금씩 쌓이다 보니 어느순간 블로그를 하겠다고 선포하고 다녔다. 하지만 현 직장으로 이직하고 바쁜 업무에 치여 생활하기를 1년이 넘어...","img":"https://user-images.githubusercontent.com/68272155/103173725-3076ee80-48a0-11eb-9ea4-ac50925bb99f.png","toc":"false"},"Post_1":{"component":"","path":"../src/_posts/test2.md","fileName":"Post_1","title":"도커 설치하기 (ubuntu 18)","author":"Xenossys","date":"2020-12-15","categories":"[React-Native, KKK]","img":"https://pbs.twimg.com/profile_images/1273307847103635465/lfVWBmiW_400x400.png","subTitle":"블로그를 시작하는 방법은 참 다양하다. Medium, Velog, T-story 등 블로그 전용 플렛폼들도 상당히 많다. 이것들의 서로다른 장단은 있지만 그것을 따지기 이전에 개발자의 타이틀을 달고 그래도 블로그는 직접 만들어야 하지 않나 싶었다.","tags":"[react-native, android, error]","toc":"false"}}
	
	  const Categorys : any = {"REACT-NATIVE":["Post_0","Post_1"],"KKK":["Post_1"]}
	
	  const Tags :any = {"react-native":["Post_0","Post_1"],"error":["Post_0","Post_1"],"test":["Post_0"],"android":["Post_1"]}
	  Router.Post_0.component = Post_0
Router.Post_1.component = Post_1

	  export { Router, Categorys, Tags }
	