const express = require('express');
const bodyParser = require('body-parser');
const app = express();
/*server의 port번호는 5000*/
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('', (req, res) => {
    res.send("Hello localhost:5000");
});

app.get('/api/info_me', (req, res) => {
    res.send(
        [
            {
                'id' : 1,
                'image' : '/images/JoonHyun.jpg',
                'name' : '신준현',
                'birthday' : '940919',
                'gender' : '남자',
                'job' : '프로그래머'
            }
        ]
    );
});

/*5000번 포트로 app동작*/
/*동작중이면 콘솔로 포트 출력*/
app.listen(port, () => console.log(`Listening on port ${port}`));