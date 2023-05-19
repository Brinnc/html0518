 //숫자 출력 시 자릿수 처리
    //두자리 미만일 경우 앞에 문자 '0'을 붙이자
    //n은 문자열 처리 대상이 되는 숫자
    function numString(n) {
        let result = "";

        if (n < 10) { //한자리수라면
            result = "0" + n;
        } else {
            result = n;
        }
        //console.log("함수 호출 결과는", result);
        return result;
    }