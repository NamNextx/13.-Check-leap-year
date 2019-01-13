/*
Cách xác định năm nhuận: Những năm chia hết cho 4 là năm nhuận, ngoại trừ những năm chia hết cho 100 mà không chia hết cho 400.

Từ đó, có thể rút gọn thành các quy tắc xác định năm nhuận:

- Những năm chia hết cho 4 mà không chia hết cho 100 là năm nhuận

- Những năm chia hết cho 100 mà không chia hết cho 400 thì KHÔNG PHẢI là năm nhuận

-Những năm chia hết đồng thời cho 100 và 400 là năm nhuận*/


function changer() {

    year=parseInt(document.getElementById('idtext').value);
    if (!Number.isNaN(year)){
        var flag=false;
        var checkyear4= year % 4 == 0;
        if(checkyear4) {
            var checkyear100 = year % 100 == 0;
            if (checkyear100) {
                checkyear400 = year % 400 == 0;
                if (checkyear400) {
                    flag = true;
                } else flag = false;
            }
            else flag=true;
        }

        if(flag) {nhuộn
            alert("Năm bạn vừa nhập là năm nhuon")
        }
        else alert("Năm bạn vừa nhập không phải năm nhuộn ")

    }
    else alert("Can nhap dung dinh dang")



        }