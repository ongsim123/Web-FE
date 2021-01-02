# VScode - Node.js Debugging

1. **[F5] , [Cmd + Shift + D] , [상단바 -> Run -> Start Debugging]** 으로 디버깅 모드 설정
2. create a launch.json file을 클릭 후 Select Enviroment에서 Node.js를 선택
3. 파일 생성 이후, 디버깅을 실행
___

## Breakpoint 란?
- 디버깅 실행을 일시 중지하는 **중단점**.
- 중단하고 싶은 해당 줄에서 [F9]으로 설정 가능.
```
>Step Over
- Breakpoint 다음 줄에 나오는 명령을 실행하고 다음 줄로 점프. 
함수는 이동하지 않고 바로 실행

>Step into
- Breakpoint 다음 줄에 함수 호출이 포함되어 있다면 해당 함수로 점프하고 
첫 줄에서 멈춤

>Step Out
- 현재 함수의 나머지 부분을 실행한 다음 함수 호출 뒤 다음 명령문에서 일시 중지
```
___

## Call Stack 이란?
- 함수의 호출을 기록하는 자료구조. <br>
기본적으로 우리가 프로그램 안에서 위치한 곳이며, 만약 우리가 어떤 함수를 실행시킨다면, 우리는 스택 위에 무언가를 올리는(push) 행위를 하는 것 <br>
함수로 부터 반환을 받을 때, 스택의 맨 위를 가져오는(pop) 것 <br>
현재 어떤 함수가 실행되는지, 함수 안에서도 어떤 함수가 호출되어 있는 지 확인 가능
___

## Watch 란?
-원하는 명령어의 결과값을 확인할 수 있음.

```
Watch 사용법
- 확인하고 싶은 명령어의 해당 줄에 BreakPoint를 설정
Run창의 Watch에서 [+] 선택 후 , 확인하고 싶은 명령어를 입력 후 Run.
```