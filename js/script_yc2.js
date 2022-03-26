// Sắp xếp tăng dần theo pp sắp xếp chọn  
function tangDan(thisArray){
    for(let i=0; i<thisArray.length-1; i++){
        let index = i
        for(let j=i+1; j< thisArray.length; j++){
            if(thisArray[index] > thisArray[j]){
                index = j
            }
        }
        if(index != i){
            let temp = thisArray[index]
            thisArray[index] = thisArray[i]
            thisArray[i] = temp
        }
    }
    return thisArray
}

// Sắp xếp giảm dần theo pp sắp xếp chọn
function giamDan(thisArray){
    for(let i=0; i<thisArray.length-1; i++){
        let index = i
        for(let j=i+1; j< thisArray.length; j++){
            if(thisArray[index] < thisArray[j]){
                index = j
            }
        }
        if(index != i){
            let temp = thisArray[index]
            thisArray[index] = thisArray[i]
            thisArray[i] = temp
        }
    }
    return thisArray
}

//them vào 1 vị trí bất kì
function them(index, value, thisArray){
	thisArray.splice(index,0,value);        //bắt đầu từ vị trí index, không xóa phần tử nào, chèn value vào bắt đầu từ vị trí index
    return thisArray
}


// lấy Element
var btn_cre = document.querySelector(".btn_cre")
var btn_sub = document.querySelector(".btn_sub")
var show_array = document.querySelector(".show_array")
var result = document.querySelector(".result")
var sort_to_max = document.getElementById("sort_to_max")
var sort_to_min = document.getElementById("sort_to_min")
var thisArray = new Array;


//bắt sự kiện click nút tạo mảng
btn_cre.addEventListener("click", function(){
    thisArray.length = Math.floor(Math.random()*11) + 10
    for(let i = 0; i<thisArray.length; i++){
        thisArray[i] = Math.floor(Math.random()*91) + 10
    }
    show_array.textContent = thisArray
})

// bắt sự kiện thay đổi audio
sort_to_max.addEventListener("change",function(){
    if(thisArray.length == 0){
        result.textContent = "Bạn cần tạo mảng trc khi sắp xếp"
    }
    else{
        result.textContent = tangDan(thisArray)
    }
    result.style.color = "rgb(240, 115, 26)"
})

// bắt sự kiện thay đổi audio
sort_to_min.addEventListener("change",function(){
    if(thisArray.length == 0){
        result.textContent = "Bạn cần tạo mảng trc khi sắp xếp"
    }
    else{
        result.textContent = giamDan(thisArray)
    }
    result.style.color = "rgb(240, 115, 26)"
})



// bắt sự kiện thêm phần tử vào vị trí bất kì trong mảng
btn_sub.addEventListener("click",function(){
    let index = document.querySelector(".index_add").value
    let value = document.querySelector(".value_add").value

    if(index !="" && value !=""){
        show_array.textContent = them(index,value,thisArray)
    }
})