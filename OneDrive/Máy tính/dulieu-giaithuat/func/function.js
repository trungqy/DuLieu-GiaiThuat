/**
 * 1. Viết hàm tính chu vi hình chữ nhật
2. Viết hàm tính diện tích hình chữ nhật  
3. Viết hàm xuất ra n số lẻ nhỏ nhất 
4. Viết hàm xuất ra n số lẻ gần nhất bắt đầu từ m.
5. Viết hàm kiểm tra một số có phải là số nguyên tố hay không? Biết số nguyên tố là số chia hết cho một và chính nó.
6.  Viết hàm xuất ra n số nguyên tố nhỏ nhất. 
7. Viết hàm trả ra danh sách tất cả số nhỏ hơn n
    - getLessThan(n): number[]
    - Ví dụ getLessThan(3) sẽ trả ra mảng [0,1,2]
8. Viết hàm tìm ra vị trí phần tử đầu tiên nằm trong mảng 
    - find(arr, chuoiCanTim): number
    - Ví dụ find([1,2,3,2,5], 2) sẽ trả ra vi tri 1
9.Viết hàm tìm ra tất cả vị trí phần tử nằm trong mảng
    - filter (arr, chuoiCanTim): number
    - Ví dụ filter([1,2,3,2,5], 2) sẽ trả ra vi tri [1, 3]
10. Định nghĩa một mảng nhân viên gồm 2 thông tin: họ tên, tuổi bao gồm 5 nhân viên
11. Viết hàm sắp xếp tuổi nhân viên giảm dần
    - sortDesc(arr): arr
    - Ví dụ sortDesc([{name: 'hieu', age: 30}, {name:'tuan', age: 40}]) sẽ trả ra kết quả [{name:'tuan', age: 40}, {name: 'hieu', age: 30}]
12. Tìm trong mảng nhân viên có tuổi = x 
    - find(arr, age: number): nhan_vien
    - Ví dụ find([{name: 'hieu', age: 30}, {name:'tuan', age: 40}], 40) => sẽ trả ra kết quả {name:'tuan', age: 40}
 * 
 * 
 */


    //1. Viết hàm tính chu vi hình chữ nhật

const chuViHCN = (a,b) =>{
    return (a+b)*2 
}

console.log("chu vi : "+chuViHCN(2,3));

//2. Viết hàm tính diện tích hình chữ nhật  
const dienTichHCN = (a,b) =>{
    return (a*b)
}

console.log("dien tich : "+dienTichHCN(2,3));


// 3. Viết hàm xuất ra n số lẻ nhỏ nhất 
const listOdd = (n) => {
    let arr = []
    let dem = 0
    for (let i = 1; arr.length < n; i++) {
        if (i % 2 != 0) {
            dem++
            arr.push(i)
            if (dem == n) {
                break
            }
        }
    }
    return arr
}
console.log(`cac so le gan nhat la:`, listOdd(10));


//4. Viết hàm xuất ra n số lẻ gần nhất bắt đầu từ m.
const listOddAb = (m, n) => {
    let arr = []
    for (let i = m; arr.length < n; i++) {
        if (i % 2 != 0) {
            arr.push(i)
        }
    }
    return arr
}
console.log(`3 so le tu 10 la:  `, listOddAb(10, 3));

// 5Viết hàm kiểm tra một số có phải là số nguyên tố hay không? Biết số nguyên tố là số chia hết cho một và chính nó.
const isPrime = (n) => {
    let dem = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i == 0 && n >= 2) {
            dem++;
        }
    }
    if (dem == 2) {
        return true;
    } else {
        return false;
    }
}
console.log(isPrime(3));

//6.  Viết hàm xuất ra n số nguyên tố nhỏ nhất. 

const isPrimeMin = (n) => {
    let arr = []
    let i = 0;
    while (arr.length < n) {
        if (isPrime(i)) {
            arr.push(i)
        }
        i++;
    }
    return arr
}
console.log(`10 so nguyen to  nn la: `, isPrimeMin(10));


// 7. Viết hàm trả ra danh sách tất cả số nhỏ hơn n

const soNhoHonN = (n)=>{
    let arr=[]
    for (let i = 0 ; i < n; i++){
        arr.push(i)
    }
    return arr
}
console.log(soNhoHonN(4));

// 8 Viết hàm tìm ra vị trí phần tử đầu tiên nằm trong mảng 

const findFirst = (arr, chuoiCanTim) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == chuoiCanTim) {
            return i 
        }
    }
}
console.log('tim vi tri dau tien:', findFirst(["bóng chuyền", "bóng rổ", "bóng đá"], 'bóng chuyền'));

//9.Viết hàm tìm ra tất cả vị trí phần tử nằm trong mảng
const find = (arr, chuoiCanTim) => {
    let temp = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == chuoiCanTim) {
            temp.push(i)
        }
    }
    return temp
}
console.log('tim tat ca:', find([1,2,5,3,1], 1))


//10 định nghĩa 1 mảng 
const nhanVien = [
    {name: 'hieu', age: 30}, 
    {name:'tuan', age: 40},
    {name:'quang', age: 21},
    {name:'quy', age: 20},
    {name:'bang', age: 19}

]


//11 sắp xếp tuổi giảm dầN

const sapXepGiamDanTheoTuoi = (mang) => {
    let tam
    for (let i = 0; i < mang.length; i++) {
        for (let j = i + 1; j < mang.length; j++) {
            if (mang[i].age < mang[j].age) {
                tam = mang[i]
                mang[i] = mang[j]
                mang[j] = tam
            }
        }
    }
    return mang
}
console.log(`sap xep giam dan theo tuoi:`, sapXepGiamDanTheoTuoi(nhanVien));

// 12. Tìm trong mảng nhân viên có tuổi = x 
// - find(arr, age: number): nhan_vien
// - Ví dụ find([{name: 'hieu', age: 30}, {name:'tuan', age: 40}], 40) => sẽ trả ra kết quả {name:'tuan', age: 40}


  const timTheoTuoi = (mang,tuoi) => {
    let temp = []
    for (let i = 0; i < mang.length; i++) {
        if (mang[i].age == tuoi ) {
            temp.push(mang[i])
        }
    }
    return temp
}
console.log(`tim nhan vien`, timTheoTuoi(nhanVien ,40));