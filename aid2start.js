    // ②「このページで回復・補給を実行」ボタンの動作
    document.getElementById("tantora-heal-btn").onclick = function() {
        var count = 0;
        // ボタンや入力フォーム、または特定のリンクに絞る
        var elements = document.querySelectorAll('button, input[type="submit"], input[type="button"], a');
        
        for (var i = 0; i < elements.length; i++) {
            var text = elements[i].innerText || elements[i].value || '';
            // ステータス表示の誤爆を防ぐため、具体的なアクションワードに限定する
            if (text && (text.includes('回復する') || text.includes('アイテムを使う') || text.includes('補給する') || text.includes('気合回復') || text.includes('体力回復') || text.includes('HP回復'))) {
                elements[i].click();
                count++;
            }
        }

        if (count > 0) {
            alert(count + '個の回復・補給ボタンを実行しました！');
        } else {
            alert('このページに対象の回復ボタンが見つかりませんでした。ボタンの文字を確認してください。');
        }
    };
