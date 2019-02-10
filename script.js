var Stages = new Array();
var stageId = 0;

class Stage{
	constructor(name){
		this.name = name;
		this.Tasks = new Array();
	}
	setTask(stageName){
		this.Tasks.push(stageName);
	}
	getTask(){
		let s = this.Tasks.shift();
		return s;
	}
}

function refresh(num){
	currentStage = Stages[num];

	var newdiv = document.createElement('div');
	newdiv.className = "stage";
	newdiv.setAttribute('id',num);

	var h = document.createElement('h4');
	h.innerHTML = currentStage.name;
	newdiv.appendChild(h);

	var oi = document.createElement('oi');

	for(var i = 0; i < currentStage.Tasks.length; i++){
		var li = document.createElement('li');
		li.innerHTML = currentStage.Tasks[i];
		oi.appendChild(li);
	}
	newdiv.appendChild(oi);

	button = document.createElement('button');
	button.className = 'nextStage';
	button.innerHTML = 'to next stage';
	button.setAttribute('onclick','nextStage(this)');
	newdiv.appendChild(button);

	var content = document.getElementById('content');
	var oldElem = document.getElementById(String(num));
	content.replaceChild(newdiv,oldElem)
}

function newStage(){
	let res = prompt("Введите название стадии","стадия");
	let s = new Stage(res);
	Stages.push(s);
	// alert(Stages[0].name);

	var div = document.createElement('div');
	div.className = "stage";
	div.setAttribute('id',stageId);

	var h = document.createElement('h4');
	h.innerHTML = res;
	div.appendChild(h);

	button = document.createElement('button');
	button.className = 'nextStage';
	button.innerHTML = 'to next stage';
	button.setAttribute('onclick','nextStage(this)');
	div.appendChild(button);

	var content = document.getElementById('content');
	content.appendChild(div);

	stageId++;
}

function newTask(){
	let res = prompt("Введите название задачи","задача");
	Stages[0].setTask(res);
	// alert(Stages[0].name);
	refresh(0);
}

function nextStage(elem){
	let stageNum = Number(elem.parentNode.id);
	// alert(stageNum);

	let task = Stages[stageNum].getTask();
	if(stageNum != Stages.length - 1){
		Stages[stageNum + 1].setTask(task);
		refresh(stageNum);
		refresh(stageNum + 1);
	}
	else{
		refresh(stageNum);
	}
}