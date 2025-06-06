// 词汇库
const wordPairs = [
    // 基础词汇 (Basic Words)
    { chinese: "苹果", english: "apple" },
    { chinese: "香蕉", english: "banana" },
    { chinese: "猫", english: "cat" },
    { chinese: "狗", english: "dog" },
    { chinese: "大象", english: "elephant" },
    { chinese: "鱼", english: "fish" },
    { chinese: "长颈鹿", english: "giraffe" },
    { chinese: "房子", english: "house" },
    { chinese: "冰淇淋", english: "ice cream" },
    { chinese: "果汁", english: "juice" },
    { chinese: "风筝", english: "kite" },
    { chinese: "狮子", english: "lion" },
    { chinese: "猴子", english: "monkey" },
    { chinese: "面条", english: "noodle" },
    { chinese: "橙子", english: "orange" },
    { chinese: "熊猫", english: "panda" },
    { chinese: "女王", english: "queen" },
    { chinese: "兔子", english: "rabbit" },
    { chinese: "太阳", english: "sun" },
    { chinese: "老虎", english: "tiger" },

    // 食物和饮料 (Food and Drinks)
    { chinese: "面包", english: "bread" },
    { chinese: "蛋糕", english: "cake" },
    { chinese: "咖啡", english: "coffee" },
    { chinese: "巧克力", english: "chocolate" },
    { chinese: "饼干", english: "cookie" },
    { chinese: "鸡蛋", english: "egg" },
    { chinese: "水果", english: "fruit" },
    { chinese: "汉堡", english: "hamburger" },
    { chinese: "蜂蜜", english: "honey" },
    { chinese: "牛奶", english: "milk" },
    { chinese: "披萨", english: "pizza" },
    { chinese: "米饭", english: "rice" },
    { chinese: "沙拉", english: "salad" },
    { chinese: "汤", english: "soup" },
    { chinese: "茶", english: "tea" },
    { chinese: "蔬菜", english: "vegetable" },
    { chinese: "水", english: "water" },
    { chinese: "葡萄酒", english: "wine" },
    { chinese: "酸奶", english: "yogurt" },
    { chinese: "三明治", english: "sandwich" },

    // 动物 (Animals)
    { chinese: "蚂蚁", english: "ant" },
    { chinese: "熊", english: "bear" },
    { chinese: "鸟", english: "bird" },
    { chinese: "蝴蝶", english: "butterfly" },
    { chinese: "骆驼", english: "camel" },
    { chinese: "鸡", english: "chicken" },
    { chinese: "奶牛", english: "cow" },
    { chinese: "鹿", english: "deer" },
    { chinese: "鸭子", english: "duck" },
    { chinese: "鹰", english: "eagle" },
    { chinese: "青蛙", english: "frog" },
    { chinese: "山羊", english: "goat" },
    { chinese: "仓鼠", english: "hamster" },
    { chinese: "马", english: "horse" },
    { chinese: "袋鼠", english: "kangaroo" },
    { chinese: "考拉", english: "koala" },
    { chinese: "老鼠", english: "mouse" },
    { chinese: "章鱼", english: "octopus" },
    { chinese: "企鹅", english: "penguin" },
    { chinese: "猪", english: "pig" },

    // 职业 (Occupations)
    { chinese: "演员", english: "actor" },
    { chinese: "艺术家", english: "artist" },
    { chinese: "医生", english: "doctor" },
    { chinese: "工程师", english: "engineer" },
    { chinese: "农民", english: "farmer" },
    { chinese: "消防员", english: "firefighter" },
    { chinese: "法官", english: "judge" },
    { chinese: "律师", english: "lawyer" },
    { chinese: "音乐家", english: "musician" },
    { chinese: "护士", english: "nurse" },
    { chinese: "警察", english: "police" },
    { chinese: "教授", english: "professor" },
    { chinese: "科学家", english: "scientist" },
    { chinese: "学生", english: "student" },
    { chinese: "老师", english: "teacher" },
    { chinese: "作家", english: "writer" },
    { chinese: "厨师", english: "chef" },
    { chinese: "司机", english: "driver" },
    { chinese: "记者", english: "journalist" },
    { chinese: "飞行员", english: "pilot" },

    // 自然和环境 (Nature and Environment)
    { chinese: "空气", english: "air" },
    { chinese: "海滩", english: "beach" },
    { chinese: "云", english: "cloud" },
    { chinese: "沙漠", english: "desert" },
    { chinese: "地球", english: "earth" },
    { chinese: "森林", english: "forest" },
    { chinese: "花园", english: "garden" },
    { chinese: "山", english: "mountain" },
    { chinese: "海洋", english: "ocean" },
    { chinese: "雨", english: "rain" },
    { chinese: "河流", english: "river" },
    { chinese: "海", english: "sea" },
    { chinese: "天空", english: "sky" },
    { chinese: "雪", english: "snow" },
    { chinese: "星星", english: "star" },
    { chinese: "石头", english: "stone" },
    { chinese: "树", english: "tree" },
    { chinese: "山谷", english: "valley" },
    { chinese: "水", english: "water" },
    { chinese: "风", english: "wind" },

    // 情感和性格 (Emotions and Personality)
    { chinese: "愤怒", english: "angry" },
    { chinese: "勇敢", english: "brave" },
    { chinese: "冷静", english: "calm" },
    { chinese: "快乐", english: "happy" },
    { chinese: "诚实", english: "honest" },
    { chinese: "善良", english: "kind" },
    { chinese: "懒惰", english: "lazy" },
    { chinese: "友好", english: "friendly" },
    { chinese: "耐心", english: "patient" },
    { chinese: "骄傲", english: "proud" },
    { chinese: "悲伤", english: "sad" },
    { chinese: "害羞", english: "shy" },
    { chinese: "聪明", english: "smart" },
    { chinese: "强壮", english: "strong" },
    { chinese: "温柔", english: "gentle" },
    { chinese: "热情", english: "enthusiastic" },
    { chinese: "幽默", english: "humorous" },
    { chinese: "乐观", english: "optimistic" },
    { chinese: "悲观", english: "pessimistic" },
    { chinese: "严肃", english: "serious" },

    // 时间和日期 (Time and Date)
    { chinese: "年", english: "year" },
    { chinese: "月", english: "month" },
    { chinese: "周", english: "week" },
    { chinese: "天", english: "day" },
    { chinese: "小时", english: "hour" },
    { chinese: "分钟", english: "minute" },
    { chinese: "秒", english: "second" },
    { chinese: "早晨", english: "morning" },
    { chinese: "下午", english: "afternoon" },
    { chinese: "晚上", english: "evening" },
    { chinese: "夜晚", english: "night" },
    { chinese: "今天", english: "today" },
    { chinese: "明天", english: "tomorrow" },
    { chinese: "昨天", english: "yesterday" },
    { chinese: "现在", english: "now" },
    { chinese: "过去", english: "past" },
    { chinese: "未来", english: "future" },
    { chinese: "季节", english: "season" },
    { chinese: "春天", english: "spring" },
    { chinese: "夏天", english: "summer" },

    // 身体部位 (Body Parts)
    { chinese: "手臂", english: "arm" },
    { chinese: "耳朵", english: "ear" },
    { chinese: "眼睛", english: "eye" },
    { chinese: "脸", english: "face" },
    { chinese: "手指", english: "finger" },
    { chinese: "脚", english: "foot" },
    { chinese: "头发", english: "hair" },
    { chinese: "手", english: "hand" },
    { chinese: "头", english: "head" },
    { chinese: "腿", english: "leg" },
    { chinese: "嘴", english: "mouth" },
    { chinese: "鼻子", english: "nose" },
    { chinese: "肩膀", english: "shoulder" },
    { chinese: "牙齿", english: "tooth" },
    { chinese: "舌头", english: "tongue" },
    { chinese: "脖子", english: "neck" },
    { chinese: "膝盖", english: "knee" },
    { chinese: "手腕", english: "wrist" },
    { chinese: "肘部", english: "elbow" },
    { chinese: "脚踝", english: "ankle" },

    // 颜色 (Colors)
    { chinese: "红色", english: "red" },
    { chinese: "蓝色", english: "blue" },
    { chinese: "绿色", english: "green" },
    { chinese: "黄色", english: "yellow" },
    { chinese: "黑色", english: "black" },
    { chinese: "白色", english: "white" },
    { chinese: "紫色", english: "purple" },
    { chinese: "橙色", english: "orange" },
    { chinese: "粉色", english: "pink" },
    { chinese: "棕色", english: "brown" },
    { chinese: "灰色", english: "gray" },
    { chinese: "金色", english: "gold" },
    { chinese: "银色", english: "silver" },
    { chinese: "青色", english: "cyan" },
    { chinese: "深蓝色", english: "navy" },
    { chinese: "浅绿色", english: "lime" },
    { chinese: "深红色", english: "maroon" },
    { chinese: "米色", english: "beige" },
    { chinese: "橄榄色", english: "olive" },
    { chinese: "天蓝色", english: "sky blue" },

    // 数字 (Numbers)
    { chinese: "一", english: "one" },
    { chinese: "二", english: "two" },
    { chinese: "三", english: "three" },
    { chinese: "四", english: "four" },
    { chinese: "五", english: "five" },
    { chinese: "六", english: "six" },
    { chinese: "七", english: "seven" },
    { chinese: "八", english: "eight" },
    { chinese: "九", english: "nine" },
    { chinese: "十", english: "ten" },
    { chinese: "十一", english: "eleven" },
    { chinese: "十二", english: "twelve" },
    { chinese: "十三", english: "thirteen" },
    { chinese: "十四", english: "fourteen" },
    { chinese: "十五", english: "fifteen" },
    { chinese: "十六", english: "sixteen" },
    { chinese: "十七", english: "seventeen" },
    { chinese: "十八", english: "eighteen" },
    { chinese: "十九", english: "nineteen" },
    { chinese: "二十", english: "twenty" }
];

// 游戏状态
let currentScore = 0;
let currentRound = 1;
let currentWord = null;

// 创建烟花特效
function createFirework(x, y) {
    const colors = ['#ff0', '#f0f', '#0ff', '#f00', '#0f0', '#00f'];
    const firework = document.createElement('div');
    firework.className = 'firework';
    firework.style.setProperty('--x', `${x}px`);
    firework.style.setProperty('--y', `${y}px`);
    firework.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.appendChild(firework);

    // 动画结束后移除元素
    firework.addEventListener('animationend', () => {
        firework.remove();
    });
}

// 在随机位置创建多个烟花
function createFireworks() {
    const container = document.querySelector('.container');
    const rect = container.getBoundingClientRect();
    
    // 在容器周围创建多个烟花
    for (let i = 0; i < 5; i++) {
        const x = rect.left + Math.random() * rect.width;
        const y = rect.top + Math.random() * rect.height;
        createFirework(x, y);
    }
}

// 初始化游戏
function initGame() {
    currentScore = 0;
    currentRound = 1;
    updateDisplay();
    showNewWord();
}

// 显示新单词
function showNewWord() {
    const randomIndex = Math.floor(Math.random() * wordPairs.length);
    currentWord = wordPairs[randomIndex];
    document.getElementById('chineseWord').textContent = currentWord.chinese;
    document.getElementById('answer').value = '';
    document.getElementById('message').textContent = '';
    document.getElementById('answer').focus();
}

// 检查答案
function checkAnswer() {
    const userAnswer = document.getElementById('answer').value.toLowerCase().trim();
    const messageElement = document.getElementById('message');

    if (userAnswer === currentWord.english.toLowerCase()) {
        currentScore++;
        messageElement.textContent = "正确！";
        messageElement.className = "message correct";
        // 答对时显示烟花特效
        createFireworks();
    } else {
        messageElement.textContent = `错误！正确答案是: ${currentWord.english}`;
        messageElement.className = "message wrong";
    }

    updateDisplay();

    // 检查游戏是否结束
    if (currentScore >= 10 || currentRound >= 20) {
        endGame();
    } else {
        currentRound++;
        setTimeout(showNewWord, 1500);
    }
}

// 更新显示
function updateDisplay() {
    document.getElementById('score').textContent = currentScore;
    document.getElementById('round').textContent = currentRound;
}

// 结束游戏
function endGame() {
    const messageElement = document.getElementById('message');
    const restartButton = document.getElementById('restartButton');
    
    if (currentScore >= 10) {
        messageElement.textContent = `恭喜你赢了！最终得分：${currentScore}`;
        // 游戏胜利时显示更多烟花
        for (let i = 0; i < 3; i++) {
            setTimeout(() => createFireworks(), i * 300);
        }
    } else {
        messageElement.textContent = `游戏结束！最终得分：${currentScore}`;
    }
    messageElement.className = "message";
    
    // 禁用输入和按钮
    document.getElementById('answer').disabled = true;
    document.querySelector('button').disabled = true;
    
    // 显示再来一次按钮
    restartButton.classList.add('show');
}

// 重置游戏
function restartGame() {
    // 重置游戏状态
    currentScore = 0;
    currentRound = 1;
    
    // 启用输入和按钮
    document.getElementById('answer').disabled = false;
    document.querySelector('button').disabled = false;
    
    // 隐藏再来一次按钮
    document.getElementById('restartButton').classList.remove('show');
    
    // 清空消息
    document.getElementById('message').textContent = '';
    
    // 更新显示并开始新游戏
    updateDisplay();
    showNewWord();
}

// 添加回车键提交功能
document.getElementById('answer').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        checkAnswer();
    }
});

// 启动游戏
initGame(); 