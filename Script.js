let tasks = [];

function addTask() {
    const name = document.getElementById("task-name").value;
    const duration = parseInt(document.getElementById("task-duration").value);

    if(name && duration > 0){
        tasks.push({name, duration});
        document.getElementById("task-name").value = "";
        document.getElementById("task-duration").value = "";
        displayTasks();
    } else {
        alert("أدخل اسم المهمة ومدة صحيحة!");
    }
}

function displayTasks() {
    const list = document.getElementById("task-list");
    list.innerHTML = "";
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.textContent = `${task.name} - ${task.duration} دقيقة`;
        list.appendChild(li);
    });
}

function showSchedule() {
    if(tasks.length === 0){
        alert("لا توجد مهام بعد!");
        return;
    }

    let scheduleText = "جدولك اليومي:\n";
    let totalTime = 0;

    tasks.forEach(task => {
        scheduleText += `• ${task.name} لمدة ${task.duration} دقيقة\n`;
        totalTime += task.duration;
    });

    scheduleText += `\nمجموع الوقت: ${totalTime} دقيقة\n`;

    // نصائح ذكية
    if(totalTime > 180){
        scheduleText += "نصيحة: خذ استراحة قصيرة كل ساعة لتكون أكثر تركيزاً!";
    } else {
        scheduleText += "نصيحة: حافظ على التركيز وانجز المهام بكفاءة!";
    }

    document.getElementById("schedule").innerText = scheduleText;
          }
