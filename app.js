const modules = [
  {
    id: "A",
    title: "Nền tảng Toán học & Tư duy Định lượng",
    accent: "badge-a",
    summary:
      "Xác suất, Bayes, thống kê, dataset imbalance, confusion matrix, ma trận và đạo hàm/gradient.",
    tags: ["Probability", "Bayes", "Metrics", "Matrix", "Calculus"],
  },
  {
    id: "B",
    title: "Kỹ thuật Lập trình & Xử lý Dữ liệu",
    accent: "badge-b",
    summary:
      "Python cơ bản, cấu trúc dữ liệu, NumPy, pandas, làm sạch dữ liệu và pipeline code.",
    tags: ["Python", "pandas", "NumPy", "Data cleaning", "Debug"],
  },
  {
    id: "C",
    title: "Kiến thức AI & Tư duy Sản phẩm AI",
    accent: "badge-c",
    summary:
      "Machine Learning, Deep Learning, overfitting, evaluation, Transformer, AI agent và product framing.",
    tags: ["ML", "DL", "Transformer", "Product", "Agent"],
  },
  {
    id: "D",
    title: "Tư duy Logic, Đạo đức & Hành vi",
    accent: "badge-d",
    summary:
      "Logic, đọc đề, lập luận, bias/fairness, privacy, trách nhiệm AI và câu tự luận ngắn.",
    tags: ["Logic", "Ethics", "Fairness", "Privacy", "Scenario"],
  },
];

const examBlueprint = {
  title: "Blueprint ôn thi bám nguồn công khai",
  note:
    "Bạn dự tính thi khóa 3. VinUni công khai mô tả vòng đánh giá đầu vào gồm tư duy logic, lập trình và dữ liệu cơ bản, xử lý tình huống thực tiễn. Ảnh review bạn gửi bổ sung khả năng có toán định lượng, đọc code Python và tự luận ngắn.",
  warning:
    "Không có nguồn chính thức công bố đề chi tiết từng câu, nên app này không cam kết đậu 100%. Mục tiêu là che phủ kiến thức nền và luyện đúng kiểu tư duy.",
  items: [
    {
      id: "A",
      name: "Toán & định lượng",
      detail:
        "Xác suất, Bayes, thống kê, kỳ vọng, ma trận, đạo hàm, tích vô hướng, sin/cos, confusion matrix.",
    },
    {
      id: "B",
      name: "Lập trình & dữ liệu",
      detail:
        "Python, đọc code, pandas/NumPy, làm sạch dữ liệu, feature engineering, split dữ liệu, tránh leakage.",
    },
    {
      id: "C",
      name: "AI & sản phẩm",
      detail:
        "ML/DL nền tảng, model cổ điển, overfit/underfit, metrics, Transformer, AI agent/RAG, MVP sản phẩm AI.",
    },
    {
      id: "D",
      name: "Logic & đạo đức",
      detail:
        "Logic mệnh đề, điều kiện cần/đủ, fairness, privacy, bảo mật, human oversight, tự luận tình huống.",
    },
  ],
};

const lessons = [
  {
    id: "probability-basics",
    module: "A",
    title: "Xác suất cơ bản: biến cố, phần bù, độc lập",
    summary: "Nền tảng cho Bayes, metrics và mọi câu định lượng về dữ liệu.",
    concepts: [
      "Không gian mẫu là tập tất cả kết quả có thể xảy ra; biến cố là một tập con của không gian mẫu.",
      "P(A^c) = 1 - P(A). Phần bù rất hay dùng khi đề hỏi 'ít nhất một', 'không xảy ra', 'sai phân loại'.",
      "A và B độc lập khi P(A ∩ B) = P(A)P(B). Độc lập khác với loại trừ nhau.",
      "Xác suất có điều kiện: P(A | B) = P(A ∩ B) / P(B), với P(B) > 0.",
    ],
    formula: "P(A ∪ B) = P(A) + P(B) - P(A ∩ B). Nếu A, B loại trừ nhau thì P(A ∩ B) = 0.",
    trap:
      "Hai biến cố loại trừ nhau thường không độc lập, trừ khi một biến cố có xác suất bằng 0. Đề thi rất thích gài chỗ này.",
    example:
      "Nếu 2% email là spam và bộ lọc bắt đúng 95% spam, đừng vội nói email bị gắn spam chắc chắn là spam; cần biết thêm false positive.",
    practice:
      "Một hệ thống có 3% lỗi. Nếu kiểm tra 5 sản phẩm độc lập, xác suất có ít nhất một sản phẩm lỗi là 1 - 0.97^5.",
  },
  {
    id: "bayes",
    module: "A",
    title: "Định lý Bayes và cách dùng trong phân loại",
    summary: "Từ test y tế đến spam filter: update niềm tin khi có bằng chứng mới.",
    concepts: [
      "Bayes đảo chiều điều kiện: từ P(B | A) suy ra P(A | B) nếu biết prior P(A) và evidence P(B).",
      "Trong ML, Naive Bayes dùng giả định đơn giản: các feature độc lập có điều kiện theo class.",
      "Base rate rất quan trọng. Khi class hiếm, precision có thể thấp dù recall/sensitivity cao.",
      "Bayes giúp trả lời 'khi model báo positive thì xác suất thật sự positive là bao nhiêu?'.",
    ],
    formula: "P(A | B) = P(B | A)P(A) / P(B), trong đó P(B) = P(B | A)P(A) + P(B | not A)P(not A).",
    trap:
      "Không nhầm P(dương tính | có bệnh) với P(có bệnh | dương tính). Câu sau cần prior.",
    example:
      "Bệnh hiếm 1%, test recall 99%, false positive 5%. Khi dương tính: 0.99*0.01 / (0.99*0.01 + 0.05*0.99) ≈ 16.7%.",
    practice:
      "Tự tính lại ví dụ khi false positive giảm còn 1%. Precision tăng rất mạnh, đó là tác động của specificity.",
    code: String.raw`def bayes(prior, sensitivity, false_positive):
    numerator = sensitivity * prior
    evidence = numerator + false_positive * (1 - prior)
    return numerator / evidence

print(round(bayes(0.01, 0.99, 0.05), 3))  # 0.167`,
  },
  {
    id: "stats-expectation",
    module: "A",
    title: "Thống kê, kỳ vọng và độ phân tán",
    summary: "Mean, median, variance, standard deviation và cách đọc phân phối dữ liệu.",
    concepts: [
      "Mean nhạy với outlier; median bền hơn khi dữ liệu lệch.",
      "Variance đo độ phân tán bình phương quanh mean; standard deviation cùng đơn vị với dữ liệu gốc.",
      "Kỳ vọng E[X] là trung bình có trọng số theo xác suất.",
      "Trong dữ liệu thực tế, hãy nhìn cả trung tâm lẫn độ phân tán, không chỉ một con số trung bình.",
    ],
    formula: "Var(X) = E[(X - E[X])^2] = E[X^2] - E[X]^2.",
    trap:
      "Accuracy cao không đồng nghĩa model tốt nếu dataset lệch lớp. Đây là bẫy kinh điển của phần thống kê & metrics.",
    example:
      "Dataset 99% giao dịch bình thường, 1% gian lận. Model luôn đoán bình thường đạt 99% accuracy nhưng recall gian lận bằng 0.",
    practice:
      "Cho [1, 2, 2, 3, 100], mean bị kéo lên 21.6 còn median là 2. Đề hỏi đại lượng nào đại diện tốt hơn thì chọn median.",
    code: String.raw`import pandas as pd

s = pd.Series([1, 2, 2, 3, 100])
print(s.mean(), s.median(), s.std())`,
  },
  {
    id: "confusion-matrix",
    module: "A",
    title: "Confusion Matrix: TP, FP, TN, FN",
    summary: "Nắm ma trận nhầm lẫn để suy ra accuracy, precision, recall, F1.",
    concepts: [
      "TP: đoán positive và đúng. TN: đoán negative và đúng.",
      "FP: đoán positive nhưng sai. FN: đoán negative nhưng sai.",
      "Precision trả lời: trong những ca model báo positive, bao nhiêu ca thật sự positive?",
      "Recall trả lời: trong những ca positive thật, model bắt được bao nhiêu ca?",
    ],
    formula:
      "Accuracy = (TP + TN) / total. Precision = TP / (TP + FP). Recall = TP / (TP + FN). F1 = 2PR / (P + R).",
    trap:
      "Với bài toán y tế/gian lận/an toàn, FN thường đắt hơn FP. Không chọn metric theo thói quen.",
    example:
      "Spam filter cần precision cao để không đẩy email thật vào spam; fraud detection thường cần recall cao để ít bỏ sót gian lận.",
    practice:
      "TP=40, FP=10, FN=20, TN=930. Precision=0.8, Recall≈0.667, F1≈0.727, Accuracy=0.97.",
    code: String.raw`from sklearn.metrics import confusion_matrix, classification_report

y_true = [1, 0, 1, 1, 0, 0]
y_pred = [1, 0, 0, 1, 1, 0]
print(confusion_matrix(y_true, y_pred))
print(classification_report(y_true, y_pred))`,
  },
  {
    id: "matrix-calculus",
    module: "A",
    title: "Ma trận, vector và gradient trong ML",
    summary: "Ý nghĩa input/output layer, phép nhân ma trận và ràng buộc kích thước.",
    concepts: [
      "Vector là một hàng/cột số; ma trận là bảng số 2D. Dataset thường có shape (n_samples, n_features).",
      "Nhân ma trận AB hợp lệ khi số cột của A bằng số hàng của B.",
      "Transpose đổi hàng thành cột, rất hay gặp trong dot product và layer tuyến tính.",
      "Gradient là vector đạo hàm riêng, chỉ hướng tăng nhanh nhất của loss; optimizer đi ngược gradient để giảm loss.",
    ],
    formula:
      "Nếu X có shape (m, n) và W có shape (n, k), output XW có shape (m, k). Linear layer: y = XW + b.",
    trap:
      "Sai shape là lỗi phổ biến nhất khi đọc code NumPy/PyTorch. Luôn ghi shape cạnh biến.",
    example:
      "Ảnh 28x28 flatten thành 784 feature. Với 10 lớp chữ số, W thường có shape (784, 10).",
    practice:
      "A shape (5, 3), B shape (3, 2) thì AB shape (5, 2). BA không hợp lệ vì 2 khác 5.",
    code: String.raw`import numpy as np

X = np.array([[1, 2, 3], [4, 5, 6]])  # shape (2, 3)
W = np.array([[0.1, 0.2], [0.3, 0.4], [0.5, 0.6]])  # shape (3, 2)
print(X @ W)  # shape (2, 2)`,
  },
  {
    id: "calculus-dot-trig",
    module: "A",
    title: "Đạo hàm, tích phân, tích vô hướng và sin/cos",
    summary: "Bộ công cụ toán nền để đọc gradient, loss curve và câu hỏi hình học vector.",
    concepts: [
      "Đạo hàm đo tốc độ thay đổi tức thời. Trong ML, đạo hàm của loss theo weight cho biết nên chỉnh weight hướng nào.",
      "Tích phân có thể hiểu là diện tích/tổng liên tục; trong xác suất liên tục, tổng xác suất dưới density bằng 1.",
      "Tích vô hướng a·b = ||a||||b||cos(theta), đo mức cùng hướng giữa hai vector.",
      "Cosine similarity dùng tích vô hướng chuẩn hóa để đo độ giống nhau của embedding/vector văn bản.",
      "sin/cos thường xuất hiện trong hình học, chu kỳ hoặc positional encoding ý tưởng trong Transformer.",
    ],
    formula:
      "d(x^n)/dx = n*x^(n-1). d(sin x)/dx = cos x. d(cos x)/dx = -sin x. a·b = sum(a_i*b_i).",
    trap:
      "Tích vô hướng bằng 0 nghĩa là hai vector vuông góc, không phải hai vector bằng 0.",
    example:
      "Nếu embedding câu hỏi và embedding tài liệu có cosine similarity cao, retrieval sẽ ưu tiên tài liệu đó cho chatbot/RAG.",
    practice:
      "a=[1,2], b=[2,1]. a·b=4. ||a||=sqrt(5), ||b||=sqrt(5), cosine=4/5=0.8.",
    code: String.raw`import numpy as np

a = np.array([1, 2])
b = np.array([2, 1])
dot = a @ b
cosine = dot / (np.linalg.norm(a) * np.linalg.norm(b))
print(dot, round(cosine, 2))  # 4 0.8`,
  },
  {
    id: "python-core",
    module: "B",
    title: "Python core: biến, list, dict, function",
    summary: "Phần code đọc kết quả thường xoay quanh cấu trúc dữ liệu và control flow.",
    concepts: [
      "List giữ thứ tự và mutable; tuple giữ thứ tự nhưng immutable; dict map key-value; set loại trùng.",
      "List comprehension giúp viết biến đổi dữ liệu ngắn gọn nhưng cần đọc điều kiện cẩn thận.",
      "Function nên nhận input rõ ràng, trả output rõ ràng, tránh phụ thuộc biến global khi không cần.",
      "Khi đọc code, hãy trace từng vòng lặp với một bảng nhỏ: index, value, biến tích lũy.",
    ],
    formula: "Pattern hay gặp: [transform(x) for x in items if condition(x)].",
    trap:
      "Mutable default argument như def f(x=[]): có thể giữ trạng thái giữa các lần gọi. Dùng None rồi khởi tạo trong hàm.",
    example:
      "Counter bằng dict: nếu key chưa có thì gán 0, sau đó cộng 1. Đây là bài đọc code rất hay gặp.",
    practice:
      "Viết hàm nhận list số và trả dict {'mean': ..., 'max': ..., 'min': ...}.",
    code: String.raw`def summarize(values):
    return {
        "mean": sum(values) / len(values),
        "max": max(values),
        "min": min(values),
    }

print(summarize([3, 5, 10]))`,
  },
  {
    id: "read-code-debug",
    module: "B",
    title: "Đọc code, debug và độ phức tạp cơ bản",
    summary: "Dạng review nói có bài đọc code Python viết kết quả, nên cần luyện trace thật kỹ.",
    concepts: [
      "Đọc code theo thứ tự thực thi, không đọc theo cảm giác. Ghi lại giá trị biến sau mỗi vòng lặp quan trọng.",
      "Loop lồng nhau thường O(n^2); một loop qua list thường O(n); truy cập dict/set trung bình O(1).",
      "Bug phổ biến: off-by-one, nhầm = với ==, sửa list khi đang loop, shadow tên biến, mutable default argument.",
      "Khi gặp recursion, xác định base case và công thức gọi lại. Nếu thiếu base case dễ đệ quy vô hạn.",
    ],
    formula: "Trace table: bước -> input hiện tại -> biến tạm -> output/tích lũy.",
    trap:
      "Đề có thể hỏi output của code có exception. Đừng chỉ tính kết quả nếu code thật ra lỗi index/key/type.",
    example:
      "for i in range(3): s += i cho i = 0,1,2, không có i=3. Output cuối s = 3 nếu s ban đầu bằng 0.",
    practice:
      "Trace hàm đếm tần suất token bằng dict, rồi giải thích vì sao dùng dict nhanh hơn list search.",
    code: String.raw`def count_words(words):
    counts = {}
    for word in words:
        counts[word] = counts.get(word, 0) + 1
    return counts

print(count_words(["ai", "data", "ai"]))  # {'ai': 2, 'data': 1}`,
  },
  {
    id: "hand-code-pseudocode",
    module: "B",
    title: "Code tay / pseudo-code trong đề full",
    summary: "Bộ đề tham khảo có dạng code tay, nên cần biết viết lời giải rõ dù không chạy code.",
    concepts: [
      "Câu code tay không cần viết dài; cần đúng input, output, edge case và thuật toán chính.",
      "Với Python cơ bản, luôn xử lý list rỗng, key chưa tồn tại, chia cho 0 và kiểu dữ liệu bất thường nếu đề gợi ý.",
      "Với pandas, trình bày pipeline theo thứ tự: tạo feature, filter, groupby/agg, sort, lấy output.",
      "Pseudo-code tốt có tên biến rõ, không phụ thuộc thư viện lạ và giải thích được độ phức tạp nếu cần.",
      "Khi tự luận code, hãy ghi cả giả định: dữ liệu đã sạch chưa, cột nào tồn tại, missing xử lý thế nào.",
    ],
    formula:
      "Khung trả lời: input -> edge cases -> steps/pseudo-code -> output -> complexity hoặc leakage note.",
    trap:
      "Viết code đẹp nhưng quên edge case thường mất điểm. Ví dụ tính mean list rỗng sẽ chia cho 0.",
    example:
      "Đếm tần suất: dùng dict.get(x,0)+1. pandas ratio: df['ppm2']=df['price']/df['area']; groupby district median.",
    practice:
      "Viết pseudo-code tính top 3 quận có median price_per_m2 cao nhất, bỏ dòng area <= 0.",
    code: String.raw`def top_counts(items, k=3):
    counts = {}
    for item in items:
        counts[item] = counts.get(item, 0) + 1
    return sorted(counts.items(), key=lambda pair: pair[1], reverse=True)[:k]`,
  },
  {
    id: "numpy-pandas",
    module: "B",
    title: "NumPy và pandas cho xử lý dữ liệu",
    summary: "Đọc CSV, chọn cột, lọc dòng, groupby, fillna và tạo feature.",
    concepts: [
      "NumPy mạnh cho array số và phép toán vector hóa; pandas mạnh cho bảng dữ liệu có cột/tên/kiểu.",
      "df.info(), df.describe(), df.isna().sum() là bộ ba khám dữ liệu nhanh.",
      "loc dùng nhãn, iloc dùng vị trí. Lọc dòng bằng mask boolean.",
      "groupby thường đi với agg để tính mean, count, sum theo nhóm.",
    ],
    formula:
      "Pipeline tối thiểu: read_csv -> inspect -> clean missing/outlier -> engineer features -> split train/test -> train/evaluate.",
    trap:
      "Đừng fit scaler/imputer trên cả train và test. Fit trên train, transform test để tránh data leakage.",
    example:
      "df.groupby('city')['price'].mean() cho giá nhà trung bình theo thành phố.",
    practice:
      "Tạo cột price_per_m2 = price / area, rồi groupby district để tìm median.",
    code: String.raw`import pandas as pd

df = pd.DataFrame({
    "district": ["A", "A", "B"],
    "price": [100, 120, 80],
    "area": [50, 60, 40],
})
df["price_per_m2"] = df["price"] / df["area"]
print(df.groupby("district")["price_per_m2"].median())`,
  },
  {
    id: "numpy-deep",
    module: "B",
    title: "NumPy chi tiết: array, shape, broadcasting, vectorization",
    summary: "NumPy là nền móng tính toán số cho pandas, scikit-learn, TensorFlow và PyTorch.",
    concepts: [
      "ndarray là mảng N chiều cùng kiểu dữ liệu. Shape cho biết kích thước từng chiều, ví dụ (100, 20) là 100 mẫu, 20 feature.",
      "Vectorization nghĩa là dùng phép toán trên cả mảng thay vì loop Python; thường nhanh hơn vì phần nặng chạy bằng C.",
      "Broadcasting cho phép cộng/nhân array khác shape nếu các chiều tương thích: bằng nhau hoặc một chiều bằng 1.",
      "axis=0 thường tính theo cột, axis=1 thường tính theo hàng trong ma trận 2D.",
      "reshape đổi cách nhìn dữ liệu nhưng tổng số phần tử phải giữ nguyên; -1 cho NumPy tự suy ra chiều còn lại.",
    ],
    formula:
      "Broadcast rule đọc từ phải sang trái: hai chiều hợp lệ nếu bằng nhau hoặc một trong hai bằng 1. Ví dụ (3,4) + (4,) -> (3,4).",
    trap:
      "np.array([1,2,3]) * 2 là nhân từng phần tử, không phải nhân vector theo đại số tuyến tính. Dot product dùng @ hoặc np.dot.",
    example:
      "Chuẩn hóa feature: X_scaled = (X - X.mean(axis=0)) / X.std(axis=0). Mean/std shape (n_features,) được broadcast cho mọi dòng.",
    practice:
      "Cho X shape (5,3), mean = X.mean(axis=0) có shape (3,), X - mean vẫn hợp lệ nhờ broadcasting.",
    code: String.raw`import numpy as np

X = np.array([[1, 10], [2, 20], [3, 30]])
mean = X.mean(axis=0)
std = X.std(axis=0)
X_scaled = (X - mean) / std
print(mean, X_scaled.round(2))`,
  },
  {
    id: "pandas-indexing",
    module: "B",
    title: "pandas chi tiết: Series, DataFrame, loc/iloc, filter, sort",
    summary: "Đây là phần dễ ra dạng đọc code: chọn cột, lọc dòng, tạo cột mới và sort kết quả.",
    concepts: [
      "Series là một cột có index; DataFrame là bảng nhiều cột, mỗi cột có thể có kiểu dữ liệu khác nhau.",
      "df['col'] trả Series; df[['a','b']] trả DataFrame. Dấu ngoặc đôi rất quan trọng khi chọn nhiều cột.",
      "loc dùng nhãn index/cột; iloc dùng vị trí số nguyên. df.loc[mask, ['a','b']] là pattern lọc và chọn cột sạch.",
      "Boolean mask là Series True/False cùng index với DataFrame, ví dụ df['score'] >= 8.",
      "sort_values sắp xếp theo cột; ascending=False để giảm dần; reset_index(drop=True) để đánh lại index.",
    ],
    formula:
      "Pattern thi hay gặp: df.loc[(df['age'] >= 18) & (df['score'] > 7), ['name', 'score']].sort_values('score', ascending=False).",
    trap:
      "Trong pandas phải dùng & và | cho mask, mỗi điều kiện đặt trong ngoặc. Không dùng and/or như boolean Python thường.",
    example:
      "Lọc ứng viên có Python >= 7 và SQL >= 6, rồi sort theo điểm tổng để lấy top 10.",
    practice:
      "Viết một dòng lọc district='A', price_per_m2 > 2, sort giảm theo area.",
    code: String.raw`import pandas as pd

df = pd.DataFrame({
    "name": ["An", "Binh", "Chi"],
    "python": [8, 6, 9],
    "sql": [7, 8, 5],
})
df["total"] = df["python"] + df["sql"]
top = df.loc[(df["python"] >= 7) & (df["sql"] >= 6), ["name", "total"]]
print(top.sort_values("total", ascending=False))`,
  },
  {
    id: "pandas-groupby-merge",
    module: "B",
    title: "pandas chi tiết: groupby, agg, merge, pivot và leakage",
    summary: "Tư duy bảng dữ liệu thực chiến: grain, join key, aggregation và tránh nhân bản dòng.",
    concepts: [
      "groupby chia bảng thành nhóm, áp dụng thống kê, rồi ghép kết quả lại. Đây là split-apply-combine.",
      "agg cho phép đặt tên metric: mean_price=('price','mean'), orders=('order_id','count').",
      "merge nối bảng theo key. how='left' giữ toàn bộ bảng trái; how='inner' chỉ giữ dòng khớp cả hai bên.",
      "pivot_table giúp tạo bảng tổng hợp hai chiều, ví dụ doanh thu theo tháng và thành phố.",
      "Trước khi merge/groupby, luôn hỏi grain của mỗi dòng là gì: user, order, product hay ngày?",
    ],
    formula:
      "Safe merge checklist: key có unique không -> join type -> số dòng trước/sau -> missing sau join -> duplicate do one-to-many.",
    trap:
      "Nếu tính feature tổng chi tiêu cả năm để dự đoán churn tháng 6, bạn đã dùng dữ liệu tương lai sau tháng 6 và gây leakage.",
    example:
      "Tạo feature total_spend_30d bằng cách chỉ dùng giao dịch trước thời điểm dự đoán, không dùng giao dịch sau label date.",
    practice:
      "Giải thích vì sao orders.merge(users) rồi df['user_id'].count() không phải số user duy nhất.",
    code: String.raw`orders = pd.DataFrame({
    "user_id": [1, 1, 2, 3],
    "amount": [100, 50, 80, 120],
    "month": ["Jan", "Jan", "Feb", "Feb"],
})
summary = orders.groupby("user_id").agg(
    total_spend=("amount", "sum"),
    order_count=("amount", "count"),
)
print(summary)`,
  },
  {
    id: "eda-visualization",
    module: "B",
    title: "EDA và trực quan hóa dữ liệu",
    summary: "Biết nhìn dữ liệu trước khi train model: phân phối, missing, outlier, tương quan.",
    concepts: [
      "EDA là exploratory data analysis: kiểm tra shape, kiểu dữ liệu, missing, phân phối target và quan hệ feature-target.",
      "Histogram giúp thấy phân phối; boxplot giúp thấy median/IQR/outlier; scatterplot giúp thấy quan hệ hai biến.",
      "Correlation cao không đồng nghĩa nhân quả, nhưng giúp phát hiện feature dư thừa hoặc leakage đáng ngờ.",
      "Với classification, luôn xem tỉ lệ class trước khi chọn metric và split.",
    ],
    formula:
      "Checklist EDA: df.shape -> df.info() -> missing -> describe -> target distribution -> outlier -> correlation -> leakage check.",
    trap:
      "Không vẽ/nhìn phân phối target có thể khiến bạn dùng accuracy cho dataset lệch nặng.",
    example:
      "Nếu cột total_paid xuất hiện trong dữ liệu trước khi dự đoán default, nó có thể là thông tin tương lai và gây leakage.",
    practice:
      "Cho bảng churn, hãy kiểm tra tỉ lệ churn, missing theo cột, và spend distribution theo nhóm churn/non-churn.",
    code: String.raw`import pandas as pd
import matplotlib.pyplot as plt

print(df.shape)
print(df.isna().sum().sort_values(ascending=False))
print(df["target"].value_counts(normalize=True))
df["amount"].hist(bins=30)
plt.show()`,
  },
  {
    id: "data-cleaning",
    module: "B",
    title: "Làm sạch dữ liệu và feature engineering",
    summary: "Thi vào AI thực chiến hay kiểm tra cách xử lý dữ liệu bẩn, thiếu, lệch.",
    concepts: [
      "Missing values: xóa, fill bằng mean/median/mode, hoặc tạo feature đánh dấu missing.",
      "Outlier: kiểm tra bằng domain knowledge, IQR, z-score; không xóa máy móc nếu outlier là tín hiệu quan trọng.",
      "Categorical encoding: one-hot cho biến ít nhóm; target/ordinal encoding cần cẩn thận leakage.",
      "Feature engineering biến dữ liệu thô thành tín hiệu học được: ratio, bucket, date parts, text length.",
    ],
    formula: "IQR rule: outlier nếu x < Q1 - 1.5*IQR hoặc x > Q3 + 1.5*IQR.",
    trap:
      "Dữ liệu test giả lập tương lai. Mọi quyết định học từ dữ liệu phải học trên train trước.",
    example:
      "Dự đoán churn: tenure_days, monthly_spend, tickets_last_30d có thể mạnh hơn cột ngày raw.",
    practice:
      "Cho cột age thiếu 8%, income thiếu 35%. Bạn sẽ fill, drop hay tạo flag? Giải thích theo rủi ro.",
    code: String.raw`from sklearn.compose import ColumnTransformer
from sklearn.impute import SimpleImputer
from sklearn.preprocessing import OneHotEncoder, StandardScaler

preprocess = ColumnTransformer([
    ("num", SimpleImputer(strategy="median"), ["age", "income"]),
    ("cat", OneHotEncoder(handle_unknown="ignore"), ["city"]),
])`,
  },
  {
    id: "sql-data-joins",
    module: "B",
    title: "SQL/data join và tư duy bảng",
    summary: "Nhiều bài dữ liệu thực chiến yêu cầu hiểu join, khóa, duplicate và aggregation.",
    concepts: [
      "Primary key định danh bản ghi; foreign key nối sang bảng khác. Join sai khóa có thể nhân bản dòng và làm sai metric.",
      "INNER JOIN giữ bản ghi khớp ở cả hai bảng; LEFT JOIN giữ toàn bộ bảng trái và điền null nếu không khớp.",
      "Aggregation theo group cần kiểm tra grain: mỗi dòng là giao dịch, người dùng hay ngày?",
      "Trong pandas, merge tương đương join; groupby tương đương GROUP BY trong SQL.",
    ],
    formula:
      "SQL pattern: SELECT key, AVG(metric) FROM table GROUP BY key HAVING COUNT(*) >= n ORDER BY metric DESC.",
    trap:
      "Join bảng user với bảng transaction rồi tính số user mà không distinct có thể đếm trùng theo số giao dịch.",
    example:
      "Muốn tính spend trung bình mỗi user: group transaction theo user trước, rồi mới lấy mean theo user.",
    practice:
      "Giải thích khác nhau giữa số giao dịch trung bình và số tiền trung bình trên mỗi người dùng.",
    code: String.raw`orders = orders.merge(users[["user_id", "city"]], on="user_id", how="left")
user_spend = orders.groupby("user_id")["amount"].sum()
print(user_spend.mean())`,
  },
  {
    id: "ml-types",
    module: "C",
    title: "Machine Learning: supervised, unsupervised, reinforcement",
    summary: "Phân loại bài toán trước khi chọn model.",
    concepts: [
      "Supervised learning học từ cặp input-output có nhãn: phân loại spam, dự đoán giá nhà.",
      "Unsupervised learning tìm pattern không có nhãn: clustering khách hàng, PCA giảm chiều.",
      "Reinforcement learning học bằng reward/penalty qua tương tác với môi trường: game, robot, tối ưu chiến lược.",
      "Chọn model bắt đầu từ bài toán, dữ liệu, metric và ràng buộc triển khai, không bắt đầu từ tên thuật toán.",
    ],
    formula:
      "Supervised: minimize loss(y_true, f(X)). Unsupervised: discover structure in X. RL: maximize expected cumulative reward.",
    trap:
      "Linear Regression là regression, Logistic Regression là classification dù tên có chữ regression.",
    example:
      "Dự đoán email spam là classification; dự đoán giá nhà là regression; phân nhóm người dùng là clustering.",
    practice:
      "Phân loại 5 bài toán thành supervised/unsupervised/RL rồi nêu metric phù hợp.",
  },
  {
    id: "kmeans-pca",
    module: "C",
    title: "Unsupervised Learning: K-means và PCA",
    summary: "Tìm pattern khi không có nhãn và giảm chiều để nhìn dữ liệu rõ hơn.",
    concepts: [
      "K-means chia dữ liệu thành k cụm bằng cách lặp giữa gán điểm vào centroid gần nhất và cập nhật centroid.",
      "Cần chọn k, scale feature và kiểm tra ý nghĩa cụm bằng domain knowledge.",
      "PCA tìm các trục phương sai lớn nhất để giảm chiều, nén dữ liệu hoặc visualize.",
      "PCA không dùng nhãn y; nếu fit PCA trên toàn bộ dữ liệu trước split thì có thể leakage nhẹ trong pipeline supervised.",
      "Unsupervised không có accuracy trực tiếp như supervised; cần silhouette, inertia, visualization hoặc validation bằng downstream task.",
    ],
    formula:
      "K-means minimize tổng khoảng cách bình phương từ điểm tới centroid. PCA chọn principal components trực giao có variance lớn nhất.",
    trap:
      "K-means nhạy với scale. Nếu income tính triệu còn age tính năm, income có thể áp đảo khoảng cách.",
    example:
      "Phân nhóm người dùng theo tần suất mua và giá trị đơn hàng: dùng StandardScaler trước K-means rồi phân tích từng cụm.",
    practice:
      "Nêu vì sao cần StandardScaler trước K-means và PCA khi feature có đơn vị khác nhau.",
    code: String.raw`from sklearn.preprocessing import StandardScaler
from sklearn.cluster import KMeans
from sklearn.decomposition import PCA

X_scaled = StandardScaler().fit_transform(X)
clusters = KMeans(n_clusters=3, random_state=42, n_init="auto").fit_predict(X_scaled)
X_2d = PCA(n_components=2, random_state=42).fit_transform(X_scaled)`,
  },
  {
    id: "classic-models",
    module: "C",
    title: "Model cổ điển: Linear, Logistic, SVM, Tree, Random Forest",
    summary: "Hiểu ưu/nhược điểm để đọc câu hỏi chọn mô hình.",
    concepts: [
      "Linear Regression dự đoán giá trị liên tục bằng đường/mặt phẳng tuyến tính.",
      "Logistic Regression dự đoán xác suất class bằng sigmoid, mạnh làm baseline classification.",
      "SVM tìm margin lớn nhất giữa các lớp; kernel giúp xử lý ranh giới phi tuyến.",
      "Decision Tree dễ giải thích nhưng dễ overfit; Random Forest giảm variance bằng nhiều cây.",
    ],
    formula: "Logistic: p = 1 / (1 + exp(-(w·x + b))). Linear: y = w·x + b.",
    trap:
      "Cây sâu có thể học thuộc train. Random Forest bền hơn nhưng khó giải thích hơn một cây đơn.",
    example:
      "Nếu cần baseline nhanh, dữ liệu tabular vừa phải: thử Logistic Regression/Random Forest trước khi nghĩ đến deep learning.",
    practice:
      "Cho dữ liệu ít mẫu, nhiều feature, cần interpretability. Bạn chọn model nào làm baseline và vì sao?",
    code: String.raw`from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import f1_score

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, stratify=y, random_state=42
)
model = LogisticRegression(max_iter=1000)
model.fit(X_train, y_train)
pred = model.predict(X_test)
print(f1_score(y_test, pred))`,
  },
  {
    id: "pipeline-overfit",
    module: "C",
    title: "ML pipeline, overfitting và underfitting",
    summary: "Từ dữ liệu đến deploy: biết chỗ nào dễ sai và cách sửa.",
    concepts: [
      "Pipeline chuẩn: thu thập dữ liệu, làm sạch, feature engineering, split, train, evaluate, deploy, monitor.",
      "Underfitting: train và test đều kém, model quá đơn giản hoặc feature yếu.",
      "Overfitting: train tốt nhưng test kém, model học nhiễu hoặc leakage.",
      "Cách xử lý: regularization, cross-validation, thêm dữ liệu, augmentation, giảm độ phức tạp, early stopping.",
    ],
    formula:
      "Bias cao thường dẫn tới underfitting; variance cao thường dẫn tới overfitting. Mục tiêu là cân bằng.",
    trap:
      "Evaluate trên test nhiều lần để chọn model sẽ biến test thành validation trá hình.",
    example:
      "Train accuracy 99%, validation accuracy 70% là dấu hiệu overfit hoặc dữ liệu validation khác phân phối.",
    practice:
      "Nhìn learning curve để kết luận: train loss thấp, val loss tăng sau epoch 8 thì nên early stop hoặc regularize.",
  },
  {
    id: "validation-crossval",
    module: "C",
    title: "Train/validation/test, cross-validation và leakage",
    summary: "Chọn model công bằng và không tự lừa mình bằng điểm số ảo.",
    concepts: [
      "Train dùng để học tham số; validation dùng để chọn model/hyperparameter; test chỉ dùng một lần cuối để ước lượng hiệu năng.",
      "K-fold cross-validation chia train thành k phần, luân phiên train/validate để giảm phụ thuộc vào một split.",
      "Stratified split giữ tỉ lệ class, rất quan trọng khi dữ liệu lệch.",
      "Time-series split không shuffle bừa vì dữ liệu tương lai không được lọt vào quá khứ.",
    ],
    formula:
      "Protocol sạch: split test trước -> fit preprocessing trên train folds -> chọn model bằng validation/CV -> chấm test cuối.",
    trap:
      "Fit PCA/scaler/imputer trước khi split cũng là leakage vì thống kê từ test đã đi vào preprocessing.",
    example:
      "Dữ liệu churn theo tháng nên train các tháng cũ và test tháng mới hơn, không random nếu mục tiêu là dự đoán tương lai.",
    practice:
      "Nêu vì sao stratify=y hữu ích trong train_test_split cho bài fraud 1% positive.",
    code: String.raw`from sklearn.model_selection import StratifiedKFold, cross_val_score
from sklearn.pipeline import Pipeline

pipe = Pipeline([("preprocess", preprocess), ("model", model)])
cv = StratifiedKFold(n_splits=5, shuffle=True, random_state=42)
scores = cross_val_score(pipe, X, y, cv=cv, scoring="f1")
print(scores.mean(), scores.std())`,
  },
  {
    id: "metrics",
    module: "C",
    title: "Metrics: classification và regression",
    summary: "Accuracy, precision/recall/F1, ROC-AUC, MSE/RMSE/MAE.",
    concepts: [
      "Accuracy tốt khi class cân bằng và chi phí lỗi gần nhau.",
      "Precision ưu tiên giảm false positive; recall ưu tiên giảm false negative.",
      "F1 cân bằng precision và recall, phù hợp khi class lệch và cần một số tổng hợp.",
      "ROC-AUC đo khả năng xếp hạng positive cao hơn negative trên nhiều threshold.",
      "Regression: MSE phạt lỗi lớn mạnh hơn MAE; RMSE cùng đơn vị với target.",
    ],
    formula:
      "MSE = mean((y - yhat)^2). RMSE = sqrt(MSE). MAE = mean(abs(y - yhat)).",
    trap:
      "AUC cao không đảm bảo precision tốt ở threshold bạn deploy. Luôn xem threshold và confusion matrix.",
    example:
      "Bài fraud: dùng PR-AUC/F1/recall thay vì chỉ accuracy vì positive rất hiếm.",
    practice:
      "Nếu model y tế bỏ sót bệnh nhân nguy hiểm, metric nào nên được ưu tiên? Recall/sensitivity.",
  },
  {
    id: "deep-learning-core",
    module: "C",
    title: "Deep Learning: neuron, activation, loss, optimizer",
    summary: "Từ y = activation(weight * input + bias) đến Adam optimizer.",
    concepts: [
      "Neural network gồm input layer, hidden layers và output layer; mỗi layer học biểu diễn mới từ dữ liệu.",
      "Activation tạo phi tuyến: ReLU phổ biến cho hidden layer; sigmoid cho binary probability; tanh đưa output về [-1, 1].",
      "Loss đo model sai bao nhiêu: cross entropy cho classification, MSE cho regression.",
      "Optimizer cập nhật weight để giảm loss: SGD đơn giản, Adam phổ biến vì thích nghi learning rate theo tham số.",
    ],
    formula:
      "Neuron: a = activation(w·x + b). Gradient descent: w := w - learning_rate * gradient.",
    trap:
      "Learning rate quá lớn làm loss dao động/không hội tụ; quá nhỏ làm học rất chậm.",
    example:
      "Binary classification thường dùng sigmoid output + binary cross entropy.",
    practice:
      "Giải thích vì sao mạng chỉ gồm các layer tuyến tính mà không có activation vẫn chỉ tương đương một phép tuyến tính lớn.",
    code: String.raw`import torch
import torch.nn as nn

model = nn.Sequential(
    nn.Linear(20, 64),
    nn.ReLU(),
    nn.Dropout(0.2),
    nn.Linear(64, 1),
    nn.Sigmoid(),
)`,
  },
  {
    id: "backprop-architectures",
    module: "C",
    title: "Backpropagation và kiến trúc MLP, CNN, RNN, Transformer",
    summary: "Biết khi nào dùng kiến trúc nào và vì sao Transformer hiện đại.",
    concepts: [
      "Backpropagation lan truyền lỗi ngược qua chain rule để tính gradient cho từng weight.",
      "MLP phù hợp dữ liệu tabular/vector; CNN mạnh với ảnh nhờ convolution và local pattern.",
      "RNN/LSTM/GRU xử lý chuỗi nhưng khó song song hóa và có vấn đề long-range dependency.",
      "Transformer dùng attention để mỗi token nhìn các token khác, là nền tảng của GPT và BERT.",
    ],
    formula:
      "Attention ý tưởng: tính mức liên quan giữa query và key, rồi trộn value theo trọng số liên quan.",
    trap:
      "Transformer không 'hiểu' như con người; nó học pattern thống kê rất mạnh từ dữ liệu và objective huấn luyện.",
    example:
      "Ảnh y tế: CNN/ViT. Văn bản: Transformer. Time series ngắn: LSTM/Transformer/feature-based model đều có thể thử.",
    practice:
      "Nêu 2 lý do CNN tốt cho ảnh hơn MLP thuần: local receptive field và weight sharing.",
  },
  {
    id: "ai-product",
    module: "C",
    title: "Tư duy sản phẩm AI và AI agent",
    summary: "Chương trình AI thực chiến nhấn mạnh làm được việc, không chỉ thuộc thuật ngữ.",
    concepts: [
      "Bắt đầu từ pain point, người dùng, dữ liệu có sẵn, hành động sau dự đoán và metric kinh doanh.",
      "AI agent thường gồm model, instruction, tool, memory/context, guardrail và vòng lặp quan sát-hành động.",
      "Một sản phẩm AI tốt cần đo cả model metric lẫn product metric: latency, cost, adoption, safety, business lift.",
      "MVP AI nên có fallback khi model không chắc, log để cải thiện, và quy trình review lỗi.",
    ],
    formula:
      "Problem framing: User + Task + Data + Decision + Metric + Risk + Deployment constraint.",
    trap:
      "Đừng dùng AI chỉ vì có AI. Nếu rule-based đơn giản giải quyết tốt hơn, đó là lựa chọn sản phẩm hợp lý.",
    example:
      "Chatbot tuyển sinh cần retrieval từ nguồn chính thức, trích nguồn, fallback cho câu nhạy cảm, và đo hallucination rate.",
    practice:
      "Chọn một quy trình trong trường học/doanh nghiệp và viết 5 gạch đầu dòng mô tả AI MVP khả thi.",
  },
  {
    id: "ai-monitoring-evaluation",
    module: "C",
    title: "Đánh giá, A/B test, drift và monitoring sản phẩm AI",
    summary: "Đề full tham khảo có nhiều câu product AI: không chỉ train model mà còn đo tác động sau deploy.",
    concepts: [
      "Offline metrics đo model trên dataset: F1, ROC-AUC, PR-AUC, MAE, RMSE.",
      "Online/product metrics đo tác động thật: conversion, CSAT, time saved, complaint rate, latency, cost.",
      "A/B test so sánh nhóm dùng model mới với nhóm đối chứng để tránh nhầm tương quan thành nhân quả.",
      "Data drift là phân phối input thay đổi; concept drift là quan hệ input-output thay đổi theo thời gian.",
      "Monitoring cần log prediction, confidence, feedback, lỗi người dùng, latency và chi phí để phát hiện model xuống cấp.",
    ],
    formula:
      "Deploy checklist: offline pass -> shadow/canary -> A/B test -> monitor drift/errors -> rollback plan -> retraining loop.",
    trap:
      "Validation score cao chưa đủ chứng minh sản phẩm tốt. Model có thể đúng offline nhưng gây latency cao hoặc UX tệ.",
    example:
      "Chatbot RAG có groundedness 90% offline nhưng online complaint tăng vì trả lời chậm. Cần theo dõi cả quality lẫn latency.",
    practice:
      "Đề xuất 5 metric cho AI gợi ý câu trả lời CSKH: thời gian xử lý, CSAT, groundedness, human edit rate, escalation rate.",
  },
  {
    id: "rag-llm-agent",
    module: "C",
    title: "LLM, RAG, prompt và AI agent thực chiến",
    summary: "Gắn với tinh thần chương trình: dùng AI để xây sản phẩm có ích, kiểm soát được rủi ro.",
    concepts: [
      "LLM dự đoán token tiếp theo dựa trên ngữ cảnh; kết quả mạnh nhưng có thể hallucinate nếu thiếu nguồn.",
      "RAG kết hợp retrieval từ tài liệu với generation để câu trả lời có căn cứ và cập nhật theo knowledge base.",
      "Prompt tốt nêu vai trò, mục tiêu, dữ liệu đầu vào, ràng buộc, format output và tiêu chí kiểm tra.",
      "AI agent thêm tool use và loop hành động: plan -> call tool -> observe -> revise -> answer.",
      "Guardrail cần kiểm tra prompt injection, dữ liệu nhạy cảm, nguồn không đáng tin và hành động rủi ro cao.",
    ],
    formula:
      "RAG pipeline: documents -> chunk -> embedding -> vector search -> context -> LLM answer with citations.",
    trap:
      "Đừng để LLM trả lời tuyển sinh/tài chính/pháp lý mà không có nguồn và fallback. Đó là rủi ro hallucination.",
    example:
      "Bot hỏi đáp VinUni nên chỉ dùng trang chính thức, trả kèm link nguồn, và nói 'chưa có thông tin' khi retrieval yếu.",
    practice:
      "Viết prompt yêu cầu model phân tích dữ liệu churn, trả JSON gồm insight, metric đề xuất và rủi ro.",
  },
  {
    id: "logic-ethics",
    module: "D",
    title: "Logic, đạo đức AI và hành vi khi làm bài",
    summary: "Phần này kiểm tra cách suy luận, ưu tiên và trách nhiệm.",
    concepts: [
      "Logic: đọc kỹ điều kiện cần/đủ, phủ định mệnh đề, suy luận loại trừ và kiểm tra phản ví dụ.",
      "Đạo đức AI: fairness, privacy, transparency, accountability, security và human oversight.",
      "Bias có thể đến từ dữ liệu, nhãn, sampling, objective, hoặc cách deploy.",
      "Câu tình huống tốt thường nêu rủi ro, stakeholder, metric, phương án giảm thiểu và kế hoạch kiểm chứng.",
    ],
    formula:
      "Cấu trúc tự luận 5 câu: vấn đề -> giả định -> phương án -> metric/rủi ro -> bước triển khai tiếp theo.",
    trap:
      "Câu đạo đức không có nghĩa là chống AI. Điểm nằm ở cách dùng AI có trách nhiệm và biết giới hạn.",
    example:
      "Model tuyển dụng có thể bias theo trường/giới/vùng nếu dữ liệu lịch sử đã lệch. Cần audit subgroup và quy trình appeal.",
    practice:
      "Viết 120 từ: Bạn sẽ triển khai AI chấm CV thế nào để vừa hiệu quả vừa giảm bias?",
  },
  {
    id: "privacy-security-ai",
    module: "D",
    title: "Privacy, security và governance cho AI",
    summary: "Câu tình huống tốt luôn nhắc đến dữ liệu cá nhân, bảo mật và trách nhiệm vận hành.",
    concepts: [
      "Privacy: chỉ thu thập dữ liệu cần thiết, ẩn danh/pseudonymize khi có thể, giới hạn quyền truy cập.",
      "Security: chống prompt injection, data exfiltration, lộ API key, tool call nguy hiểm và dependency rủi ro.",
      "Governance: có owner, log, audit, phiên bản model/data, quy trình xử lý incident và human escalation.",
      "Với dữ liệu nhạy cảm, cần cân nhắc consent, retention policy và quyền xóa/sửa dữ liệu.",
    ],
    formula:
      "Risk register: rủi ro -> xác suất -> tác động -> kiểm soát -> người chịu trách nhiệm -> metric theo dõi.",
    trap:
      "Ẩn tên không đủ nếu còn các proxy định danh như số điện thoại, địa chỉ, mã sinh viên hoặc tổ hợp feature hiếm.",
    example:
      "AI agent có quyền gửi email cần confirmation step trước khi gửi thật và log nội dung/hành động để audit.",
    practice:
      "Liệt kê 5 guardrail cho chatbot nội bộ có quyền đọc tài liệu doanh nghiệp.",
  },
];

const quizzes = [
  {
    module: "A",
    difficulty: "easy",
    q: "Nếu A và B độc lập, phát biểu nào đúng?",
    options: [
      "P(A ∩ B) = P(A)P(B)",
      "P(A ∩ B) = 0",
      "P(A | B) luôn bằng 1",
      "A và B không thể xảy ra cùng lúc",
    ],
    answer: 0,
    explanation:
      "Độc lập nghĩa là việc biết B xảy ra không đổi xác suất của A: P(A | B)=P(A), tương đương P(A ∩ B)=P(A)P(B).",
  },
  {
    module: "A",
    difficulty: "medium",
    q: "Một bệnh có prior 1%, test sensitivity 99%, false positive 5%. Khi test dương tính, xác suất có bệnh gần nhất là bao nhiêu?",
    options: ["99%", "95%", "50%", "16.7%"],
    answer: 3,
    explanation:
      "Áp dụng Bayes: 0.99*0.01 / (0.99*0.01 + 0.05*0.99) ≈ 0.167. Base rate thấp kéo precision xuống.",
  },
  {
    module: "A",
    difficulty: "easy",
    q: "Trong confusion matrix, FN là gì?",
    options: [
      "Model đoán positive và đúng",
      "Model đoán negative nhưng thực tế positive",
      "Model đoán positive nhưng thực tế negative",
      "Model đoán negative và đúng",
    ],
    answer: 1,
    explanation:
      "False Negative là ca positive thật bị model bỏ sót. Với y tế/an toàn, FN thường rất tốn kém.",
  },
  {
    module: "A",
    difficulty: "medium",
    q: "TP=40, FP=10, FN=20. Precision bằng bao nhiêu?",
    options: ["40/60 = 0.667", "40/50 = 0.8", "50/60 = 0.833", "20/40 = 0.5"],
    answer: 1,
    explanation: "Precision = TP / (TP + FP) = 40 / (40 + 10) = 0.8.",
  },
  {
    module: "A",
    difficulty: "medium",
    q: "Ma trận X shape (100, 20), W shape (20, 3). X @ W có shape gì?",
    options: ["(100, 3)", "(20, 20)", "(3, 100)", "Không hợp lệ"],
    answer: 0,
    explanation: "Hai chiều trong khớp nhau là 20. Kết quả giữ chiều ngoài: (100, 3).",
  },
  {
    module: "A",
    difficulty: "medium",
    q: "Với a=[1,2], b=[2,1], tích vô hướng a·b bằng bao nhiêu?",
    options: ["3", "4", "5", "0"],
    answer: 1,
    explanation: "a·b = 1*2 + 2*1 = 4.",
  },
  {
    module: "A",
    difficulty: "hard",
    q: "Đạo hàm của cos(x) là gì?",
    options: ["sin(x)", "-sin(x)", "cos(x)", "-cos(x)"],
    answer: 1,
    explanation: "d(cos x)/dx = -sin x. Đây là công thức nền hay gặp trong câu đạo hàm nhanh.",
  },
  {
    module: "A",
    difficulty: "hard",
    q: "Dataset có 99% class 0, 1% class 1. Model luôn đoán class 0. Kết luận đúng nhất?",
    options: [
      "Model tốt vì accuracy 99%",
      "Model không hữu ích cho class 1 vì recall class 1 bằng 0",
      "Model có precision class 1 bằng 1",
      "Không thể tính accuracy",
    ],
    answer: 1,
    explanation:
      "Accuracy cao là bẫy imbalance. Model bỏ sót toàn bộ positive nên recall của class 1 bằng 0.",
  },
  {
    module: "A",
    difficulty: "easy",
    q: "Mean khác median ở điểm nào?",
    options: [
      "Mean luôn bền hơn trước outlier",
      "Median thường bền hơn trước outlier",
      "Median không dùng được cho dữ liệu số",
      "Mean và median luôn bằng nhau",
    ],
    answer: 1,
    explanation:
      "Median lấy giá trị giữa nên ít bị kéo bởi outlier hơn mean, đặc biệt khi phân phối lệch.",
  },
  {
    module: "B",
    difficulty: "easy",
    q: "Trong pandas, lệnh nào xem số lượng missing value theo cột?",
    options: ["df.isna().sum()", "df.mean().missing()", "pd.missing(df)", "df.describe_missing()"],
    answer: 0,
    explanation: "df.isna() trả mask True/False, sum() cộng True theo cột.",
  },
  {
    module: "B",
    difficulty: "medium",
    q: "Trong pandas, loc và iloc khác nhau thế nào?",
    options: [
      "loc dùng nhãn, iloc dùng vị trí số nguyên",
      "loc chỉ dùng cho Series, iloc chỉ dùng cho DataFrame",
      "loc nhanh hơn iloc trong mọi trường hợp",
      "Không khác nhau",
    ],
    answer: 0,
    explanation: "loc chọn theo label/index label, iloc chọn theo integer position.",
  },
  {
    module: "B",
    difficulty: "medium",
    q: "Data leakage xảy ra khi nào?",
    options: [
      "Model train quá chậm",
      "Thông tin từ validation/test hoặc tương lai lọt vào quá trình train",
      "Dữ liệu có nhiều missing values",
      "Dùng cross-validation",
    ],
    answer: 1,
    explanation:
      "Leakage làm điểm evaluate ảo vì model đã thấy thông tin lẽ ra không có tại thời điểm dự đoán.",
  },
  {
    module: "B",
    difficulty: "hard",
    q: "Bạn có cột city với giá trị mới xuất hiện trong test. Cách encode nào giúp pipeline không lỗi?",
    options: [
      "OneHotEncoder(handle_unknown='ignore')",
      "OneHotEncoder(handle_unknown='raise')",
      "Xóa toàn bộ cột city",
      "Fit encoder lại trên test",
    ],
    answer: 0,
    explanation:
      "handle_unknown='ignore' cho phép category mới không làm pipeline vỡ. Không fit lại trên test vì leakage/không nhất quán.",
  },
  {
    module: "B",
    difficulty: "easy",
    q: "Kết quả của len(set([1, 1, 2, 3, 3])) là gì?",
    options: ["5", "3", "2", "Lỗi"],
    answer: 1,
    explanation: "set loại trùng, còn {1, 2, 3}, nên len bằng 3.",
  },
  {
    module: "B",
    difficulty: "medium",
    q: "Cách viết nào tạo cột ratio = price / area trong pandas?",
    options: [
      "df['ratio'] = df['price'] / df['area']",
      "df.ratio = df.price divide df.area",
      "df['ratio'] == df['price'] / df['area']",
      "ratio(df) = price / area",
    ],
    answer: 0,
    explanation: "Gán cột mới bằng phép chia vector hóa giữa hai Series.",
  },
  {
    module: "B",
    difficulty: "hard",
    q: "Vì sao nên fit scaler trên train rồi transform test?",
    options: [
      "Để tránh dùng thống kê của test trong train",
      "Vì scaler không chạy được trên test",
      "Vì test không có feature",
      "Vì train luôn nhỏ hơn test",
    ],
    answer: 0,
    explanation: "Mean/std của test là thông tin không được biết khi huấn luyện/deploy.",
  },
  {
    module: "C",
    difficulty: "easy",
    q: "Bài toán dự đoán giá nhà thuộc nhóm nào?",
    options: ["Classification", "Regression", "Clustering", "Reinforcement Learning"],
    answer: 1,
    explanation: "Giá nhà là giá trị liên tục, nên là regression trong supervised learning.",
  },
  {
    module: "C",
    difficulty: "easy",
    q: "K-means thường dùng cho mục tiêu nào?",
    options: ["Clustering không nhãn", "Dự đoán giá liên tục", "Tối ưu reward", "Sinh văn bản"],
    answer: 0,
    explanation: "K-means là thuật toán unsupervised để chia dữ liệu thành k cụm.",
  },
  {
    module: "C",
    difficulty: "medium",
    q: "Vì sao thường cần scale feature trước K-means?",
    options: [
      "Vì K-means dựa trên khoảng cách nên feature có thang đo lớn có thể áp đảo",
      "Vì K-means chỉ nhận dữ liệu text",
      "Vì scale làm mất hết outlier",
      "Vì K-means cần nhãn y",
    ],
    answer: 0,
    explanation: "K-means dùng khoảng cách; feature có đơn vị/thang đo lớn sẽ chi phối centroid nếu không scale.",
  },
  {
    module: "C",
    difficulty: "medium",
    q: "PCA chủ yếu dùng để làm gì?",
    options: [
      "Giảm chiều bằng các trục phương sai lớn nhất",
      "Tăng số nhãn trong classification",
      "Tối ưu reward trong RL",
      "Tính precision và recall",
    ],
    answer: 0,
    explanation: "PCA là kỹ thuật unsupervised tìm principal components để nén/visualize dữ liệu.",
  },
  {
    module: "C",
    difficulty: "medium",
    q: "Logistic Regression thường dùng cho bài toán nào?",
    options: ["Classification", "Clustering", "Dimensionality reduction", "Text generation"],
    answer: 0,
    explanation: "Logistic Regression dùng sigmoid/softmax để dự đoán xác suất class.",
  },
  {
    module: "C",
    difficulty: "medium",
    q: "Train accuracy 99%, validation accuracy 70%. Đây thường là dấu hiệu gì?",
    options: ["Underfitting", "Overfitting", "Model chưa train", "Dataset cân bằng hoàn hảo"],
    answer: 1,
    explanation: "Khoảng cách lớn giữa train và validation thường cho thấy model học thuộc train hoặc có leakage/problem split.",
  },
  {
    module: "C",
    difficulty: "hard",
    q: "AUC cao nhưng precision thấp ở threshold deploy. Điều này nói gì?",
    options: [
      "Model xếp hạng khá tốt nhưng threshold hiện tại chưa phù hợp hoặc positive hiếm",
      "AUC không bao giờ dùng được",
      "Precision không liên quan threshold",
      "Model chắc chắn bị underfit",
    ],
    answer: 0,
    explanation:
      "AUC đo ranking trên nhiều threshold. Precision tại một threshold vẫn có thể thấp, nhất là dữ liệu lệch lớp.",
  },
  {
    module: "C",
    difficulty: "easy",
    q: "Activation nào phổ biến cho hidden layer trong deep learning?",
    options: ["ReLU", "MSE", "Adam", "Cross entropy"],
    answer: 0,
    explanation: "ReLU là activation. MSE/cross entropy là loss, Adam là optimizer.",
  },
  {
    module: "C",
    difficulty: "medium",
    q: "Backpropagation dùng công cụ toán học nào là cốt lõi?",
    options: ["Chain rule", "Bayes rule", "K-means update", "Median filter"],
    answer: 0,
    explanation: "Backprop dùng chain rule để lan truyền gradient ngược qua các layer.",
  },
  {
    module: "C",
    difficulty: "medium",
    q: "CNN mạnh cho ảnh chủ yếu vì lý do nào?",
    options: [
      "Khai thác local pattern và chia sẻ trọng số",
      "Không cần dữ liệu",
      "Luôn tốt hơn mọi model khác",
      "Không có tham số train",
    ],
    answer: 0,
    explanation: "Convolution nhìn vùng cục bộ và dùng cùng kernel trên nhiều vị trí, hợp cấu trúc ảnh.",
  },
  {
    module: "C",
    difficulty: "hard",
    q: "Transformer khác RNN truyền thống ở điểm nào nổi bật?",
    options: [
      "Dùng attention để mô hình hóa quan hệ giữa token và song song hóa tốt hơn",
      "Không cần loss function",
      "Chỉ dùng cho ảnh",
      "Không cần dữ liệu huấn luyện",
    ],
    answer: 0,
    explanation: "Attention giúp token tham chiếu token khác trực tiếp; kiến trúc dễ song song hơn RNN tuần tự.",
  },
  {
    module: "C",
    difficulty: "medium",
    q: "Regularization L2 có tác dụng chính gì?",
    options: [
      "Phạt weight lớn để giảm overfitting",
      "Tăng learning rate vô hạn",
      "Xóa validation set",
      "Biến regression thành classification",
    ],
    answer: 0,
    explanation: "L2 thêm penalty theo bình phương weight, khuyến khích nghiệm đơn giản hơn.",
  },
  {
    module: "C",
    difficulty: "hard",
    q: "Trong product AI, vì sao cần fallback khi model không chắc?",
    options: [
      "Để giảm rủi ro lỗi nghiêm trọng và giữ trải nghiệm đáng tin",
      "Để bỏ qua logging",
      "Để không cần evaluate",
      "Để model tự train trên test",
    ],
    answer: 0,
    explanation: "Fallback/human review giúp kiểm soát rủi ro khi confidence thấp hoặc case ngoài phân phối.",
  },
  {
    module: "D",
    difficulty: "easy",
    q: "Mệnh đề phủ định của 'Tất cả model đều đúng' là gì?",
    options: [
      "Không có model nào đúng",
      "Có ít nhất một model không đúng",
      "Tất cả model đều sai",
      "Có đúng một model đúng",
    ],
    answer: 1,
    explanation: "Phủ định của 'for all' là 'exists at least one not'.",
  },
  {
    module: "D",
    difficulty: "medium",
    q: "Một hệ thống tuyển dụng AI có điểm thấp bất thường cho một nhóm ứng viên. Việc cần làm đầu tiên là gì?",
    options: [
      "Audit dữ liệu/metric theo subgroup và kiểm tra bias trước khi deploy rộng",
      "Tăng số layer model ngay",
      "Ẩn kết quả để người dùng không thấy",
      "Dùng accuracy tổng thể là đủ",
    ],
    answer: 0,
    explanation:
      "Đây là tình huống fairness. Cần phân tích subgroup, nguồn bias, tác động và mitigation.",
  },
  {
    module: "D",
    difficulty: "medium",
    q: "Yếu tố nào KHÔNG phải là thực hành AI có trách nhiệm?",
    options: [
      "Human oversight với quyết định rủi ro cao",
      "Bảo vệ dữ liệu cá nhân",
      "Công bố giới hạn của hệ thống",
      "Tối đa hóa accuracy bằng mọi giá, bỏ qua rủi ro",
    ],
    answer: 3,
    explanation: "Accuracy quan trọng nhưng không thể bỏ qua fairness, privacy, security và tác động xã hội.",
  },
  {
    module: "D",
    difficulty: "hard",
    q: "Khi viết tự luận kế hoạch triển khai AI, cấu trúc nào tốt nhất?",
    options: [
      "Vấn đề, giả định, dữ liệu, phương án, metric, rủi ro, bước tiếp theo",
      "Kể tên thật nhiều model",
      "Chỉ nói AI sẽ tự động hóa mọi thứ",
      "Chỉ nêu kết luận, không cần giả định",
    ],
    answer: 0,
    explanation: "Câu tự luận cần thể hiện tư duy hệ thống và trách nhiệm, không phải thuộc danh sách thuật toán.",
  },
  {
    module: "D",
    difficulty: "hard",
    q: "Nếu đề có điều kiện 'A chỉ xảy ra nếu B', diễn giải logic đúng là gì?",
    options: ["A -> B", "B -> A", "A và B luôn cùng xảy ra", "A phủ định B"],
    answer: 0,
    explanation: "'A only if B' nghĩa là B là điều kiện cần cho A, tức A xảy ra thì B phải xảy ra.",
  },
  {
    module: "B",
    difficulty: "medium",
    q: "Trong EDA, việc nào nên làm trước khi chọn accuracy làm metric chính?",
    options: [
      "Kiểm tra phân phối target/class balance",
      "Xóa toàn bộ dữ liệu thiếu ngay lập tức",
      "Tăng số epoch lên 100",
      "Chỉ xem 1 dòng đầu tiên",
    ],
    answer: 0,
    explanation:
      "Nếu class lệch, accuracy có thể đánh lừa. Cần xem value_counts(normalize=True) hoặc phân phối target.",
  },
  {
    module: "B",
    difficulty: "hard",
    q: "Join bảng users với orders rồi đếm số dòng để suy ra số user có rủi ro gì?",
    options: [
      "User có nhiều orders sẽ bị đếm nhiều lần",
      "Join luôn xóa duplicate tự động",
      "Không thể join users với orders",
      "Đếm dòng luôn bằng số user duy nhất",
    ],
    answer: 0,
    explanation:
      "Sau join ở grain order, một user có nhiều giao dịch sẽ xuất hiện nhiều dòng. Muốn đếm user cần distinct/nunique.",
  },
  {
    module: "B",
    difficulty: "medium",
    q: "Trong NumPy, X shape (100, 20). X.mean(axis=0) thường có shape gì?",
    options: ["(20,)", "(100,)", "(100, 20)", "(1,)"],
    answer: 0,
    explanation:
      "axis=0 gom theo chiều hàng và tính thống kê cho từng cột, nên trả 20 giá trị tương ứng 20 feature.",
  },
  {
    module: "B",
    difficulty: "medium",
    q: "Phép toán NumPy nào là dot product/nhân ma trận đúng?",
    options: ["X @ W", "X * W luôn là nhân ma trận", "X and W", "X // W"],
    answer: 0,
    explanation:
      "Toán tử @ thực hiện matrix multiplication/dot product. Dấu * là nhân từng phần tử nếu shape tương thích.",
  },
  {
    module: "B",
    difficulty: "hard",
    q: "Trong pandas, vì sao cần ngoặc quanh từng điều kiện khi dùng &?",
    options: [
      "Vì thứ tự ưu tiên toán tử có thể làm biểu thức bị hiểu sai",
      "Vì pandas không hỗ trợ filter",
      "Vì & chỉ dùng cho string",
      "Vì loc không nhận mask",
    ],
    answer: 0,
    explanation:
      "Pattern đúng là (df['a'] > 1) & (df['b'] < 5). Không dùng and/or cho Series boolean.",
  },
  {
    module: "B",
    difficulty: "hard",
    q: "Sau orders.merge(users, on='user_id'), bảng kết quả có 4 dòng vì user 1 có 2 đơn. Đây là ví dụ của gì?",
    options: ["One-to-many join", "PCA", "Gradient descent", "Underfitting"],
    answer: 0,
    explanation:
      "Một user có thể có nhiều orders, nên join users-orders tạo quan hệ one-to-many và có thể nhân dòng user.",
  },
  {
    module: "C",
    difficulty: "hard",
    q: "Với dữ liệu churn theo thời gian, split nào hợp lý nhất để mô phỏng deploy?",
    options: [
      "Train tháng cũ, test tháng mới hơn",
      "Shuffle ngẫu nhiên mọi tháng trong mọi trường hợp",
      "Fit trên test rồi chấm train",
      "Không cần test set",
    ],
    answer: 0,
    explanation:
      "Bài toán dự đoán tương lai nên tránh dùng thông tin tương lai. Time-based split mô phỏng triển khai tốt hơn.",
  },
  {
    module: "C",
    difficulty: "medium",
    q: "RAG giúp giảm hallucination bằng cách nào?",
    options: [
      "Truy xuất tài liệu liên quan rồi đưa vào ngữ cảnh trả lời",
      "Bỏ hết dữ liệu nguồn",
      "Luôn tăng temperature lên cao",
      "Không cần đánh giá câu trả lời",
    ],
    answer: 0,
    explanation:
      "RAG không làm model hoàn hảo, nhưng giúp câu trả lời bám tài liệu được truy xuất và có thể trích nguồn.",
  },
  {
    module: "C",
    difficulty: "medium",
    q: "Prompt tốt cho LLM nên có gì?",
    options: [
      "Mục tiêu, dữ liệu đầu vào, ràng buộc, format output và tiêu chí kiểm tra",
      "Chỉ một câu mơ hồ",
      "Càng dài càng tốt dù không liên quan",
      "Không cần nói output mong muốn",
    ],
    answer: 0,
    explanation:
      "Prompt rõ nhiệm vụ và output giúp model trả nhất quán hơn, đặc biệt khi dùng trong sản phẩm.",
  },
  {
    module: "D",
    difficulty: "medium",
    q: "Biện pháp nào giảm rủi ro prompt injection cho chatbot RAG?",
    options: [
      "Không làm theo instruction nằm trong tài liệu truy xuất nếu trái system policy",
      "Cho tài liệu tự sửa system prompt",
      "Tắt log và không kiểm thử",
      "Bỏ trích nguồn",
    ],
    answer: 0,
    explanation:
      "Prompt injection thường ẩn trong tài liệu/người dùng. Guardrail cần tách instruction hệ thống khỏi nội dung được truy xuất.",
  },
  {
    module: "D",
    difficulty: "hard",
    q: "Ẩn tên người dùng nhưng giữ số điện thoại và địa chỉ đầy đủ có đủ bảo vệ privacy không?",
    options: [
      "Không, vì vẫn còn thông tin định danh trực tiếp/proxy",
      "Có, vì chỉ cần xóa tên là xong",
      "Có, vì model sẽ tự bảo vệ dữ liệu",
      "Không liên quan đến AI",
    ],
    answer: 0,
    explanation:
      "Privacy không chỉ là xóa tên. Số điện thoại, địa chỉ, mã định danh hoặc tổ hợp feature hiếm vẫn có thể tái định danh.",
  },
];

const aiTestInspiredSources = [
  "https://hungbil.github.io/AI-TEST/",
  "https://vuongducthoai.github.io/AI-TEST/",
];

const extraMockQuestions = [
  {
    module: "A",
    difficulty: "medium",
    q: "Nếu P(A)=0.4, P(B)=0.5, P(A ∩ B)=0.2 thì P(A ∪ B) bằng bao nhiêu?",
    options: ["0.7", "0.9", "0.2", "0.1"],
    answer: 0,
    explanation: "P(A ∪ B)=P(A)+P(B)-P(A∩B)=0.4+0.5-0.2=0.7.",
  },
  {
    module: "A",
    difficulty: "medium",
    q: "Một biến ngẫu nhiên nhận 0 với xác suất 0.7 và 10 với xác suất 0.3. Kỳ vọng là:",
    options: ["3", "7", "10", "0.3"],
    answer: 0,
    explanation: "E[X]=0*0.7+10*0.3=3.",
  },
  {
    module: "A",
    difficulty: "hard",
    q: "Nếu MAE thấp hơn nhưng RMSE cao hơn rõ rệt, điều này thường gợi ý gì?",
    options: [
      "Model có một số lỗi rất lớn/outlier vì RMSE phạt lỗi lớn mạnh hơn",
      "Model chắc chắn tốt hơn ở mọi mặt",
      "Target không phải số",
      "Không thể so sánh regression metric",
    ],
    answer: 0,
    explanation: "RMSE bình phương lỗi nên nhạy với vài sai số lớn hơn MAE.",
  },
  {
    module: "A",
    difficulty: "medium",
    q: "A shape (8, 4), B shape (4, 6), C shape (6, 2). Shape của A @ B @ C là:",
    options: ["(8, 2)", "(4, 2)", "(8, 6)", "Không hợp lệ"],
    answer: 0,
    explanation: "A@B -> (8,6), rồi (8,6)@(6,2)->(8,2).",
  },
  {
    module: "A",
    difficulty: "hard",
    q: "Gradient descent cập nhật w := w - lr * grad. Nếu learning rate quá lớn, điều gì dễ xảy ra?",
    options: ["Loss dao động hoặc phân kỳ", "Model luôn tổng quát tốt", "Gradient luôn bằng 0", "Dữ liệu tự tăng lên"],
    answer: 0,
    explanation: "Bước nhảy quá lớn có thể vượt qua điểm tối ưu và làm loss không hội tụ.",
  },
  {
    module: "B",
    difficulty: "easy",
    q: "Kết quả của list(range(2, 7, 2)) là gì?",
    options: ["[2, 4, 6]", "[2, 4, 6, 8]", "[2, 3, 4, 5, 6]", "[7, 5, 3]"],
    answer: 0,
    explanation: "range(start, stop, step) không lấy stop, nên ra 2,4,6.",
  },
  {
    module: "B",
    difficulty: "medium",
    q: "Trong Python, dict.get(key, 0) thường dùng để làm gì?",
    options: [
      "Lấy value nếu key tồn tại, nếu không trả 0",
      "Xóa key khỏi dict",
      "Sắp xếp dict",
      "Đổi dict thành list",
    ],
    answer: 0,
    explanation: "Pattern đếm tần suất hay dùng counts[x] = counts.get(x, 0) + 1.",
  },
  {
    module: "B",
    difficulty: "medium",
    q: "Trong pandas, df.dropna() mặc định làm gì?",
    options: [
      "Xóa các dòng có ít nhất một giá trị thiếu",
      "Fill missing bằng 0",
      "Xóa cột trùng tên",
      "Chỉ xóa dòng duplicate",
    ],
    answer: 0,
    explanation: "dropna mặc định axis=0 và how='any', tức xóa dòng có missing.",
  },
  {
    module: "B",
    difficulty: "hard",
    q: "Vì sao không nên dùng df.fillna(df.mean()) trên toàn bộ dữ liệu trước train_test_split?",
    options: [
      "Vì thống kê mean của test đã lọt vào train",
      "Vì pandas không hỗ trợ mean",
      "Vì missing luôn phải xóa",
      "Vì train_test_split chỉ nhận list",
    ],
    answer: 0,
    explanation: "Imputer/scaler phải fit trên train rồi transform validation/test để tránh leakage.",
  },
  {
    module: "B",
    difficulty: "medium",
    q: "df.groupby('city').agg(avg=('price','mean')) trả kết quả theo gì?",
    options: ["Mỗi city một dòng với giá trung bình", "Mỗi price một dòng", "Một list Python", "Một model ML"],
    answer: 0,
    explanation: "groupby city gom dòng theo thành phố rồi mean trên cột price.",
  },
  {
    module: "B",
    difficulty: "medium",
    q: "Trong NumPy, np.where(condition, a, b) dùng để:",
    options: ["Chọn a nếu condition đúng, ngược lại chọn b", "Tính PCA", "Train model", "Đọc CSV"],
    answer: 0,
    explanation: "np.where là vectorized if-else.",
  },
  {
    module: "B",
    difficulty: "hard",
    q: "Nếu sort số trong JavaScript bằng arr.sort() không truyền comparator, lỗi thường gặp là:",
    options: [
      "Sort theo chuỗi, ví dụ 11 đứng trước 2",
      "Mảng bị xóa",
      "Sort luôn giảm dần",
      "Không thể sort string",
    ],
    answer: 0,
    explanation: "Cần arr.sort((a,b)=>a-b) để sort số tăng dần.",
  },
  {
    module: "C",
    difficulty: "medium",
    q: "Baseline model trong ML có vai trò gì?",
    options: [
      "Mốc so sánh đơn giản để biết model phức tạp có đáng dùng không",
      "Model cuối cùng luôn tốt nhất",
      "Cách xóa dữ liệu test",
      "Một loại optimizer",
    ],
    answer: 0,
    explanation: "Baseline giúp tránh dùng model phức tạp khi chưa vượt qua phương án đơn giản.",
  },
  {
    module: "C",
    difficulty: "medium",
    q: "Early stopping thường dùng để:",
    options: ["Dừng train khi validation không cải thiện để giảm overfitting", "Xóa loss", "Tăng số feature", "Chạy inference nhanh hơn"],
    answer: 0,
    explanation: "Khi val loss không còn giảm, tiếp tục train có thể làm model học thuộc train.",
  },
  {
    module: "C",
    difficulty: "hard",
    q: "PR-AUC thường hữu ích hơn ROC-AUC khi nào?",
    options: ["Positive class rất hiếm", "Dữ liệu không có nhãn", "Bài toán regression", "Model không có score"],
    answer: 0,
    explanation: "Precision-recall curve tập trung vào class positive, hữu ích với imbalance.",
  },
  {
    module: "C",
    difficulty: "medium",
    q: "Temperature trong LLM thường ảnh hưởng điều gì?",
    options: ["Độ ngẫu nhiên/sáng tạo của output", "Số feature trong pandas", "Learning rate của sklearn", "Số dòng CSV"],
    answer: 0,
    explanation: "Temperature cao làm output đa dạng hơn nhưng có thể kém ổn định hơn.",
  },
  {
    module: "C",
    difficulty: "hard",
    q: "Trong RAG, reranker dùng để làm gì?",
    options: [
      "Sắp xếp lại tài liệu truy xuất theo mức liên quan trước khi đưa vào LLM",
      "Train lại toàn bộ LLM",
      "Xóa vector database",
      "Tăng batch size",
    ],
    answer: 0,
    explanation: "Reranking giúp context đưa vào model chất lượng hơn.",
  },
  {
    module: "C",
    difficulty: "medium",
    q: "Concept drift là gì?",
    options: [
      "Phân phối dữ liệu hoặc quan hệ input-output thay đổi theo thời gian",
      "Model thiếu RAM",
      "Code bị syntax error",
      "Dataset có ít cột",
    ],
    answer: 0,
    explanation: "Drift khiến model deploy lâu ngày có thể kém dần dù ban đầu tốt.",
  },
  {
    module: "C",
    difficulty: "medium",
    q: "A/B testing trong sản phẩm AI dùng để:",
    options: [
      "So sánh tác động model/tính năng mới với nhóm đối chứng",
      "Tính đạo hàm",
      "Encode category",
      "Xóa hallucination hoàn toàn",
    ],
    answer: 0,
    explanation: "A/B test đo tác động thực tế lên metric người dùng/kinh doanh.",
  },
  {
    module: "D",
    difficulty: "medium",
    q: "Data minimization nghĩa là gì?",
    options: [
      "Chỉ thu thập dữ liệu cần thiết cho mục tiêu rõ ràng",
      "Thu thập càng nhiều càng tốt",
      "Không cần xóa dữ liệu cũ",
      "Luôn công khai dữ liệu",
    ],
    answer: 0,
    explanation: "Giảm dữ liệu thu thập giúp giảm rủi ro privacy và lạm dụng.",
  },
  {
    module: "D",
    difficulty: "hard",
    q: "Nếu 'AI được triển khai' xảy ra trước 'doanh thu tăng', có thể kết luận AI chắc chắn gây tăng doanh thu không?",
    options: ["Không, vì thứ tự thời gian chưa chứng minh nhân quả", "Có, luôn chắc chắn", "Không liên quan logic", "Chỉ cần accuracy"],
    answer: 0,
    explanation: "Cần kiểm soát yếu tố khác/A-B test để suy ra tác động nhân quả.",
  },
  {
    module: "D",
    difficulty: "medium",
    q: "Trong quyết định ảnh hưởng quyền lợi người dùng, cơ chế nào quan trọng?",
    options: ["Khiếu nại/appeal và human oversight", "Ẩn toàn bộ log", "Không giải thích", "Tự động quyết định mọi ca"],
    answer: 0,
    explanation: "Quyết định rủi ro cao cần minh bạch, trách nhiệm và đường sửa sai.",
  },
];

const openMockQuestions = {
  B: [
    {
      module: "B",
      type: "code",
      difficulty: "medium",
      q: "Code tay: Viết hàm nhận list số và trả về dict gồm mean, min, max. Nếu list rỗng trả None.",
      modelAnswer: "def summarize(xs):\n    if not xs:\n        return None\n    return {'mean': sum(xs)/len(xs), 'min': min(xs), 'max': max(xs)}",
      rubric: ["Xử lý list rỗng", "Tính mean đúng", "Trả dict có đủ mean/min/max"],
      explanation: "Bài đọc/viết code cơ bản kiểm tra control flow, list và return value.",
    },
    {
      module: "B",
      type: "code",
      difficulty: "hard",
      q: "Code tay pandas: từ df có cột district, price, area, tạo price_per_m2 rồi lấy median theo district, sort giảm dần.",
      modelAnswer: "df['price_per_m2'] = df['price'] / df['area']\nresult = df.groupby('district')['price_per_m2'].median().sort_values(ascending=False)",
      rubric: ["Tạo đúng feature ratio", "Dùng groupby district", "Dùng median", "Sort giảm dần"],
      explanation: "Đây là pattern pandas thực chiến: tạo feature -> groupby -> aggregate -> sort.",
    },
    {
      module: "B",
      type: "code",
      difficulty: "hard",
      q: "Pseudo-code: Mô tả cách split train/test và fit scaler để tránh leakage.",
      modelAnswer: "Split X,y thành train/test trước. Fit scaler trên X_train. Transform X_train và X_test bằng scaler đã fit. Không fit scaler trên toàn bộ dữ liệu hoặc trên test.",
      rubric: ["Split trước", "Fit chỉ trên train", "Transform train/test", "Nhắc rõ tránh leakage"],
      explanation: "Preprocessing phải học từ train để mô phỏng deploy thật.",
    },
  ],
  C: [
    {
      module: "C",
      type: "essay",
      difficulty: "hard",
      q: "Tự luận: Thiết kế MVP chatbot hỏi đáp tuyển sinh có dùng RAG. Nêu pipeline, metric và guardrail.",
      modelAnswer: "Pipeline: thu thập nguồn chính thức, chunk tài liệu, embedding, vector search, đưa context vào LLM và trả lời kèm nguồn. Metric: groundedness, answer relevance, latency, cost, satisfaction. Guardrail: từ chối khi không đủ nguồn, chống prompt injection, không thu thập dữ liệu nhạy cảm, escalation cho câu nhạy cảm.",
      rubric: ["Có ingest/chunk/embed/retrieve/generate", "Có citation/fallback", "Có metric kỹ thuật và sản phẩm", "Có guardrail an toàn"],
      explanation: "Câu này kiểm tra tư duy sản phẩm AI thực chiến, không chỉ thuộc thuật ngữ.",
    },
    {
      module: "C",
      type: "essay",
      difficulty: "hard",
      q: "Tự luận: Dataset fraud có positive class 1%. Bạn chọn metric, xử lý imbalance và deploy thế nào?",
      modelAnswer: "Không dùng accuracy đơn lẻ. Ưu tiên recall tại precision tối thiểu, PR-AUC/F1 và confusion matrix. Dùng stratified/time split, class_weight/resampling, tune threshold trên validation. Deploy có human review cho ca rủi ro, monitor drift và log false positive/false negative.",
      rubric: ["Nhắc imbalance/accuracy trap", "Chọn metric phù hợp", "Có xử lý class_weight/resampling/threshold", "Có monitoring/human review"],
      explanation: "Fraud detection là bối cảnh kinh điển để hỏi metric và triển khai.",
    },
    {
      module: "C",
      type: "essay",
      difficulty: "medium",
      q: "Tự luận: Khi nào không nên dùng Deep Learning dù đang làm bài toán AI?",
      modelAnswer: "Không nên dùng DL khi dữ liệu ít, yêu cầu giải thích cao, bài toán rule-based đơn giản đã đủ tốt, chi phí/latency bị giới hạn hoặc rủi ro vận hành lớn. Nên bắt đầu bằng baseline đơn giản, đo metric rồi mới tăng độ phức tạp.",
      rubric: ["Nêu dữ liệu ít/chi phí/interpretability", "Nêu baseline", "Nêu đo metric", "Không thần thánh hóa AI"],
      explanation: "Tư duy sản phẩm tốt là chọn giải pháp phù hợp, không chạy theo thuật toán.",
    },
  ],
  D: [
    {
      module: "D",
      type: "essay",
      difficulty: "hard",
      q: "Tự luận: Dùng AI lọc CV cần làm gì để giảm bias và bảo vệ ứng viên?",
      modelAnswer: "AI nên là công cụ hỗ trợ, không tự động loại ứng viên ở quyết định rủi ro cao. Cần audit subgroup, kiểm tra feature nhạy cảm/proxy, giải thích tiêu chí, bảo vệ dữ liệu cá nhân, logging, reviewer cuối và cơ chế appeal.",
      rubric: ["Human oversight", "Fairness audit", "Privacy", "Explainability", "Appeal/accountability"],
      explanation: "Câu đạo đức cần nói được rủi ro, stakeholder và biện pháp giảm thiểu.",
    },
    {
      module: "D",
      type: "essay",
      difficulty: "medium",
      q: "Tự luận: Nếu AI trả lời sai thông tin tuyển sinh cho học sinh, bạn xử lý quy trình thế nào?",
      modelAnswer: "Tạm thời gỡ/ẩn câu trả lời sai, kiểm tra log và nguồn retrieval, sửa tài liệu/guardrail, thông báo lại nếu có người bị ảnh hưởng, thêm test case vào bộ đánh giá, và đặt fallback sang nhân sự tuyển sinh khi confidence thấp.",
      rubric: ["Có incident handling", "Kiểm tra log/source", "Sửa guardrail/test", "Thông báo/escalation", "Ngăn tái diễn"],
      explanation: "Đề tình huống thích kiểm tra accountability và vận hành sau deploy.",
    },
  ],
};

const importedAiTestExams =
  typeof window !== "undefined" && Array.isArray(window.AI_TEST_CURATED_EXAMS)
    ? window.AI_TEST_CURATED_EXAMS
    : [];

const fullMockExams = [
  { id: "full-01", title: "Full Mock 01 - Nền tảng khóa 3", focus: "Xác suất, pandas, ML pipeline, ethics cơ bản" },
  { id: "full-02", title: "Full Mock 02 - Data & Product AI", focus: "NumPy/pandas, metrics, RAG, product tradeoff" },
  { id: "full-03", title: "Full Mock 03 - Khó hơn", focus: "Leakage, imbalance, Transformer, privacy/security" },
  { id: "full-04", title: "Full Mock 04 - Tổng duyệt 90 phút", focus: "Trộn toàn bộ module theo cấu trúc AI-TEST" },
  { id: "full-05", title: "Full Mock 05 - Toán & code nặng hơn", focus: "Bayes, ma trận, đọc code Python, pandas merge" },
  { id: "full-06", title: "Full Mock 06 - AI sản phẩm khó", focus: "RAG, agent, A/B test, monitoring, hallucination" },
  { id: "full-07", title: "Full Mock 07 - Ethics & logic nâng cao", focus: "Privacy, fairness, điều kiện cần/đủ, incident response" },
  { id: "full-08", title: "Full Mock 08 - Final boss trước khi thi", focus: "Đề tổng hợp khó, tự luận và code nhiều bẫy" },
  ...importedAiTestExams.map((exam) => ({
    ...exam,
    imported: true,
    focus: `${exam.focus} · Nguồn: ${exam.source}`,
  })),
];

const labs = [
  {
    id: "lab-pandas-clean",
    module: "B",
    title: "Pandas: làm sạch và tạo feature",
    objective:
      "Đọc DataFrame, fill missing age bằng median, tạo cột spend_per_visit và lọc khách có spend_per_visit cao.",
    starter: String.raw`import pandas as pd

df = pd.DataFrame({
    "age": [20, None, 35, 40],
    "spend": [100, 240, 80, 300],
    "visits": [2, 3, 1, 5],
})

# TODO: fill age bằng median
# TODO: tạo spend_per_visit = spend / visits
# TODO: in ra các dòng spend_per_visit > 60`,
    checks: [
      { label: "Dùng fillna", pattern: /fillna\s*\(/i },
      { label: "Dùng median", pattern: /median\s*\(/i },
      { label: "Tạo spend_per_visit", pattern: /spend_per_visit/i },
      { label: "Có phép chia spend / visits", pattern: /\[\s*["']spend["']\s*\]\s*\/\s*df\s*\[\s*["']visits["']\s*\]/i },
    ],
    solution: String.raw`df["age"] = df["age"].fillna(df["age"].median())
df["spend_per_visit"] = df["spend"] / df["visits"]
print(df[df["spend_per_visit"] > 60])`,
    expected:
      "Kết quả giữ các khách có spend_per_visit: 80, 60 không lấy nếu dùng > 60, và 100.",
  },
  {
    id: "lab-groupby",
    module: "B",
    title: "Pandas: groupby và aggregation",
    objective:
      "Tính giá nhà trung bình và median price_per_m2 theo district, rồi sort giảm dần theo median.",
    starter: String.raw`import pandas as pd

df = pd.DataFrame({
    "district": ["A", "A", "B", "B", "C"],
    "price": [100, 130, 90, 95, 200],
    "area": [50, 65, 45, 50, 80],
})

# TODO: tạo price_per_m2
# TODO: groupby district và agg mean_price, median_ppm2
# TODO: sort_values theo median_ppm2 giảm dần`,
    checks: [
      { label: "Tạo price_per_m2", pattern: /price_per_m2/i },
      { label: "Dùng groupby district", pattern: /groupby\s*\(\s*["']district["']\s*\)/i },
      { label: "Dùng agg", pattern: /\.agg\s*\(/i },
      { label: "Dùng sort_values", pattern: /sort_values\s*\(/i },
    ],
    solution: String.raw`df["price_per_m2"] = df["price"] / df["area"]
summary = (
    df.groupby("district")
      .agg(mean_price=("price", "mean"), median_ppm2=("price_per_m2", "median"))
      .sort_values("median_ppm2", ascending=False)
)
print(summary)`,
    expected: "District C đứng đầu vì price_per_m2 = 2.5, A và B quanh 2.0.",
  },
  {
    id: "lab-sklearn-pipeline",
    module: "C",
    title: "scikit-learn: split, train, evaluate",
    objective:
      "Tạo pipeline Logistic Regression, split có stratify, train và in F1-score.",
    starter: String.raw`from sklearn.datasets import make_classification
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import f1_score

X, y = make_classification(n_samples=500, n_features=12, weights=[0.8, 0.2], random_state=42)

# TODO: train_test_split với stratify=y
# TODO: train LogisticRegression(max_iter=1000)
# TODO: predict và in f1_score`,
    checks: [
      { label: "Có train_test_split", pattern: /train_test_split\s*\(/i },
      { label: "Có stratify=y", pattern: /stratify\s*=\s*y/i },
      { label: "Có LogisticRegression", pattern: /LogisticRegression\s*\(/i },
      { label: "Có f1_score", pattern: /f1_score\s*\(/i },
    ],
    solution: String.raw`X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, stratify=y, random_state=42
)
model = LogisticRegression(max_iter=1000)
model.fit(X_train, y_train)
pred = model.predict(X_test)
print(f1_score(y_test, pred))`,
    expected: "F1 thường quanh một giá trị khá cao, tùy random/data sinh ra.",
  },
  {
    id: "lab-metrics-manual",
    module: "A",
    title: "Metrics: tính thủ công Precision, Recall, F1",
    objective:
      "Từ TP, FP, FN, TN, tính accuracy, precision, recall và F1 bằng Python.",
    starter: String.raw`TP, FP, FN, TN = 40, 10, 20, 930

# TODO: tính accuracy, precision, recall, f1
# TODO: print 4 metric làm tròn 3 chữ số`,
    checks: [
      { label: "Có precision", pattern: /precision/i },
      { label: "Có recall", pattern: /recall/i },
      { label: "Có f1", pattern: /f1/i },
      { label: "Dùng công thức TP + FP hoặc TP+FP", pattern: /TP\s*\+\s*FP/i },
    ],
    solution: String.raw`total = TP + FP + FN + TN
accuracy = (TP + TN) / total
precision = TP / (TP + FP)
recall = TP / (TP + FN)
f1 = 2 * precision * recall / (precision + recall)

print(round(accuracy, 3), round(precision, 3), round(recall, 3), round(f1, 3))`,
    expected: "Output: 0.97 0.8 0.667 0.727.",
  },
  {
    id: "lab-numpy-shape",
    module: "A",
    title: "NumPy: shape và nhân ma trận",
    objective:
      "Tạo X shape (4, 3), W shape (3, 2), tính logits = X @ W + b và in shape.",
    starter: String.raw`import numpy as np

X = np.arange(12).reshape(4, 3)
W = np.array([[0.1, 0.2], [0.3, 0.4], [0.5, 0.6]])
b = np.array([0.01, -0.02])

# TODO: logits = X @ W + b
# TODO: print(logits.shape)`,
    checks: [
      { label: "Dùng toán tử @", pattern: /@\s*W|X\s*@/i },
      { label: "Cộng bias b", pattern: /\+\s*b/i },
      { label: "In shape", pattern: /\.shape/i },
    ],
    solution: String.raw`logits = X @ W + b
print(logits.shape)  # (4, 2)`,
    expected: "Shape là (4, 2).",
  },
  {
    id: "lab-pytorch",
    module: "C",
    title: "PyTorch: MLP nhỏ cho binary classification",
    objective:
      "Viết model nn.Sequential gồm Linear, ReLU, Dropout, Linear, Sigmoid.",
    starter: String.raw`import torch
import torch.nn as nn

# TODO: tạo model nhận 20 feature và xuất 1 xác suất
model = nn.Sequential(
    # code ở đây
)

print(model)`,
    checks: [
      { label: "Có nn.Linear", pattern: /nn\.Linear\s*\(/i },
      { label: "Có nn.ReLU", pattern: /nn\.ReLU\s*\(/i },
      { label: "Có nn.Dropout", pattern: /nn\.Dropout\s*\(/i },
      { label: "Có nn.Sigmoid", pattern: /nn\.Sigmoid\s*\(/i },
    ],
    solution: String.raw`model = nn.Sequential(
    nn.Linear(20, 64),
    nn.ReLU(),
    nn.Dropout(0.2),
    nn.Linear(64, 1),
    nn.Sigmoid(),
)`,
    expected: "Model nhận tensor shape (batch, 20) và trả xác suất shape (batch, 1).",
  },
  {
    id: "lab-numpy-broadcast",
    module: "B",
    title: "NumPy: chuẩn hóa feature bằng broadcasting",
    objective:
      "Tính mean/std theo cột, chuẩn hóa X, rồi kiểm tra mean sau chuẩn hóa gần 0.",
    starter: String.raw`import numpy as np

X = np.array([
    [1, 10, 100],
    [2, 20, 120],
    [3, 30, 140],
    [4, 40, 160],
])

# TODO: mean = X.mean(axis=0)
# TODO: std = X.std(axis=0)
# TODO: X_scaled = (X - mean) / std
# TODO: print(X_scaled.mean(axis=0).round(6))`,
    checks: [
      { label: "Tính mean axis=0", pattern: /\.mean\s*\(\s*axis\s*=\s*0\s*\)/i },
      { label: "Tính std axis=0", pattern: /\.std\s*\(\s*axis\s*=\s*0\s*\)/i },
      { label: "Dùng broadcasting X - mean", pattern: /X\s*-\s*mean/i },
      { label: "In mean sau chuẩn hóa", pattern: /X_scaled\.mean\s*\(\s*axis\s*=\s*0\s*\)/i },
    ],
    solution: String.raw`mean = X.mean(axis=0)
std = X.std(axis=0)
X_scaled = (X - mean) / std
print(X_scaled.mean(axis=0).round(6))`,
    expected: "Output gần [0. 0. 0.].",
  },
  {
    id: "lab-pandas-indexing",
    module: "B",
    title: "pandas: loc/filter/sort/top-k",
    objective:
      "Lọc ứng viên đủ điều kiện, tạo total_score, sort giảm dần và lấy top 2.",
    starter: String.raw`import pandas as pd

df = pd.DataFrame({
    "name": ["An", "Binh", "Chi", "Dung"],
    "python": [8, 6, 9, 7],
    "sql": [7, 8, 5, 9],
    "logic": [8, 7, 8, 6],
})

# TODO: tạo total_score = python + sql + logic
# TODO: lọc python >= 7 và sql >= 7
# TODO: sort total_score giảm dần
# TODO: in top 2 cột name, total_score`,
    checks: [
      { label: "Tạo total_score", pattern: /total_score/i },
      { label: "Dùng loc hoặc mask", pattern: /\.loc\s*\[|\&/i },
      { label: "Điều kiện python >= 7", pattern: /\[\s*["']python["']\s*\]\s*>=\s*7/i },
      { label: "Điều kiện sql >= 7", pattern: /\[\s*["']sql["']\s*\]\s*>=\s*7/i },
      { label: "sort giảm dần", pattern: /sort_values\s*\([^)]*ascending\s*=\s*False/is },
    ],
    solution: String.raw`df["total_score"] = df["python"] + df["sql"] + df["logic"]
qualified = df.loc[(df["python"] >= 7) & (df["sql"] >= 7), ["name", "total_score"]]
print(qualified.sort_values("total_score", ascending=False).head(2))`,
    expected: "Dung và An là hai ứng viên đủ điều kiện có total_score cao.",
  },
  {
    id: "lab-pandas-merge",
    module: "B",
    title: "pandas: merge và kiểm tra duplicate sau join",
    objective:
      "Merge users với orders, tính total_spend theo user và đếm số user duy nhất thay vì đếm số dòng.",
    starter: String.raw`import pandas as pd

users = pd.DataFrame({
    "user_id": [1, 2, 3],
    "city": ["HN", "HCM", "DN"],
})
orders = pd.DataFrame({
    "order_id": [101, 102, 103, 104],
    "user_id": [1, 1, 2, 3],
    "amount": [100, 50, 80, 120],
})

# TODO: left merge orders với users theo user_id
# TODO: groupby user_id để tính total_spend
# TODO: in số user duy nhất bằng nunique()`,
    checks: [
      { label: "Dùng merge", pattern: /\.merge\s*\(/i },
      { label: "Join theo user_id", pattern: /on\s*=\s*["']user_id["']/i },
      { label: "Dùng how left", pattern: /how\s*=\s*["']left["']/i },
      { label: "Groupby user_id", pattern: /groupby\s*\(\s*["']user_id["']\s*\)/i },
      { label: "Dùng nunique", pattern: /nunique\s*\(/i },
    ],
    solution: String.raw`joined = orders.merge(users, on="user_id", how="left")
spend = joined.groupby("user_id")["amount"].sum()
print(spend)
print(joined["user_id"].nunique())`,
    expected: "user_id=1 có total_spend 150; số user duy nhất là 3, không phải 4 dòng orders.",
  },
  {
    id: "lab-js-metrics",
    module: "A",
    runner: "js",
    title: "Code editor chạy thật: tính metrics bằng JavaScript",
    objective:
      "Viết hàm classificationMetrics(tp, fp, fn, tn) trả object có accuracy, precision, recall, f1.",
    starter: String.raw`function classificationMetrics(tp, fp, fn, tn) {
  // TODO: tính accuracy, precision, recall, f1
  // return { accuracy, precision, recall, f1 };
}`,
    tests: [
      {
        label: "Tính đúng precision",
        expression: "Math.abs(classificationMetrics(40, 10, 20, 930).precision - 0.8) < 1e-9",
        expected: "precision = 0.8",
      },
      {
        label: "Tính đúng recall",
        expression: "Math.abs(classificationMetrics(40, 10, 20, 930).recall - (40 / 60)) < 1e-9",
        expected: "recall = 0.6667",
      },
      {
        label: "Tính đúng F1",
        expression: "Math.abs(classificationMetrics(40, 10, 20, 930).f1 - 0.7272727272727272) < 1e-9",
        expected: "f1 ≈ 0.727",
      },
    ],
    checks: [
      { label: "Có return object", pattern: /return\s*\{/i },
      { label: "Có precision", pattern: /precision/i },
      { label: "Có recall", pattern: /recall/i },
      { label: "Có f1", pattern: /f1/i },
    ],
    solution: String.raw`function classificationMetrics(tp, fp, fn, tn) {
  const total = tp + fp + fn + tn;
  const accuracy = (tp + tn) / total;
  const precision = tp / (tp + fp);
  const recall = tp / (tp + fn);
  const f1 = (2 * precision * recall) / (precision + recall);
  return { accuracy, precision, recall, f1 };
}`,
    expected: "Tất cả test JS pass và trả object metric.",
  },
  {
    id: "lab-js-data-clean",
    module: "B",
    runner: "js",
    title: "Code editor chạy thật: làm sạch mảng dữ liệu",
    objective:
      "Viết hàm cleanScores(scores) loại null/undefined/NaN, giữ số trong [0,100], rồi sort tăng dần.",
    starter: String.raw`function cleanScores(scores) {
  // TODO: filter dữ liệu hợp lệ và sort tăng dần
}`,
    tests: [
      {
        label: "Loại missing và out-of-range",
        expression:
          "JSON.stringify(cleanScores([10, null, 105, 40, NaN, 0, 100, -5])) === JSON.stringify([0, 10, 40, 100])",
        expected: "[0, 10, 40, 100]",
      },
      {
        label: "Sort số đúng, không sort chuỗi",
        expression: "JSON.stringify(cleanScores([2, 11, 1])) === JSON.stringify([1, 2, 11])",
        expected: "[1, 2, 11]",
      },
    ],
    checks: [
      { label: "Có filter", pattern: /\.filter\s*\(/i },
      { label: "Có sort", pattern: /\.sort\s*\(/i },
      { label: "Kiểm tra Number.isNaN hoặc Number.isFinite", pattern: /Number\.(isNaN|isFinite)/i },
    ],
    solution: String.raw`function cleanScores(scores) {
  return scores
    .filter((value) => typeof value === "number" && Number.isFinite(value))
    .filter((value) => value >= 0 && value <= 100)
    .sort((a, b) => a - b);
}`,
    expected: "Test pass nếu sort số bằng (a, b) => a - b.",
  },
];

const cases = [
  {
    module: "C",
    title: "Thiết kế AI phát hiện gian lận giao dịch",
    prompt:
      "Bạn có dữ liệu giao dịch ngân hàng với positive class rất hiếm. Hãy đề xuất pipeline, metric chính, cách xử lý imbalance và rủi ro triển khai.",
    rubric: [
      "Nêu rõ split train/validation/test theo thời gian nếu dữ liệu có yếu tố thời gian.",
      "Chọn recall/PR-AUC/F1 và giải thích chi phí FN/FP.",
      "Đề cập class_weight, resampling hoặc threshold tuning.",
      "Có monitoring drift, human review và logging sau deploy.",
    ],
    sample:
      "Tôi sẽ split theo thời gian để tránh leakage, làm sạch dữ liệu và tạo feature như số giao dịch 24h, merchant risk, amount z-score. Vì fraud hiếm và bỏ sót tốn kém, metric chính là recall tại precision tối thiểu hoặc PR-AUC/F1, không dùng accuracy đơn lẻ. Tôi thử Logistic Regression/Random Forest làm baseline, dùng class_weight hoặc resampling trong train, sau đó tune threshold trên validation. Khi deploy cần human review cho ca confidence thấp, log false positive/false negative, monitor drift và audit theo nhóm người dùng để giảm rủi ro bias.",
  },
  {
    module: "C",
    title: "AI chatbot trả lời thông tin tuyển sinh",
    prompt:
      "Bạn được giao xây MVP chatbot hỏi đáp tuyển sinh. Hãy mô tả kiến trúc, dữ liệu, guardrail và metric.",
    rubric: [
      "Có retrieval từ nguồn chính thức thay vì để model tự bịa.",
      "Có trích nguồn, fallback khi thiếu thông tin hoặc câu nhạy cảm.",
      "Đo hallucination, answer relevance, latency, cost và satisfaction.",
      "Có quy trình cập nhật tài liệu và review log lỗi.",
    ],
    sample:
      "MVP nên dùng RAG: crawler/tài liệu chính thức -> chunk -> embedding -> vector search -> LLM trả lời kèm nguồn. Với câu không có trong tài liệu hoặc liên quan pháp lý/tài chính cá nhân, bot fallback sang hotline/email. Guardrail gồm giới hạn phạm vi, không thu thập dữ liệu nhạy cảm không cần thiết, log ẩn danh và kiểm duyệt prompt injection. Metric gồm answer relevance, groundedness/hallucination rate, latency, cost mỗi phiên, tỉ lệ chuyển tiếp thành công và mức hài lòng. Mỗi tuần review log câu sai để cập nhật knowledge base.",
  },
  {
    module: "D",
    title: "Đạo đức AI trong chấm CV",
    prompt:
      "Một công ty muốn dùng AI để lọc CV tự động. Bạn sẽ thiết kế hệ thống thế nào để giảm bias và vẫn hữu ích?",
    rubric: [
      "Không để AI là quyết định cuối cùng cho case rủi ro cao.",
      "Audit subgroup, kiểm tra feature nhạy cảm và proxy feature.",
      "Giải thích được tiêu chí, có appeal/review thủ công.",
      "Theo dõi false negative của nhóm yếu thế và cập nhật dữ liệu.",
    ],
    sample:
      "Tôi dùng AI như công cụ hỗ trợ xếp ưu tiên, không tự động loại ứng viên ở ngưỡng cứng. Dữ liệu train cần audit theo nhóm, loại hoặc kiểm soát feature nhạy cảm và proxy như địa chỉ/trường nếu gây lệch không hợp lý. Output nên là score kèm lý do dựa trên tiêu chí công việc, có reviewer cuối và cơ chế appeal. Metric không chỉ là accuracy tuyển dụng lịch sử mà còn false negative theo subgroup, calibration và feedback của nhà tuyển dụng. Hệ thống phải log quyết định, bảo vệ dữ liệu cá nhân và được review định kỳ.",
  },
  {
    module: "B",
    title: "Đọc code và trình bày kết quả",
    prompt:
      "Đề cho một đoạn code Python groupby dữ liệu bán hàng, yêu cầu trình bày insight. Bạn sẽ trả lời thế nào để ăn điểm?",
    rubric: [
      "Trace đúng output chính, không chỉ mô tả chung.",
      "Nêu được phép groupby/agg/sort đang làm gì.",
      "Chuyển kết quả thành insight kinh doanh rõ ràng.",
      "Nếu có missing/outlier, nói cách kiểm tra trước khi kết luận.",
    ],
    sample:
      "Tôi sẽ đọc thứ tự biến đổi: tạo cột mới nếu có, groupby theo khóa nào, aggregation tính mean/sum/count, rồi sort theo metric nào. Khi trình bày, tôi nêu kết quả top/bottom cụ thể và insight: ví dụ district C có median price_per_m2 cao nhất nên nên kiểm tra nguồn cung/diện tích. Nếu dữ liệu nhỏ hoặc có outlier, tôi không kết luận quá mạnh mà đề xuất xem số mẫu, median thay mean và kiểm tra missing.",
  },
];

const cheatSheets = [
  {
    title: "ML trong 60 giây",
    items: [
      "Supervised: có nhãn. Classification dự đoán class, regression dự đoán số liên tục.",
      "Unsupervised: không nhãn. K-means để clustering, PCA để giảm chiều.",
      "RL: agent tương tác môi trường để tối đa reward.",
      "Pipeline: data -> clean -> feature -> split -> train -> evaluate -> deploy -> monitor.",
    ],
  },
  {
    title: "Overfit vs underfit",
    items: [
      "Underfit: train/test đều kém. Tăng độ phức tạp model, thêm feature, train lâu hơn.",
      "Overfit: train tốt, test kém. Regularization, cross-validation, thêm dữ liệu, early stopping.",
      "Bias cao thường underfit; variance cao thường overfit.",
    ],
  },
  {
    title: "Metrics cần thuộc",
    items: [
      "Precision = TP/(TP+FP): báo positive có đáng tin không.",
      "Recall = TP/(TP+FN): bắt được bao nhiêu positive thật.",
      "F1 = 2PR/(P+R): cân bằng precision/recall.",
      "MSE phạt lỗi lớn; MAE bền hơn với outlier; RMSE cùng đơn vị với target.",
    ],
  },
  {
    title: "Deep Learning lõi",
    items: [
      "Neuron: activation(w·x+b).",
      "ReLU hidden, sigmoid binary output, softmax multiclass output.",
      "Cross entropy cho classification, MSE cho regression.",
      "Adam phổ biến; learning rate quá lớn dễ không hội tụ.",
    ],
  },
  {
    title: "Python/pandas hay gặp",
    items: [
      "df.head(), df.info(), df.describe(), df.isna().sum().",
      "Lọc dòng: df[df['col'] > value].",
      "Tạo feature: df['new'] = df['a'] / df['b'].",
      "Groupby: df.groupby('key').agg(metric=('col','mean')).",
    ],
  },
  {
    title: "Tự luận ngắn",
    items: [
      "Mở bằng vấn đề và giả định.",
      "Nêu dữ liệu, pipeline, metric, rủi ro.",
      "Đề xuất bước kiểm chứng cụ thể.",
      "Kết lại bằng tradeoff hoặc giới hạn, không hứa AI hoàn hảo.",
    ],
  },
];

const resourceLibrary = [
  {
    category: "VinUni chính thức",
    title: "Thông tin tuyển sinh AI thực chiến - Khóa cơ bản",
    description:
      "Nguồn ưu tiên về đối tượng, phương thức đánh giá đầu vào, quyền lợi và yêu cầu chương trình.",
    url: "https://vinuni.edu.vn/vi/thong-tin-tuyen-sinh-chuong-trinh-dao-tao-nhan-tai-ai-thuc-chien-khoa-co-ban/",
    tags: ["official", "admission", "exam"],
  },
  {
    category: "VinUni chính thức",
    title: "Tuyển sinh Khóa 2 & 3 năm 2026",
    description:
      "Cập nhật các khóa tiếp theo, điều kiện dự tuyển và quyền lợi học viên theo thông báo VinUni.",
    url: "https://vinuni.edu.vn/vi/chinh-thuc-mo-cong-nhan-ho-so-tuyen-sinh-khoa-2-3-chuong-trinh-dao-tao-20-000-nhan-tai-ai-thuc-chien-cua-tap-doan-vingroup/",
    tags: ["official", "2026", "timeline"],
  },
  {
    category: "VinUni chính thức",
    title: "Khai giảng khóa đầu tiên và mô hình 3+3+6",
    description:
      "Nguồn mô tả 12 tuần toàn thời gian, 3 tuần nền tảng, 3 tuần mô phỏng thực chiến và 6 tuần dự án doanh nghiệp.",
    url: "https://vinuni.edu.vn/vi/vingroup-khai-giang-khoa-dau-tien-chuong-trinh-dao-tao-20-000-nhan-tai-ai-thuc-chien/",
    tags: ["official", "3+3+6", "AI product"],
  },
  {
    category: "YouTube Việt Nam",
    title: "Mì AI YouTube",
    description:
      "Kênh Việt Nam về AI/Data Science có nhiều nội dung thực hành. Dùng để học thêm pandas, metrics, AI training và AI agent.",
    url: "https://www.youtube.com/c/MiAIblog",
    tags: ["video", "vietnamese", "practice"],
  },
  {
    category: "Video + bài Việt Nam",
    title: "Mì AI - Precision, Recall và F1 Score",
    description:
      "Bài Việt hóa dễ hiểu về TP/FP/TN/FN, precision, recall, F1. Trang ghi nhận lượt xem cao trong nhóm nội dung metrics.",
    url: "https://www.miai.vn/2020/06/16/oanh-gia-model-ai-theo-cach-mi-an-lien-chuong-2-precision-recall-va-f-score/",
    tags: ["metrics", "classification", "vietnamese"],
  },
  {
    category: "Video + bài Việt Nam",
    title: "Mì AI - Pandas cơ bản",
    description:
      "Bài thực hành tiếng Việt về Series, DataFrame, select/filter/sort/fillna/groupby, hợp phần lập trình và xử lý dữ liệu.",
    url: "https://miai.vn/2020/06/08/da-ds-2-cac-thao-tac-co-ban-voi-du-lieu-bang-thu-vien-pandas/",
    tags: ["pandas", "data", "vietnamese"],
  },
  {
    category: "Video + bài Việt Nam",
    title: "Mì AI - Huấn luyện mô hình AI",
    description:
      "Nội dung gần với pipeline, train/validation/test, epoch/batch, loss, gradient descent, overfitting và underfitting.",
    url: "https://miai.vn/2026/03/23/huan-luyen-mo-hinh-ai-tu-khai-niem-co-ban-den-nang-cao-mi-ai/",
    tags: ["training", "loss", "gradient"],
  },
  {
    category: "Tài liệu Việt Nam",
    title: "Machine Learning Cơ Bản",
    description:
      "Nguồn tiếng Việt kinh điển về Linear Regression, Logistic Regression, SVM, K-means, PCA, Gradient Descent, Backprop.",
    url: "https://machinelearningcoban.com/2016/12/26/introduce/",
    tags: ["ML", "math", "vietnamese"],
  },
  {
    category: "Khóa học Việt Nam",
    title: "VietAI Courses",
    description:
      "Nguồn khóa học AI/ML tiếng Việt, hữu ích nếu bạn muốn học theo bài giảng dài hơi ngoài app này.",
    url: "https://course.vietai.org/",
    tags: ["course", "vietnamese", "ML"],
  },
  {
    category: "Đề cộng đồng",
    title: "AI-TEST cộng đồng - bản hungbil",
    description:
      "Trang đề cương cộng đồng có cấu trúc 10 bài kiểm tra, practice/exam mode, tự luận self-grade; dùng để tham khảo cấu trúc ôn tập.",
    url: "https://hungbil.github.io/AI-TEST/",
    tags: ["mock exam", "community", "AI-TEST"],
  },
  {
    category: "Đề cộng đồng",
    title: "AI-TEST cộng đồng - bản vuongducthoai",
    description:
      "Bản AI-TEST cộng đồng thứ hai bạn gửi; app này chỉ tham khảo cấu trúc đề, không sao chép nguyên văn câu hỏi.",
    url: "https://vuongducthoai.github.io/AI-TEST/",
    tags: ["mock exam", "community", "AI-TEST"],
  },
  {
    category: "YouTube search",
    title: "Tìm video Việt Nam: xác suất, Bayes, thống kê",
    description:
      "Link tìm kiếm YouTube theo chủ đề; dùng bộ lọc của YouTube để chọn video mới/nhiều lượt xem phù hợp gu học.",
    url: "https://www.youtube.com/results?search_query=x%C3%A1c+su%E1%BA%A5t+Bayes+th%E1%BB%91ng+k%C3%AA+machine+learning+ti%E1%BA%BFng+Vi%E1%BB%87t",
    tags: ["youtube", "math", "Bayes"],
  },
  {
    category: "YouTube search",
    title: "Tìm video Việt Nam: Machine Learning cơ bản",
    description:
      "Link tìm kiếm YouTube cho supervised/unsupervised, regression, classification, overfitting và metrics.",
    url: "https://www.youtube.com/results?search_query=machine+learning+c%C6%A1+b%E1%BA%A3n+ti%E1%BA%BFng+Vi%E1%BB%87t+classification+regression",
    tags: ["youtube", "ML", "beginner"],
  },
  {
    category: "YouTube search",
    title: "Tìm video Việt Nam: Deep Learning, CNN, Transformer",
    description:
      "Link tìm kiếm YouTube cho neural network, backpropagation, CNN/RNN/Transformer bằng tiếng Việt.",
    url: "https://www.youtube.com/results?search_query=deep+learning+c%C6%A1+b%E1%BA%A3n+ti%E1%BA%BFng+Vi%E1%BB%87t+CNN+Transformer+backpropagation",
    tags: ["youtube", "DL", "Transformer"],
  },
  {
    category: "Official docs",
    title: "pandas official docs",
    description:
      "Nguồn chính thức cho DataFrame, groupby, fillna, merge và thao tác dữ liệu.",
    url: "https://pandas.pydata.org/docs/",
    tags: ["docs", "pandas", "official"],
  },
  {
    category: "Official docs",
    title: "scikit-learn official docs",
    description:
      "Nguồn chính thức cho train_test_split, cross-validation, metrics, preprocessing và model ML cổ điển.",
    url: "https://scikit-learn.org/stable/user_guide.html",
    tags: ["docs", "sklearn", "official"],
  },
  {
    category: "Official docs",
    title: "PyTorch official docs",
    description:
      "Nguồn chính thức cho nn.Linear, ReLU, Dropout, loss, optimizer và training loop deep learning.",
    url: "https://docs.pytorch.org/docs/stable/index.html",
    tags: ["docs", "PyTorch", "official"],
  },
];

const lessonStudyGuides = {
  "probability-basics": {
    time: "45-60 phút",
    level: "Nền tảng bắt buộc",
    exam: "Rất dễ ra câu tính nhanh hoặc bẫy độc lập/loại trừ.",
    checklist: ["Phân biệt union/intersection/complement", "Biết dùng P(A|B)", "Tính 'ít nhất một' bằng phần bù"],
    deepDive: [
      {
        title: "Cách hiểu thật đơn giản",
        text:
          "Xác suất là cách đo mức chắc chắn của một biến cố. Khi đề nói 'ít nhất một lỗi', cách nhanh nhất thường là tính trường hợp ngược lại 'không lỗi nào' rồi lấy 1 trừ đi. Khi đề nói 'biết rằng B đã xảy ra', bạn đang ở xác suất có điều kiện và mẫu số phải là P(B), không phải toàn bộ không gian ban đầu.",
      },
      {
        title: "Ví dụ cụ thể",
        text:
          "Một dây chuyền có xác suất lỗi 3% mỗi sản phẩm. Kiểm tra 5 sản phẩm độc lập. P(có ít nhất 1 lỗi) = 1 - P(không lỗi nào) = 1 - 0.97^5 ≈ 14.13%. Đây là kiểu câu rất nhanh nếu bạn nhớ dùng phần bù.",
      },
    ],
    resources: [
      { kind: "YouTube Việt", title: "Tìm video xác suất cơ bản tiếng Việt", url: youtubeSearchUrl("xác suất cơ bản biến cố phần bù độc lập tiếng Việt") },
      { kind: "Tài liệu Việt", title: "Wikipedia tiếng Việt - Xác suất", url: "https://vi.wikipedia.org/wiki/X%C3%A1c_su%E1%BA%A5t" },
    ],
  },
  bayes: {
    time: "60 phút",
    level: "Nền tảng + bẫy base rate",
    exam: "Hay ra dạng test y tế/spam/fraud.",
    checklist: ["Không nhầm P(A|B) với P(B|A)", "Viết đủ numerator/evidence", "Luôn để ý prior"],
    deepDive: [
      {
        title: "Cách dựng bảng Bayes",
        text:
          "Đừng nhảy thẳng vào công thức. Hãy tưởng tượng 10.000 người: prior 1% nghĩa là 100 người có bệnh. Sensitivity 99% bắt được 99 người. False positive 5% trên 9.900 người khỏe tạo 495 báo động giả. Vậy trong 594 người dương tính, chỉ 99 người thật sự bệnh.",
      },
      {
        title: "Khi áp dụng ML",
        text:
          "Bayes xuất hiện trong Naive Bayes, spam filter, chẩn đoán, fraud detection và mọi bài toán cần cập nhật niềm tin khi có bằng chứng mới. Class càng hiếm thì càng phải cẩn thận với false positive.",
      },
    ],
    resources: [
      { kind: "YouTube Việt", title: "Tìm video Định lý Bayes tiếng Việt", url: youtubeSearchUrl("Định lý Bayes ví dụ test y tế tiếng Việt") },
      { kind: "Tài liệu Việt", title: "Wikipedia tiếng Việt - Định lý Bayes", url: "https://vi.wikipedia.org/wiki/%C4%90%E1%BB%8Bnh_l%C3%BD_Bayes" },
    ],
  },
  "confusion-matrix": {
    time: "60 phút",
    level: "Bắt buộc cho classification",
    exam: "Rất hay ra vì review có nhắc TP/FP/TN/FN.",
    checklist: ["Vẽ đúng 4 ô", "Tính precision/recall/F1", "Biết khi nào ưu tiên FP/FN"],
    deepDive: [
      {
        title: "Cách nhớ 4 ô",
        text:
          "True/False nói dự đoán đúng hay sai. Positive/Negative nói model dự đoán nhãn gì. TP là model báo có và thực tế có. FP là báo có nhưng thực tế không. FN là báo không nhưng thực tế có, tức bỏ sót.",
      },
      {
        title: "Ví dụ chọn metric",
        text:
          "Spam email: FP là email thật bị đẩy vào spam, rất khó chịu nên cần precision cao. Bệnh nguy hiểm: FN là người bệnh bị bỏ sót, rất nguy hiểm nên cần recall cao.",
      },
    ],
    resources: [
      { kind: "YouTube Việt", title: "Tìm video confusion matrix precision recall F1", url: youtubeSearchUrl("confusion matrix precision recall F1 tiếng Việt") },
      { kind: "Tài liệu Việt", title: "Math2IT - Hiểu Confusion Matrix", url: "https://www.math2it.com/bai-viet/hieu-confusion-matrix/" },
      { kind: "Tài liệu Việt", title: "Mì AI - Precision, Recall, F1", url: "https://www.miai.vn/2020/06/16/oanh-gia-model-ai-theo-cach-mi-an-lien-chuong-2-precision-recall-va-f-score/" },
    ],
  },
  "numpy-deep": {
    time: "90 phút",
    level: "Rất quan trọng cho code/data",
    exam: "Dễ ra câu đọc shape, broadcasting, output của array.",
    checklist: ["Đọc shape", "Phân biệt * và @", "Hiểu axis=0/axis=1", "Biết broadcasting"],
    deepDive: [
      {
        title: "axis=0 và axis=1",
        text:
          "Với ma trận X shape (m, n): axis=0 nghĩa là gom theo chiều hàng để trả kết quả theo từng cột, thường ra shape (n,). axis=1 nghĩa là gom theo chiều cột để trả kết quả theo từng hàng, thường ra shape (m,).",
      },
      {
        title: "Broadcasting trong chuẩn hóa",
        text:
          "X shape (100, 20), mean shape (20,). Khi X - mean, NumPy tự áp mean cho từng dòng. Đây là lý do chuẩn hóa feature chỉ cần một dòng code.",
      },
    ],
    resources: [
      { kind: "YouTube Việt", title: "Tìm video NumPy array broadcasting tiếng Việt", url: youtubeSearchUrl("NumPy array shape broadcasting tiếng Việt") },
      { kind: "Tài liệu", title: "NumPy official - Broadcasting", url: "https://numpy.org/doc/stable/user/basics.broadcasting.html" },
    ],
  },
  "pandas-indexing": {
    time: "90 phút",
    level: "Rất quan trọng cho code pandas",
    exam: "Hay ra đọc code filter/sort/output.",
    checklist: ["Chọn cột đúng", "Dùng loc/iloc", "Dùng & | với mask", "Tạo cột mới"],
    deepDive: [
      {
        title: "Dấu ngoặc đơn và đôi",
        text:
          "df['score'] là Series một chiều. df[['name','score']] là DataFrame hai chiều. Khi đề hỏi output, khác nhau này có thể làm khác format và shape.",
      },
      {
        title: "Mask boolean",
        text:
          "mask = (df['python'] >= 7) & (df['sql'] >= 6). Mỗi điều kiện phải có ngoặc vì toán tử & có ưu tiên khác so với phép so sánh.",
      },
    ],
    resources: [
      { kind: "YouTube Việt", title: "Tìm video pandas loc iloc filter tiếng Việt", url: youtubeSearchUrl("pandas loc iloc filter sort tiếng Việt") },
      { kind: "Tài liệu Việt", title: "Mì AI - Pandas cơ bản", url: "https://miai.vn/2020/06/08/da-ds-2-cac-thao-tac-co-ban-voi-du-lieu-bang-thu-vien-pandas/" },
    ],
  },
  "pandas-groupby-merge": {
    time: "90 phút",
    level: "Thực chiến dữ liệu",
    exam: "Dễ ra case xử lý dữ liệu hoặc đọc code groupby.",
    checklist: ["Biết grain của bảng", "Groupby/agg", "Merge left/inner", "Kiểm tra duplicate/leakage"],
    deepDive: [
      {
        title: "Grain là gì?",
        text:
          "Grain là ý nghĩa của một dòng. Nếu bảng orders có mỗi dòng là một đơn hàng, thì count dòng là số đơn hàng, không phải số user. Muốn số user phải dùng nunique hoặc group theo user trước.",
      },
      {
        title: "Leakage khi tạo feature",
        text:
          "Nếu dự đoán churn tháng 6 nhưng dùng tổng chi tiêu cả năm, bạn đã dùng thông tin tương lai. Feature phải được tính từ dữ liệu có trước thời điểm dự đoán.",
      },
    ],
    resources: [
      { kind: "YouTube Việt", title: "Tìm video pandas groupby merge tiếng Việt", url: youtubeSearchUrl("pandas groupby merge pivot tiếng Việt") },
      { kind: "Tài liệu Việt", title: "Mì AI - Pandas cơ bản", url: "https://miai.vn/2020/06/08/da-ds-2-cac-thao-tac-co-ban-voi-du-lieu-bang-thu-vien-pandas/" },
    ],
  },
  "classic-models": {
    time: "90 phút",
    level: "Bắt buộc ML cơ bản",
    exam: "Có thể hỏi chọn model/nhận diện thuật toán.",
    checklist: ["Linear vs Logistic", "Tree vs Random Forest", "SVM margin", "Baseline trước model phức tạp"],
    deepDive: [
      {
        title: "Chọn model theo bài toán",
        text:
          "Dữ liệu tabular ít mẫu: Logistic Regression/Random Forest thường là baseline tốt. Cần giải thích: Logistic/Decision Tree. Dữ liệu ảnh/text lớn: mới nghĩ đến deep learning hoặc Transformer.",
      },
      {
        title: "Ví dụ phân biệt",
        text:
          "Giá nhà là regression nên Linear Regression/Random Forest Regressor. Spam là classification nên Logistic Regression/SVM/Random Forest Classifier.",
      },
    ],
    resources: [
      { kind: "YouTube Việt", title: "Linear Regression trong 10 phút", url: "https://www.youtube.com/watch?v=Hw4OHKkrsAI" },
      { kind: "Tài liệu Việt", title: "Machine Learning Cơ Bản - Logistic Regression", url: "https://machinelearningcoban.com/2017/01/27/logisticregression/" },
      { kind: "Tài liệu Việt", title: "Machine Learning Cơ Bản - Linear Regression", url: "https://machinelearningcoban.com/2016/12/28/linearregression/" },
    ],
  },
  "kmeans-pca": {
    time: "90 phút",
    level: "Unsupervised trọng tâm",
    exam: "Hay hỏi K-means/PCA là học không nhãn.",
    checklist: ["K-means cần k", "Scale trước clustering", "PCA giảm chiều", "Không dùng label y"],
    deepDive: [
      {
        title: "K-means bằng ngôn ngữ đời thường",
        text:
          "Chọn k tâm cụm, gán mỗi điểm vào tâm gần nhất, rồi cập nhật tâm bằng trung bình các điểm trong cụm. Lặp đến khi tâm gần như không đổi.",
      },
      {
        title: "PCA bằng ngôn ngữ đời thường",
        text:
          "PCA xoay hệ trục để chiều đầu tiên giữ nhiều phương sai nhất, chiều thứ hai giữ nhiều phần còn lại nhất. Giữ vài chiều đầu giúp nén dữ liệu nhưng mất một phần thông tin.",
      },
    ],
    resources: [
      { kind: "YouTube Việt", title: "Tìm video K-means PCA tiếng Việt", url: youtubeSearchUrl("K-means PCA machine learning tiếng Việt") },
      { kind: "Tài liệu Việt", title: "Machine Learning Cơ Bản - K-means", url: "https://machinelearningcoban.com/2017/01/01/kmeans/" },
      { kind: "Tài liệu Việt", title: "Machine Learning Cơ Bản - PCA", url: "https://machinelearningcoban.com/2017/06/15/pca/" },
    ],
  },
  "pipeline-overfit": {
    time: "75 phút",
    level: "Bắt buộc",
    exam: "Hay hỏi overfitting/underfitting và cách xử lý.",
    checklist: ["Pipeline đúng thứ tự", "Train/val/test", "Regularization", "Learning curve"],
    deepDive: [
      {
        title: "Cách chẩn đoán nhanh",
        text:
          "Train kém, validation kém: underfit. Train tốt, validation kém: overfit. Cả hai tốt nhưng test thật kém: có thể data drift, leakage hoặc split không đại diện.",
      },
      {
        title: "Cách sửa",
        text:
          "Underfit: thêm feature/model mạnh hơn/train lâu hơn. Overfit: regularization, giảm độ phức tạp, thêm dữ liệu, cross-validation, early stopping.",
      },
    ],
    resources: [
      { kind: "YouTube Việt", title: "Tìm video overfitting underfitting tiếng Việt", url: youtubeSearchUrl("overfitting underfitting machine learning tiếng Việt") },
      { kind: "Tài liệu Việt", title: "Machine Learning Cơ Bản - Overfitting", url: "https://machinelearningcoban.com/2017/03/04/overfitting/" },
    ],
  },
  "deep-learning-core": {
    time: "90 phút",
    level: "DL nền tảng",
    exam: "Có thể hỏi neuron, activation, loss, optimizer.",
    checklist: ["Neuron w·x+b", "ReLU/sigmoid/tanh", "Cross entropy/MSE", "SGD/Adam"],
    deepDive: [
      {
        title: "Vì sao cần activation?",
        text:
          "Nếu chỉ xếp nhiều layer tuyến tính mà không có activation, toàn bộ mạng vẫn tương đương một phép tuyến tính. Activation tạo phi tuyến để mạng học ranh giới phức tạp.",
      },
      {
        title: "Loss và optimizer",
        text:
          "Loss là điểm phạt model sai. Optimizer là cách cập nhật weight để loss giảm. Adam thường ổn định hơn SGD cơ bản vì tự điều chỉnh bước học theo từng tham số.",
      },
    ],
    resources: [
      { kind: "YouTube Việt", title: "Tìm video neural network deep learning tiếng Việt", url: youtubeSearchUrl("neural network deep learning activation loss optimizer tiếng Việt") },
      { kind: "Tài liệu Việt", title: "Machine Learning Cơ Bản - MLP Backpropagation", url: "https://machinelearningcoban.com/2017/02/24/mlp/" },
    ],
  },
  "backprop-architectures": {
    time: "90 phút",
    level: "DL kiến trúc",
    exam: "Có thể hỏi CNN/RNN/Transformer dùng cho dữ liệu nào.",
    checklist: ["Backprop dùng chain rule", "CNN cho ảnh", "RNN cho chuỗi", "Transformer dùng attention"],
    deepDive: [
      {
        title: "Chọn kiến trúc",
        text:
          "Ảnh: CNN/ViT vì cần nhận pattern không gian. Text: Transformer vì attention mô hình hóa quan hệ token xa gần. Time series: RNN/LSTM/Transformer hoặc model tabular với feature theo cửa sổ thời gian.",
      },
      {
        title: "Attention là gì?",
        text:
          "Attention cho mỗi token hỏi: token nào khác trong câu liên quan đến mình? Sau đó trộn thông tin từ các token liên quan theo trọng số.",
      },
    ],
    resources: [
      { kind: "YouTube Việt", title: "Tìm video CNN RNN Transformer tiếng Việt", url: youtubeSearchUrl("CNN RNN Transformer attention tiếng Việt") },
      { kind: "Tài liệu Việt", title: "Blog tiếng Việt - ChatGPT và Transformer", url: "https://chop.dev/posts/ai--tri-tue-nhan-tao--chatgpt-va-transformer/" },
    ],
  },
  "rag-llm-agent": {
    time: "75 phút",
    level: "Gần chương trình AI thực chiến",
    exam: "Có thể ra tự luận sản phẩm AI/chatbot/agent.",
    checklist: ["RAG pipeline", "Prompt rõ output", "Tool use", "Guardrail", "Fallback"],
    deepDive: [
      {
        title: "Vì sao RAG quan trọng?",
        text:
          "LLM có thể bịa nếu không có nguồn. RAG kéo tài liệu liên quan vào context để câu trả lời bám nguồn hơn, đặc biệt với tuyển sinh, nội quy, tài liệu doanh nghiệp.",
      },
      {
        title: "Agent không chỉ là chatbot",
        text:
          "Agent có thể gọi tool như search, database, email, code runner. Vì có hành động thật, cần permission, logging và confirmation cho hành động rủi ro.",
      },
    ],
    resources: [
      { kind: "YouTube Việt", title: "Tìm video RAG AI Agent tiếng Việt", url: youtubeSearchUrl("RAG AI Agent LLM tiếng Việt") },
      { kind: "Nguồn chính thức", title: "VinUni - AI Agent trong chương trình", url: "https://vinuni.edu.vn/vi/vingroup-khai-giang-khoa-dau-tien-chuong-trinh-dao-tao-20-000-nhan-tai-ai-thuc-chien/" },
    ],
  },
  "logic-ethics": {
    time: "60 phút",
    level: "Tự luận và logic",
    exam: "Có thể ra tình huống ngắn.",
    checklist: ["Điều kiện cần/đủ", "Phủ định mệnh đề", "Fairness", "Human oversight"],
    deepDive: [
      {
        title: "Mẫu trả lời tự luận",
        text:
          "Trả lời theo khung: vấn đề -> giả định -> dữ liệu -> phương án -> metric -> rủi ro -> bước tiếp theo. Câu tự luận tốt không hứa AI hoàn hảo mà thể hiện biết kiểm soát rủi ro.",
      },
      {
        title: "Ví dụ đạo đức",
        text:
          "AI lọc CV có thể học bias lịch sử. Cần audit theo subgroup, không dùng AI làm quyết định cuối cùng, có reviewer và cơ chế khiếu nại.",
      },
    ],
    resources: [
      { kind: "YouTube Việt", title: "Tìm video đạo đức AI fairness privacy tiếng Việt", url: youtubeSearchUrl("đạo đức AI fairness privacy tiếng Việt") },
      { kind: "Nguồn chính thức", title: "VinUni - yêu cầu đạo đức/bảo mật thông tin", url: "https://vinuni.edu.vn/vi/thong-tin-tuyen-sinh-chuong-trinh-dao-tao-nhan-tai-ai-thuc-chien-khoa-co-ban/" },
    ],
  },
};

const studyPlan = [
  {
    day: "Ngày 1",
    title: "Xác suất, Bayes, thống kê",
    detail: "Học Module A phần probability/Bayes, làm 10 câu định lượng và tính metrics thủ công.",
    target: "A",
  },
  {
    day: "Ngày 2",
    title: "Ma trận, đạo hàm, confusion matrix",
    detail: "Ôn shape, dot product, gradient descent, bẫy accuracy trong imbalance.",
    target: "A",
  },
  {
    day: "Ngày 3",
    title: "Python và pandas",
    detail: "Luyện list/dict, groupby, fillna, tạo feature, đọc output code.",
    target: "B",
  },
  {
    day: "Ngày 4",
    title: "ML cổ điển và pipeline",
    detail: "Supervised/unsupervised/RL, model cơ bản, split, leakage, overfit.",
    target: "C",
  },
  {
    day: "Ngày 5",
    title: "Deep Learning và Transformer",
    detail: "Neuron, activation/loss/optimizer, backprop, MLP/CNN/RNN/Transformer.",
    target: "C",
  },
  {
    day: "Ngày 6",
    title: "Logic, ethics, product AI",
    detail: "Luyện câu tự luận 120 từ, fairness/privacy, AI agent và MVP.",
    target: "D",
  },
  {
    day: "Ngày 7",
    title: "Mock test tổng hợp",
    detail: "Làm đề 20 câu, chữa câu sai, xem cheat sheet và viết 2 case ngắn.",
    target: "all",
  },
];

const state = {
  activeView: "dashboard",
  activeModule: "all",
  search: "",
  quiz: {
    title: "",
    questions: [],
    index: 0,
    selected: null,
    answers: [],
    examMode: false,
    remaining: null,
    openResponses: {},
    showOpenAnswer: false,
    marked: [],
    submitted: false,
    reportIndex: 0,
  },
  progress: loadProgress(),
};

let networkAnimationId = null;
let quizTimerId = null;

function loadProgress() {
  try {
    const raw = localStorage.getItem("vinuniPrepProgress");
    if (!raw) {
      return { doneLessons: [], doneLabs: [], caseDrafts: {}, theme: "light" };
    }
    return {
      doneLessons: [],
      doneLabs: [],
      caseDrafts: {},
      theme: "light",
      ...JSON.parse(raw),
    };
  } catch {
    return { doneLessons: [], doneLabs: [], caseDrafts: {}, theme: "light" };
  }
}

function saveProgress() {
  localStorage.setItem("vinuniPrepProgress", JSON.stringify(state.progress));
  renderStats();
}

function $(selector, root = document) {
  return root.querySelector(selector);
}

function $all(selector, root = document) {
  return Array.from(root.querySelectorAll(selector));
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderCodeBlock(code, language = "") {
  const lang = language.trim();
  const label = lang ? `<span class="code-language">${escapeHtml(lang)}</span>` : "";
  const cleanCode = String(code).replace(/^\r?\n/, "").replace(/\r?\n$/, "");
  return `
    <div class="code-block question-code">
      ${label}
      <pre><code>${escapeHtml(cleanCode)}</code></pre>
    </div>
  `;
}

function renderInlineCodeText(text) {
  return escapeHtml(text).replace(/\r?\n/g, "<br>");
}

function renderFormattedSegment(segment) {
  let html = "";
  let paragraph = "";
  const inlineCodeRegex = /`([\s\S]*?)`/g;
  let lastIndex = 0;
  let match;

  const flushParagraph = () => {
    const cleanParagraph = paragraph.replace(/^(<br>)+|(<br>)+$/g, "").trim();
    if (!cleanParagraph) {
      paragraph = "";
      return;
    }
    html += `<p>${cleanParagraph}</p>`;
    paragraph = "";
  };

  while ((match = inlineCodeRegex.exec(segment))) {
    paragraph += renderInlineCodeText(segment.slice(lastIndex, match.index));
    const code = match[1];
    if (/\r?\n/.test(code)) {
      flushParagraph();
      html += renderCodeBlock(code);
    } else {
      paragraph += `<code>${escapeHtml(code)}</code>`;
    }
    lastIndex = inlineCodeRegex.lastIndex;
  }

  paragraph += renderInlineCodeText(segment.slice(lastIndex));
  flushParagraph();
  return html;
}

function renderFormattedText(value) {
  const text = String(value ?? "");
  if (!text) return "";
  const fenceRegex = /```([a-zA-Z0-9_+-]*)[ \t]*\r?\n?([\s\S]*?)```/g;
  let html = "";
  let lastIndex = 0;
  let match;

  while ((match = fenceRegex.exec(text))) {
    html += renderFormattedSegment(text.slice(lastIndex, match.index));
    html += renderCodeBlock(match[2], match[1]);
    lastIndex = fenceRegex.lastIndex;
  }

  html += renderFormattedSegment(text.slice(lastIndex));
  return html || `<p>${escapeHtml(text)}</p>`;
}

function renderInlineCodeBlock(code, language = "") {
  const lang = language.trim();
  const label = lang ? `<span class="code-language">${escapeHtml(lang)}</span>` : "";
  const cleanCode = String(code).replace(/^\r?\n/, "").replace(/\r?\n$/, "");
  return `<span class="inline-code-block">${label}<code>${escapeHtml(cleanCode)}</code></span>`;
}

function renderInlineFormattedSegment(segment) {
  let html = "";
  const inlineCodeRegex = /`([\s\S]*?)`/g;
  let lastIndex = 0;
  let match;

  while ((match = inlineCodeRegex.exec(segment))) {
    html += renderInlineCodeText(segment.slice(lastIndex, match.index));
    const code = match[1];
    html += /\r?\n/.test(code)
      ? renderInlineCodeBlock(code)
      : `<code>${escapeHtml(code)}</code>`;
    lastIndex = inlineCodeRegex.lastIndex;
  }

  html += renderInlineCodeText(segment.slice(lastIndex));
  return html;
}

function renderInlineFormattedText(value) {
  const text = String(value ?? "");
  if (!text) return "";
  const fenceRegex = /```([a-zA-Z0-9_+-]*)[ \t]*\r?\n?([\s\S]*?)```/g;
  let html = "";
  let lastIndex = 0;
  let match;

  while ((match = fenceRegex.exec(text))) {
    html += renderInlineFormattedSegment(text.slice(lastIndex, match.index));
    html += renderInlineCodeBlock(match[2], match[1]);
    lastIndex = fenceRegex.lastIndex;
  }

  html += renderInlineFormattedSegment(text.slice(lastIndex));
  return html || escapeHtml(text);
}

function slugText(value) {
  return String(value)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function youtubeSearchUrl(query) {
  return `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
}

function moduleById(id) {
  return modules.find((module) => module.id === id);
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timeout);
  showToast.timeout = window.setTimeout(() => toast.classList.remove("show"), 2200);
}

function setView(view) {
  state.activeView = view;
  $all(".view").forEach((section) => {
    section.classList.toggle("active-view", section.id === view);
  });
  $all(".nav-item").forEach((button) => {
    button.classList.toggle("active", button.dataset.view === view || (view === "exam" && button.dataset.view === "mock"));
  });
  document.body.classList.remove("menu-open");
  history.replaceState(null, "", `#${view}`);
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
}

function applyTheme(theme) {
  document.body.classList.toggle("dark", theme === "dark");
  state.progress.theme = theme;
  localStorage.setItem("vinuniPrepProgress", JSON.stringify(state.progress));
}

function renderModuleMap() {
  const allQ = getAllQuestions();
  $("#moduleMap").innerHTML = modules
    .map((module) => {
      const count = lessons.filter((lesson) => lesson.module === module.id).length;
      const quizCount = allQ.filter((quiz) => quiz.module === module.id).length;
      return `
        <article class="module-card">
          <header>
            <span class="module-badge ${module.accent}">${module.id}</span>
            <div>
              <h3>${escapeHtml(module.title)}</h3>
              <p>${escapeHtml(module.summary)}</p>
            </div>
          </header>
          <div class="pill-row">
            ${module.tags.map((tag) => `<span class="pill">${escapeHtml(tag)}</span>`).join("")}
          </div>
          <button class="secondary-button" data-module-jump="${module.id}" type="button">
            Học ${count} bài · ${quizCount} câu quiz
          </button>
        </article>
      `;
    })
    .join("");
}

function renderStudyPlan() {
  $("#studyPlanList").innerHTML = studyPlan
    .map(
      (item, index) => `
      <article class="timeline-item">
        <div class="timeline-marker">
          <span>${String(index + 1).padStart(2, "0")}</span>
          <strong>${escapeHtml(item.day)}</strong>
        </div>
        <div class="timeline-copy">
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.detail)}</p>
        </div>
        <button class="tiny-button" data-plan-target="${item.target}" type="button">Mở</button>
      </article>
    `,
    )
    .join("");
}

function renderExamBlueprint() {
  const root = $("#examBlueprint");
  if (!root) return;
  root.innerHTML = `
    <div class="blueprint-main">
      <p class="eyebrow">Exam blueprint</p>
      <h2>${escapeHtml(examBlueprint.title)}</h2>
      <p>${escapeHtml(examBlueprint.note)}</p>
      <div class="blueprint-list">
        ${examBlueprint.items
          .map(
            (item) => `
          <article class="blueprint-item">
            <strong>${escapeHtml(item.id)}</strong>
            <div>
              <h3>${escapeHtml(item.name)}</h3>
              <p>${escapeHtml(item.detail)}</p>
            </div>
          </article>
        `,
          )
          .join("")}
      </div>
    </div>
    <aside class="blueprint-side">
      <h3>Lưu ý trung thực</h3>
      <p>${escapeHtml(examBlueprint.warning)}</p>
      <button class="primary-button" data-view-jump="quiz" type="button">Luyện đề ngay</button>
    </aside>
  `;
}

function renderStats() {
  const totalTasks = lessons.length + labs.length;
  const doneLessons = new Set(state.progress.doneLessons).size;
  const doneLabs = new Set(state.progress.doneLabs).size;
  const doneTasks = doneLessons + doneLabs;
  const percent = totalTasks ? Math.round((doneTasks / totalTasks) * 100) : 0;
  const allQ = getAllQuestions();

  // top-strip counters
  $("#progressPercent").textContent = `${percent}%`;
  $("#lessonCount").textContent = lessons.length;
  $("#quizCount").textContent = allQ.length;
  $("#labCount").textContent = labs.length;

  // per-module stat cards
  const statsGrid = $("#moduleStatsGrid");
  if (!statsGrid) return;
  const doneLessonSet = new Set(state.progress.doneLessons);
  statsGrid.innerHTML = modules.map((m) => {
    const mLessons = lessons.filter((l) => l.module === m.id);
    const mDone = mLessons.filter((l) => doneLessonSet.has(l.id)).length;
    const mQ = allQ.filter((q) => q.module === m.id).length;
    const pct = mLessons.length ? Math.round((mDone / mLessons.length) * 100) : 0;
    const accent = m.accent || "badge-a";
    return `
      <article class="mod-stat-card">
        <div class="mod-stat-header">
          <span class="module-badge ${accent}">${m.id}</span>
          <div>
            <strong>${escapeHtml(m.title)}</strong>
            <p>${mDone}/${mLessons.length} bài đã học</p>
          </div>
        </div>
        <div class="mod-stat-bar">
          <div class="mod-stat-fill" style="width:${pct}%"></div>
        </div>
        <div class="mod-stat-row">
          <span class="mod-stat-num">${mQ}</span><span class="mod-stat-label">câu quiz</span>
          <span class="mod-stat-num">${pct}%</span><span class="mod-stat-label">hoàn thành</span>
          <button class="tiny-button" data-quiz-for="${m.id}" type="button">Quiz 60 câu</button>
        </div>
      </article>`;
  }).join("");
}

function renderMockExams() {
  const root = $("#mockGrid");
  if (!root) return;
  root.innerHTML = fullMockExams
    .map(
      (exam, index) => `
      <article class="mock-card">
        <header>
          <span class="tag">Đề ${index + 1}</span>
          <span class="tag">60 câu</span>
          <span class="tag">90 phút</span>
          <h3>${escapeHtml(exam.title)}</h3>
          <p>${escapeHtml(exam.focus)}</p>
        </header>
        <div class="mock-body">
          <div class="mock-breakdown">
            <span><strong>A</strong>10 câu toán</span>
            <span><strong>B</strong>22 câu code/data</span>
            <span><strong>C</strong>20 câu AI/product</span>
            <span><strong>D</strong>8 câu logic/ethics</span>
          </div>
          <p class="resource-note">
            Gồm trắc nghiệm, code tay/pseudo-code và tự luận tự chấm bằng rubric.
          </p>
          <button class="primary-button" data-start-full-mock="${exam.id}" type="button">Làm đề này</button>
        </div>
      </article>
    `,
    )
    .join("");
}

function renderFilters() {
  const filters = [
    { id: "all", title: "Tất cả" },
    ...modules.map((module) => ({ id: module.id, title: `Module ${module.id}` })),
  ];
  $("#moduleFilters").innerHTML = filters
    .map(
      (filter) => `
      <button class="filter-button ${state.activeModule === filter.id ? "active" : ""}"
        data-module-filter="${filter.id}" type="button">
        ${escapeHtml(filter.title)}
      </button>
    `,
    )
    .join("");

  $("#quizModule").innerHTML = [
    `<option value="all">Tất cả</option>`,
    ...modules.map((module) => `<option value="${module.id}">Module ${module.id}</option>`),
  ].join("");
}

function filteredLessons() {
  const query = state.search.trim().toLowerCase();
  return lessons.filter((lesson) => {
    const inModule = state.activeModule === "all" || lesson.module === state.activeModule;
    if (!inModule) return false;
    if (!query) return true;
    const haystack = [
      lesson.title,
      lesson.summary,
      lesson.formula,
      lesson.trap,
      lesson.example,
      lesson.practice,
      moduleById(lesson.module)?.title,
      ...(lesson.concepts || []),
    ]
      .join(" ")
      .toLowerCase();
    return haystack.includes(query);
  });
}

function renderLessonIndex(items = filteredLessons()) {
  if (!items.length) {
    $("#lessonIndex").innerHTML = `<p class="empty-state">Không tìm thấy bài học phù hợp.</p>`;
    return;
  }
  $("#lessonIndex").innerHTML = items
    .map(
      (lesson) => `
      <a href="#lesson-${lesson.id}">
        Module ${lesson.module}: ${escapeHtml(lesson.title)}
      </a>
    `,
    )
    .join("");
}

function renderLessons() {
  const items = filteredLessons();
  renderLessonIndex(items);
  $("#lessonList").innerHTML = items.length
    ? items.map((lesson, index) => renderLessonCard(lesson, index)).join("")
    : `<div class="empty-state">Không có bài học nào khớp với bộ lọc hiện tại.</div>`;
}

function renderLessonCard(lesson, index = 0) {
  const module = moduleById(lesson.module);
  const done = state.progress.doneLessons.includes(lesson.id);
  return `
    <details class="lesson-card" id="lesson-${lesson.id}" ${index === 0 ? "open" : ""}>
      <summary>
        <div>
          <span class="tag">Module ${lesson.module}</span>
          <h3>${escapeHtml(lesson.title)}</h3>
          <p>${escapeHtml(lesson.summary)}</p>
        </div>
        <span class="lesson-status ${done ? "done" : ""}">${done ? "Đã học" : "Chưa học"}</span>
      </summary>
      <div class="lesson-body">
        ${renderLessonMeta(lesson)}
        <div class="lesson-grid">
          <section class="note-box">
            <h4>Ý chính</h4>
            <ul>${lesson.concepts.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
          </section>
          <section class="formula-box">
            <h4>Công thức / pattern</h4>
            <p>${escapeHtml(lesson.formula)}</p>
          </section>
          <section class="trap-box">
            <h4>Bẫy hay gặp</h4>
            <p>${escapeHtml(lesson.trap)}</p>
          </section>
          <section class="mini-practice">
            <h4>Bài luyện nhanh</h4>
            <p>${escapeHtml(lesson.practice)}</p>
          </section>
        </div>
        <section class="note-box">
          <h4>Ví dụ thi</h4>
          <p>${escapeHtml(lesson.example)}</p>
        </section>
        ${renderLessonDeepDive(lesson)}
        ${renderLessonExtraContent(lesson)}
        ${renderLessonResources(lesson)}
        ${
          lesson.code
            ? `<div class="code-block">
                <button class="copy-button" data-copy-code="${lesson.id}" type="button">Copy</button>
                <pre><code id="code-${lesson.id}">${escapeHtml(lesson.code)}</code></pre>
              </div>`
            : ""
        }
        <div class="lesson-actions">
          <button class="primary-button" data-lesson-quiz="${lesson.id}" type="button">
            Luyện 20 câu bài này
          </button>
          <button class="secondary-button" data-complete-lesson="${lesson.id}" type="button">
            ${done ? "Bỏ đánh dấu" : "Đánh dấu đã học"}
          </button>
          <button class="secondary-button" data-quiz-for="${module.id}" type="button">
            Quiz Module ${module.id}
          </button>
        </div>
      </div>
    </details>
  `;
}

function getLessonGuide(lesson) {
  const guide = lessonStudyGuides[lesson.id] || {};
  return {
    time: guide.time || "45-75 phút",
    level: guide.level || `Module ${lesson.module}`,
    exam: guide.exam || "Ôn để nắm nền, chữa câu sai và viết tự luận chắc hơn.",
    checklist: guide.checklist || ["Thuộc ý chính", "Làm được ví dụ", "Nhận ra bẫy", "Viết lại bằng lời của mình"],
    deepDive: guide.deepDive || [
      {
        title: "Cách học bài này",
        text:
          "Đọc ý chính trước, tự giải ví dụ mà chưa nhìn đáp án, sau đó làm quiz cùng module. Nếu sai, quay lại phần bẫy hay gặp và viết lại công thức bằng lời của bạn.",
      },
    ],
    resources: guide.resources || [],
  };
}

function renderLessonMeta(lesson) {
  const guide = getLessonGuide(lesson);
  return `
    <div class="lesson-meta-grid">
      <div class="lesson-meta-card"><strong>Thời lượng</strong>${escapeHtml(guide.time)}</div>
      <div class="lesson-meta-card"><strong>Mức độ</strong>${escapeHtml(guide.level)}</div>
      <div class="lesson-meta-card"><strong>Khả năng ra đề</strong>${escapeHtml(guide.exam)}</div>
      <div class="lesson-meta-card"><strong>Checklist</strong>${guide.checklist.map((item) => escapeHtml(item)).join(" · ")}</div>
    </div>
  `;
}

function renderLessonDeepDive(lesson) {
  const guide = getLessonGuide(lesson);
  return `
    <section class="lesson-deep">
      ${guide.deepDive
        .map(
          (item) => `
        <article class="deep-card">
          <h4>${escapeHtml(item.title)}</h4>
          <p>${escapeHtml(item.text)}</p>
        </article>
      `,
        )
        .join("")}
    </section>
  `;
}

function renderLessonResources(lesson) {
  const guide = getLessonGuide(lesson);
  const module = moduleById(lesson.module);
  const defaultResources = [
    {
      kind: "YouTube Việt",
      title: `Tìm video: ${lesson.title}`,
      url: youtubeSearchUrl(`${lesson.title} tiếng Việt`),
    },
    {
      kind: "Tài liệu Việt",
      title: module?.id === "C" ? "Machine Learning Cơ Bản" : "Nguồn học tiếng Việt liên quan",
      url: module?.id === "C" ? "https://machinelearningcoban.com/" : youtubeSearchUrl(`${lesson.title} bài viết tiếng Việt`),
    },
  ];
  const resources = [...guide.resources, ...defaultResources].slice(0, 5);
  const seen = new Set();
  const uniqueResources = resources.filter((item) => {
    if (seen.has(item.url)) return false;
    seen.add(item.url);
    return true;
  });
  return `
    <section class="lesson-resources">
      <h4>Xem thêm đúng bài này</h4>
      <div class="resource-links">
        ${uniqueResources
          .map(
            (item) => `
          <a class="resource-link" href="${escapeHtml(item.url)}" target="_blank" rel="noreferrer">
            <span>${escapeHtml(item.kind)}</span>
            <strong>${escapeHtml(item.title)}</strong>
          </a>
        `,
          )
          .join("")}
      </div>
      <p class="resource-note">
        Khi mở YouTube, ưu tiên video tiếng Việt có lượt xem cao, giải thích rõ ví dụ và ngày đăng không quá cũ với nội dung công cụ.
      </p>
    </section>
  `;
}

function startLessonQuiz(lessonId) {
  const pool = window.LESSON_QUIZZES && window.LESSON_QUIZZES[lessonId];
  const lesson = lessons.find((l) => l.id === lessonId);
  if (!pool || !pool.length) {
    showToast("Quiz riêng cho bài này chưa có. Dùng quiz module.");
    return;
  }
  const title = lesson ? `Quiz: ${lesson.title}` : "Quiz bài học";
  setView("quiz");
  startQuiz({ questions: shuffle([...pool]), title, examMode: false });
}

function renderLessonExtraContent(lesson) {
  const extra = window.LESSON_EXTRA_THEORY && window.LESSON_EXTRA_THEORY[lesson.id];
  if (!extra) return "";
  const formulaHtml = extra.allFormulas
    ? `<section class="lesson-deep">
        <article class="deep-card" style="grid-column:1/-1">
          <h4>📐 Tất cả công thức cần thuộc</h4>
          <div class="formula-table">
            ${extra.allFormulas.map((f) => `
              <div class="formula-row">
                <strong>${escapeHtml(f.name)}</strong>
                <code>${escapeHtml(f.formula)}</code>
                <span class="formula-note">${escapeHtml(f.note)}</span>
              </div>
            `).join("")}
          </div>
        </article>
      </section>`
    : "";
  const examplesHtml = extra.workedExamples
    ? `<section class="lesson-deep">
        <article class="deep-card" style="grid-column:1/-1">
          <h4>🔢 Ví dụ có số cụ thể (ôn là làm được)</h4>
          ${extra.workedExamples.map((ex) => `
            <div class="worked-example">
              <h5>${escapeHtml(ex.title)}</h5>
              <p class="example-problem"><strong>Đề:</strong> ${escapeHtml(ex.problem)}</p>
              <ol>${ex.steps.map((s) => `<li>${escapeHtml(s)}</li>`).join("")}</ol>
              <p class="example-answer"><strong>Đáp án:</strong> ${escapeHtml(ex.answer)}</p>
            </div>
          `).join("")}
        </article>
      </section>`
    : "";
  return formulaHtml + examplesHtml;
}

function getAllQuestions() {
  // Merge built-in quizzes with all per-lesson quizzes from lesson-quizzes.js
  const base = [...quizzes];
  if (window.LESSON_QUIZZES) {
    const lessonQs = Object.values(window.LESSON_QUIZZES).flat();
    const baseSet = new Set(base.map((q) => q.q));
    lessonQs.forEach((q) => { if (!baseSet.has(q.q)) base.push(q); });
  }
  return base;
}

function startQuiz(options = {}) {
  const examMode = Boolean(options.examMode);
  let pool = options.questions || [];
  if (!pool.length) {
    const module = examMode ? "all" : $("#quizModule").value;
    const difficulty = examMode ? "all" : $("#quizDifficulty").value;
    const size = examMode ? "all" : $("#quizSize").value;
    pool = getAllQuestions().filter((quiz) => {
      const moduleOk = module === "all" || quiz.module === module;
      const difficultyOk = difficulty === "all" || quiz.difficulty === difficulty;
      return moduleOk && difficultyOk;
    });
    pool = shuffle(pool);
    if (size !== "all") {
      pool = pool.slice(0, Number(size));
    }
  }
  pool = pool.map((question, index) => ({
    ...question,
    id: question.id || `quiz-${index + 1}-${slugText(question.q).slice(0, 36)}`,
    type: question.type || "mcq",
  }));
  stopQuizTimer();
  state.quiz = {
    title: options.title || (examMode ? "Đề mô phỏng 90 phút" : "Đề luyện tập"),
    questions: pool,
    index: 0,
    selected: null,
    answers: [],
    examMode,
    remaining: examMode ? 90 * 60 : null,
    openResponses: {},
    showOpenAnswer: false,
    marked: [],
    submitted: false,
    reportIndex: 0,
  };
  if (examMode) startQuizTimer();
  renderQuestion();
  renderQuizReview();
  showToast(examMode ? "Đã tạo đề mô phỏng 90 phút." : "Đã tạo đề luyện tập.");
}

function startExam() {
  setView("quiz");
  startQuiz({ examMode: true });
}

function startFullMock(examId) {
  const exam = fullMockExams.find((item) => item.id === examId) || fullMockExams[0];
  const questions = Array.isArray(exam.questions) ? exam.questions : buildFullMockQuestions(exam.id);
  startExamSession(exam, questions);
}

function startExamSession(exam, questions) {
  stopQuizTimer();
  state.quiz = {
    title: exam.title,
    questions: questions.map((question, index) => ({
      ...question,
      id: question.id || `${exam.id}-${index + 1}`,
      type: question.type || "mcq",
    })),
    index: 0,
    selected: null,
    answers: [],
    examMode: true,
    remaining: 90 * 60,
    openResponses: {},
    showOpenAnswer: false,
    marked: [],
    submitted: false,
    reportIndex: 0,
  };
  setView("exam");
  startQuizTimer();
  renderExamWorkspace();
  showToast("Đã mở workspace làm đề full 90 phút.");
}

function buildFullMockQuestions(examId) {
  const offset = Math.max(0, fullMockExams.findIndex((exam) => exam.id === examId));
  const pool = [...quizzes, ...extraMockQuestions].map((question, index) => ({
    ...question,
    id: question.id || `mock-mcq-${slugText(question.module)}-${index}`,
    type: question.type || "mcq",
  }));
  const pick = (module, count, extraOffset = 0) => {
    const modulePool = pool.filter((question) => question.module === module);
    return Array.from({ length: count }, (_, index) => {
      const base = modulePool[(index + offset * 7 + extraOffset) % modulePool.length];
      return { ...base, id: `${examId}-${module}-${index + 1}-${base.id}` };
    });
  };
  const pickOpen = (module, count) =>
    Array.from({ length: count }, (_, index) => {
      const modulePool = openMockQuestions[module];
      const base = modulePool[(index + offset) % modulePool.length];
      return { ...base, id: `${examId}-${module}-open-${index + 1}` };
    });

  return [
    ...pick("A", 10),
    ...pick("B", 20, 3),
    ...pickOpen("B", 2),
    ...pick("C", 18, 5),
    ...pickOpen("C", 2),
    ...pick("D", 7, 2),
    ...pickOpen("D", 1),
  ];
}

function startQuizTimer() {
  stopQuizTimer();
  quizTimerId = window.setInterval(() => {
    if (!state.quiz.examMode || state.quiz.remaining === null) return;
    state.quiz.remaining -= 1;
    const timer = $("#quizTimer");
    if (timer) timer.textContent = formatTime(state.quiz.remaining);
    $all(".exam-timer-value").forEach((item) => {
      item.textContent = formatTime(state.quiz.remaining);
    });
    if (state.quiz.remaining <= 0) {
      stopQuizTimer();
      state.quiz.index = state.quiz.questions.length;
      if (state.activeView === "exam") {
        submitExamSession();
      } else {
        renderScore();
      }
      showToast("Hết giờ. Xem kết quả mô phỏng.");
    }
  }, 1000);
}

function stopQuizTimer() {
  if (quizTimerId) {
    window.clearInterval(quizTimerId);
    quizTimerId = null;
  }
}

function formatTime(seconds) {
  const safeSeconds = Math.max(0, seconds || 0);
  const minutes = Math.floor(safeSeconds / 60);
  const remain = safeSeconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(remain).padStart(2, "0")}`;
}

function renderQuestion() {
  const stage = $("#quizStage");
  const { questions, index, selected } = state.quiz;
  if (!questions.length) {
    stage.innerHTML = `
      <div class="empty-state">
        <div>
          <h3>Chưa có đề phù hợp</h3>
          <p>Thử chọn Module "Tất cả" hoặc đổi độ khó.</p>
        </div>
      </div>
    `;
    return;
  }
  if (index >= questions.length) {
    renderScore();
    return;
  }

  const question = questions[index];
  const progress = Math.round((index / questions.length) * 100);
  const isOpenQuestion = question.type === "essay" || question.type === "code";
  const currentAnswer = getCurrentQuizAnswer();
  const answered = Boolean(currentAnswer);
  stage.innerHTML = `
    ${state.quiz.title ? `<p class="eyebrow">${escapeHtml(state.quiz.title)}</p>` : ""}
    <div class="question-meta">
      <span class="tag">Câu ${index + 1}/${questions.length}</span>
      <span class="tag">Module ${question.module}</span>
      <span class="tag">${isOpenQuestion ? (question.type === "code" ? "Code tay" : "Tự luận") : "Trắc nghiệm"}</span>
      <span class="tag">${difficultyLabel(question.difficulty)}</span>
      ${
        state.quiz.examMode
          ? `<span class="tag timer-chip">Còn <span id="quizTimer">${formatTime(state.quiz.remaining)}</span></span>`
          : ""
      }
    </div>
    <div class="progress-bar" aria-hidden="true"><span style="width: ${progress}%"></span></div>
    <div class="question-title" role="heading" aria-level="3">${renderFormattedText(question.q)}</div>
    ${isOpenQuestion ? renderOpenQuestion(question, currentAnswer) : renderMcqQuestion(question, selected)}
    <div class="quiz-footer">
      <span>${state.quiz.answers.filter((answer) => answer.correct).length} câu đúng</span>
      <button class="primary-button" id="nextQuestion" type="button" ${answered ? "" : "disabled"}>
        ${index === questions.length - 1 ? "Xem kết quả" : "Câu tiếp"}
      </button>
    </div>
  `;
}

function renderMcqQuestion(question, selected) {
  return `
    <div class="option-list">
      ${question.options
        .map((option, optionIndex) => {
          let className = "";
          if (selected !== null && optionIndex === question.answer) className = "correct";
          if (selected === optionIndex && selected !== question.answer) className = "wrong";
          return `
            <button class="option-button ${className}" data-option="${optionIndex}" type="button"
              ${selected !== null ? "disabled" : ""}>
              ${renderInlineFormattedText(option)}
            </button>
          `;
        })
        .join("")}
    </div>
    ${
      selected !== null
        ? `<div class="explanation">
            <strong>${selected === question.answer ? "Đúng." : "Chưa đúng."}</strong>
            ${renderFormattedText(question.explanation)}
          </div>`
        : ""
    }
  `;
}

function renderOpenQuestion(question, currentAnswer) {
  const response = state.quiz.openResponses[question.id] || "";
  const showAnswer = state.quiz.showOpenAnswer || Boolean(currentAnswer);
  return `
    <div class="open-response">
      <textarea data-open-response="${question.id}" placeholder="Viết câu trả lời/code/pseudo-code của bạn ở đây...">${escapeHtml(response)}</textarea>
      <div class="hero-actions">
        <button class="secondary-button" data-reveal-open-answer="${question.id}" type="button">Xem đáp án mẫu / rubric</button>
        <button class="primary-button" data-grade-open="pass" type="button" ${showAnswer ? "" : "disabled"}>Tự chấm đạt</button>
        <button class="secondary-button" data-grade-open="fail" type="button" ${showAnswer ? "" : "disabled"}>Chưa đạt</button>
      </div>
    </div>
    ${
      showAnswer
        ? `<div class="explanation">
            <strong>Đáp án mẫu / rubric tự chấm</strong>
            <pre><code>${escapeHtml(question.modelAnswer || "")}</code></pre>
            <ul class="rubric-list">${(question.rubric || []).map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
            ${renderFormattedText(question.explanation || "")}
          </div>`
        : ""
    }
  `;
}

function renderExamWorkspace() {
  const root = $("#examWorkspace");
  if (!root) return;
  const { questions, index } = state.quiz;
  if (!questions.length) {
    root.innerHTML = `<div class="empty-state">Chưa có đề nào đang chạy.</div>`;
    return;
  }
  if (state.quiz.submitted) {
    renderExamReport();
    return;
  }
  const question = questions[index];
  const answeredCount = questions.filter((item) => isExamAnswered(item)).length;
  root.innerHTML = `
    <div class="exam-workspace">
      <aside class="exam-left">
        <button class="secondary-button" data-view-jump="mock" type="button">Quay lại bộ đề</button>
        <h2>${escapeHtml(state.quiz.title || "Bộ đề full")}</h2>
        <div class="exam-summary">
          <div class="exam-summary-row"><span>Đã làm</span><strong>${answeredCount}/${questions.length}</strong></div>
          <div class="exam-summary-row"><span>Đánh dấu</span><strong>${state.quiz.marked.length}</strong></div>
          <div class="exam-summary-row"><span>Thời gian</span><strong class="exam-timer-value">${formatTime(state.quiz.remaining)}</strong></div>
        </div>
        ${renderExamPalette()}
        <div class="exam-legend">
          <span><i class="legend-dot active"></i> Câu đang mở</span>
          <span><i class="legend-dot done"></i> Đã trả lời</span>
          <span><i class="legend-dot marked"></i> Đánh dấu xem lại</span>
        </div>
      </aside>

      <main class="exam-main">
        <section class="exam-top">
          <div>
            <p class="eyebrow">Full mock exam · cấu trúc AI-TEST</p>
            <h1>${escapeHtml(state.quiz.title || "Bộ đề full")}</h1>
            <p>60 câu · 90 phút · A/B/C/D · trắc nghiệm, code tay và tự luận tự chấm sau khi nộp.</p>
          </div>
          <div class="exam-timer exam-timer-value">${formatTime(state.quiz.remaining)}</div>
        </section>
        ${renderExamQuestion(question, index)}
      </main>

      <aside class="exam-right">
        ${renderExamSidePanel()}
      </aside>
    </div>
  `;
}

function renderExamPalette() {
  return `
    <div class="exam-palette">
      ${state.quiz.questions
        .map((question, index) => {
          const active = index === state.quiz.index;
          const answered = isExamAnswered(question);
          const marked = state.quiz.marked.includes(question.id);
          const open = question.type === "essay" || question.type === "code";
          return `
            <button class="exam-qnav ${active ? "active" : ""} ${answered ? "answered" : ""} ${marked ? "marked" : ""} ${open ? "open" : ""}"
              data-exam-goto="${index}" type="button">${index + 1}</button>
          `;
        })
        .join("")}
    </div>
  `;
}

function renderExamQuestion(question, index) {
  const isOpen = question.type === "essay" || question.type === "code";
  const progress = Math.round((index / state.quiz.questions.length) * 100);
  return `
    <article class="exam-card">
      <header class="exam-card-header">
        <div class="question-meta">
          <span class="tag">Câu ${index + 1}/${state.quiz.questions.length}</span>
          <span class="tag">Module ${question.module}</span>
          <span class="tag">${isOpen ? (question.type === "code" ? "Code tay" : "Tự luận") : "Trắc nghiệm"}</span>
          <span class="tag">${difficultyLabel(question.difficulty)}</span>
        </div>
        <div class="progress-bar" aria-hidden="true"><span style="width: ${progress}%"></span></div>
      </header>
      <div class="exam-card-body">
        <div class="question-title" role="heading" aria-level="2">${renderFormattedText(question.q)}</div>
        ${isOpen ? renderExamOpen(question) : renderExamMcq(question)}
        <div class="exam-actions">
          <button class="secondary-button" data-toggle-mark="${question.id}" type="button">
            ${state.quiz.marked.includes(question.id) ? "Bỏ đánh dấu" : "Đánh dấu xem lại"}
          </button>
          <div class="hero-actions">
            <button class="secondary-button" data-exam-prev type="button" ${index === 0 ? "disabled" : ""}>Câu trước</button>
            <button class="primary-button" data-exam-next type="button">${index === state.quiz.questions.length - 1 ? "Đến nộp bài" : "Câu sau"}</button>
          </div>
        </div>
      </div>
    </article>
  `;
}

function renderExamMcq(question) {
  const answer = getAnswerForQuestion(question.id);
  return `
    <div class="option-list">
      ${question.options
        .map(
          (option, optionIndex) => `
          <button class="option-button ${answer?.selected === optionIndex ? "selected" : ""}"
            data-exam-option="${optionIndex}" type="button">
            ${renderInlineFormattedText(option)}
          </button>
        `,
        )
        .join("")}
    </div>
  `;
}

function renderExamOpen(question) {
  const response = state.quiz.openResponses[question.id] || "";
  return `
    <div class="open-response">
      <textarea data-open-response="${question.id}" placeholder="Viết câu trả lời/code/pseudo-code của bạn. Đáp án mẫu và rubric sẽ hiện sau khi nộp bài.">${escapeHtml(response)}</textarea>
      <p class="resource-note">Tip: viết đủ giả định, pipeline/công thức, metric/rủi ro và kết luận ngắn.</p>
    </div>
  `;
}

function renderExamSidePanel() {
  const moduleCounts = ["A", "B", "C", "D"].map((module) => {
    const items = state.quiz.questions.filter((question) => question.module === module);
    const done = items.filter((question) => isExamAnswered(question)).length;
    return { module, done, total: items.length };
  });
  return `
    <h2>Nộp bài & tiến độ</h2>
    <div class="module-report">
      ${moduleCounts
        .map(
          (item) => `
        <article>
          <h3>Module ${item.module}</h3>
          <span class="report-score">${item.done}/${item.total}</span>
          <div class="progress-bar"><span style="width:${item.total ? Math.round((item.done / item.total) * 100) : 0}%"></span></div>
        </article>
      `,
        )
        .join("")}
    </div>
    <div class="hero-actions" style="margin-top:16px">
      <button class="primary-button" data-submit-exam type="button">Nộp bài</button>
      <button class="secondary-button" data-view-jump="theory" type="button">Ôn lý thuyết</button>
    </div>
    <p class="resource-note">Sau khi nộp, app sẽ báo cáo điểm trắc nghiệm theo module và mở rubric cho code/tự luận.</p>
  `;
}

function getAnswerForQuestion(questionId) {
  return state.quiz.answers.find((answer) => answer.question.id === questionId) || null;
}

function isExamAnswered(question) {
  if (question.type === "essay" || question.type === "code") {
    return Boolean((state.quiz.openResponses[question.id] || "").trim());
  }
  return Boolean(getAnswerForQuestion(question.id));
}

function goToExamQuestion(index) {
  state.quiz.index = Math.max(0, Math.min(state.quiz.questions.length - 1, index));
  const question = state.quiz.questions[state.quiz.index];
  const answer = getAnswerForQuestion(question.id);
  state.quiz.selected = answer?.selected ?? null;
  state.quiz.showOpenAnswer = false;
  renderExamWorkspace();
}

function chooseExamOption(optionIndex) {
  const question = state.quiz.questions[state.quiz.index];
  if (!question) return;
  state.quiz.answers = state.quiz.answers.filter((answer) => answer.question.id !== question.id);
  state.quiz.answers.push({
    question,
    selected: optionIndex,
    correct: optionIndex === question.answer,
  });
  state.quiz.selected = optionIndex;
  renderExamWorkspace();
}

function toggleExamMark(questionId) {
  state.quiz.marked = state.quiz.marked.includes(questionId)
    ? state.quiz.marked.filter((id) => id !== questionId)
    : [...state.quiz.marked, questionId];
  renderExamWorkspace();
}

function submitExamSession() {
  stopQuizTimer();
  state.quiz.questions.forEach((question) => {
    if ((question.type === "essay" || question.type === "code") && (state.quiz.openResponses[question.id] || "").trim()) {
      if (!getAnswerForQuestion(question.id)) {
        state.quiz.answers.push({
          question,
          text: state.quiz.openResponses[question.id],
          correct: false,
          needsSelfGrade: true,
        });
      }
    }
  });
  state.quiz.submitted = true;
  const firstProblem = state.quiz.questions.findIndex((question) => getQuestionStatus(question).type !== "correct");
  state.quiz.reportIndex = firstProblem >= 0 ? firstProblem : 0;
  renderExamWorkspace();
}

function gradeReportQuestion(questionId, correct) {
  const question = state.quiz.questions.find((item) => item.id === questionId);
  if (!question) return;
  state.quiz.answers = state.quiz.answers.filter((answer) => answer.question.id !== questionId);
  state.quiz.answers.push({
    question,
    text: state.quiz.openResponses[question.id] || "",
    correct,
  });
  state.quiz.reportIndex = state.quiz.questions.findIndex((item) => item.id === questionId);
  renderExamReport();
}

function getExamReport() {
  const modulesReport = ["A", "B", "C", "D"].map((module) => {
    const items = state.quiz.questions.filter((question) => question.module === module);
    const answered = items.filter((question) => isExamAnswered(question)).length;
    const correct = items.filter((question) => getAnswerForQuestion(question.id)?.correct).length;
    return { module, total: items.length, answered, correct };
  });
  const correct = state.quiz.questions.filter((question) => getAnswerForQuestion(question.id)?.correct).length;
  const answered = state.quiz.questions.filter((question) => isExamAnswered(question)).length;
  const percent = state.quiz.questions.length ? Math.round((correct / state.quiz.questions.length) * 100) : 0;
  const needsReview = state.quiz.questions.filter((question) => {
    const answer = getAnswerForQuestion(question.id);
    return question.type === "essay" || question.type === "code" || !answer?.correct;
  });
  return { modulesReport, correct, answered, percent, needsReview };
}

function renderExamReport() {
  const root = $("#examWorkspace");
  if (!root) return;
  const report = getExamReport();
  const question = state.quiz.questions[state.quiz.reportIndex] || state.quiz.questions[0];
  root.innerHTML = `
    <div class="exam-workspace report-workspace">
      <aside class="exam-left report-left">
        <button class="secondary-button" data-view-jump="mock" type="button">Chọn đề khác</button>
        <h2>Kết quả</h2>
        <div class="exam-summary">
          <div class="exam-summary-row"><span>Điểm hiện tại</span><strong>${report.correct}/${state.quiz.questions.length}</strong></div>
          <div class="exam-summary-row"><span>Đã trả lời</span><strong>${report.answered}/${state.quiz.questions.length}</strong></div>
          <div class="exam-summary-row"><span>Tỉ lệ</span><strong>${report.percent}%</strong></div>
        </div>
        ${renderReportPalette()}
        <div class="exam-legend">
          <span><i class="legend-dot done"></i> Đúng</span>
          <span><i class="legend-dot wrong"></i> Sai</span>
          <span><i class="legend-dot pending"></i> Cần tự chấm</span>
          <span><i class="legend-dot"></i> Chưa làm</span>
        </div>
      </aside>

      <main class="exam-main exam-report">
        <section class="exam-report-hero">
          <div>
            <p class="eyebrow">Báo cáo bài làm</p>
            <h1>${escapeHtml(state.quiz.title || "Bộ đề full")}</h1>
            <p>Bấm từng câu ở palette để xem đáp án, giải thích và rubric giống flow AI-TEST.</p>
          </div>
          <div class="score-number">${report.percent}%</div>
        </section>
        ${renderReportQuestionDetail(question)}
      </main>

      <aside class="exam-right">
        <h2>Theo module</h2>
        <section class="module-report">
          ${report.modulesReport
            .map(
              (item) => `
            <article>
              <h3>Module ${item.module}</h3>
              <span class="report-score">${item.correct}/${item.total}</span>
              <p>${item.answered}/${item.total} câu đã trả lời</p>
              <div class="progress-bar"><span style="width:${item.total ? Math.round((item.correct / item.total) * 100) : 0}%"></span></div>
            </article>
          `,
            )
            .join("")}
        </section>
        <div class="hero-actions" style="margin-top:16px">
          <button class="secondary-button" data-retry-current-exam type="button">Làm lại đề này</button>
          <button class="secondary-button" data-view-jump="theory" type="button">Ôn lý thuyết</button>
        </div>
      </aside>
    </div>
  `;
}

function renderReportPalette() {
  return `
    <div class="exam-palette report-palette">
      ${state.quiz.questions
        .map((question, index) => {
          const status = getQuestionStatus(question);
          const active = index === state.quiz.reportIndex;
          return `
            <button class="exam-qnav report-qnav ${status.type} ${active ? "active" : ""}"
              data-report-goto="${index}" type="button" title="${escapeHtml(status.label)}">
              ${index + 1}
            </button>
          `;
        })
        .join("")}
    </div>
  `;
}

function getQuestionStatus(question) {
  const answer = getAnswerForQuestion(question.id);
  const isOpen = question.type === "essay" || question.type === "code";
  if (isOpen) {
    const hasText = Boolean((state.quiz.openResponses[question.id] || "").trim());
    if (!hasText) return { type: "unanswered", label: "Chưa làm" };
    if (!answer || answer.needsSelfGrade) return { type: "pending", label: "Cần tự chấm" };
    return answer.correct ? { type: "correct", label: "Tự chấm đạt" } : { type: "wrong", label: "Tự chấm chưa đạt" };
  }
  if (!answer) return { type: "unanswered", label: "Chưa làm" };
  return answer.correct ? { type: "correct", label: "Đúng" } : { type: "wrong", label: "Sai" };
}

function renderReportQuestionDetail(question) {
  if (!question) return `<div class="empty-state">Không có câu hỏi.</div>`;
  const index = state.quiz.questions.findIndex((item) => item.id === question.id);
  const status = getQuestionStatus(question);
  const isOpen = question.type === "essay" || question.type === "code";
  return `
    <article class="exam-card report-detail">
      <header class="exam-card-header">
        <div class="question-meta">
          <span class="tag">Câu ${index + 1}/${state.quiz.questions.length}</span>
          <span class="tag">Module ${question.module}</span>
          <span class="tag">${isOpen ? (question.type === "code" ? "Code tay" : "Tự luận") : "Trắc nghiệm"}</span>
          <span class="tag report-status ${status.type}">${escapeHtml(status.label)}</span>
        </div>
      </header>
      <div class="exam-card-body">
        <div class="question-title" role="heading" aria-level="2">${renderFormattedText(question.q)}</div>
        ${isOpen ? renderReportOpenDetail(question) : renderReportMcqDetail(question)}
        <div class="exam-actions">
          <button class="secondary-button" data-report-prev type="button" ${index === 0 ? "disabled" : ""}>Câu trước</button>
          <button class="primary-button" data-report-next type="button" ${index === state.quiz.questions.length - 1 ? "disabled" : ""}>Câu sau</button>
        </div>
      </div>
    </article>
  `;
}

function renderReportMcqDetail(question) {
  const answer = getAnswerForQuestion(question.id);
  return `
    <div class="option-list report-options">
      ${question.options
        .map((option, optionIndex) => {
          const correct = optionIndex === question.answer;
          const selected = answer?.selected === optionIndex;
          const wrong = selected && !correct;
          return `
            <div class="option-button ${correct ? "correct" : ""} ${wrong ? "wrong" : ""} ${selected ? "selected" : ""}">
              ${renderInlineFormattedText(option)}
              ${correct ? "<strong>Đáp án đúng</strong>" : ""}
              ${wrong ? "<strong>Bạn chọn</strong>" : ""}
            </div>
          `;
        })
        .join("")}
    </div>
    <div class="explanation">
      <strong>Giải thích</strong>
      ${renderFormattedText(question.explanation || "Chưa có giải thích.")}
    </div>
  `;
}

function renderReportOpenDetail(question) {
  const answer = getAnswerForQuestion(question.id);
  return `
    <div class="output-box">
      <h4>Bài của bạn</h4>
      <p>${escapeHtml(state.quiz.openResponses[question.id] || "Chưa trả lời")}</p>
    </div>
    <div class="code-block"><pre><code>${escapeHtml(question.modelAnswer || "")}</code></pre></div>
    <div class="explanation">
      <strong>Rubric tự chấm</strong>
      <ul class="rubric-list">${(question.rubric || []).map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
      ${renderFormattedText(question.explanation || "")}
    </div>
    <div class="hero-actions">
      <button class="primary-button" data-report-grade="${question.id}" data-grade-value="pass" type="button">
        ${answer?.correct ? "Đã chấm đạt" : "Tự chấm đạt"}
      </button>
      <button class="secondary-button" data-report-grade="${question.id}" data-grade-value="fail" type="button">
        ${answer && !answer.correct && !answer.needsSelfGrade ? "Đã chấm chưa đạt" : "Chưa đạt"}
      </button>
    </div>
  `;
}

function renderExamReviewItem(question) {
  const answer = getAnswerForQuestion(question.id);
  const isOpen = question.type === "essay" || question.type === "code";
  if (isOpen) {
    return `
      <article class="review-item">
        <strong>Module ${question.module} · ${question.type === "code" ? "Code tay" : "Tự luận"}</strong>
        <div class="review-question">${renderFormattedText(question.q)}</div>
        <div class="output-box"><h4>Bài của bạn</h4><p>${escapeHtml(state.quiz.openResponses[question.id] || "Chưa trả lời")}</p></div>
        <div class="code-block"><pre><code>${escapeHtml(question.modelAnswer || "")}</code></pre></div>
        <ul class="rubric-list">${(question.rubric || []).map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
        <div class="hero-actions">
          <button class="primary-button" data-report-grade="${question.id}" data-grade-value="pass" type="button">Tự chấm đạt</button>
          <button class="secondary-button" data-report-grade="${question.id}" data-grade-value="fail" type="button">Chưa đạt</button>
        </div>
      </article>
    `;
  }
  return `
    <article class="review-item">
      <strong>Module ${question.module} · Trắc nghiệm</strong>
      <div class="review-question">${renderFormattedText(question.q)}</div>
      <div class="answer-line"><span>Đáp án của bạn:</span><strong>${answer ? renderInlineFormattedText(question.options[answer.selected]) : "Chưa trả lời"}</strong></div>
      <div class="answer-line"><span>Đáp án đúng:</span><strong>${renderInlineFormattedText(question.options[question.answer])}</strong></div>
      ${renderFormattedText(question.explanation || "")}
    </article>
  `;
}

function renderScore() {
  stopQuizTimer();
  const { questions, answers } = state.quiz;
  const correct = answers.filter((answer) => answer.correct).length;
  const percent = questions.length ? Math.round((correct / questions.length) * 100) : 0;
  const message =
    percent >= 85
      ? "Rất ổn. Giữ nhịp và chữa kỹ câu sai."
      : percent >= 65
        ? "Đã có nền. Cần ôn lại bẫy metrics, Bayes và leakage."
        : "Nên quay lại theory deck và làm lại quiz theo từng module.";
  $("#quizStage").innerHTML = `
    <div class="score-card">
      <span class="score-number">${percent}%</span>
      <h3>${correct}/${questions.length} câu đúng</h3>
      <p>${escapeHtml(message)}</p>
      <div class="hero-actions" style="justify-content:center">
        <button class="primary-button" id="restartQuiz" type="button">Làm đề mới</button>
        <button class="secondary-button" data-view-jump="theory" type="button">Ôn lý thuyết</button>
      </div>
    </div>
  `;
  renderQuizReview();
}

function renderQuizReview() {
  const review = $("#quizReview");
  const { answers } = state.quiz;
  const wrong = answers.filter((answer) => !answer.correct);
  if (!answers.length) {
    review.innerHTML = `
      <h3>Review lỗi</h3>
      <p class="empty-state">Sau khi làm quiz, câu sai sẽ hiện ở đây để bạn chữa nhanh.</p>
    `;
    return;
  }
  review.innerHTML = `
    <h3>Review lỗi</h3>
    <div class="review-list">
      ${
        wrong.length
          ? wrong
              .map(
                (answer) => `
          <article class="review-item">
            <strong>Module ${answer.question.module}</strong>
            <div class="review-question">${renderFormattedText(answer.question.q)}</div>
            ${renderFormattedText(answer.question.explanation)}
          </article>
        `,
              )
              .join("")
          : `<article class="review-item"><strong>Không có câu sai</strong><p>Đề này xử lý gọn. Tăng độ khó lên một nấc.</p></article>`
      }
    </div>
  `;
}

function difficultyLabel(value) {
  return { easy: "Dễ", medium: "Trung bình", hard: "Khó" }[value] || value;
}

function selectOption(index) {
  const question = state.quiz.questions[state.quiz.index];
  if (!question || state.quiz.selected !== null) return;
  state.quiz.selected = index;
  state.quiz.answers = state.quiz.answers.filter((answer) => answer.question.id !== question.id);
  state.quiz.answers.push({
    question,
    selected: index,
    correct: index === question.answer,
  });
  if (state.activeView === "exam") {
    renderExamWorkspace();
  } else {
    renderQuestion();
  }
}

function getCurrentQuizAnswer() {
  const question = state.quiz.questions[state.quiz.index];
  if (!question) return null;
  return state.quiz.answers.find((answer) => answer.question.id === question.id) || null;
}

function revealOpenAnswer() {
  state.quiz.showOpenAnswer = true;
  if (state.activeView === "exam") {
    renderExamWorkspace();
  } else {
    renderQuestion();
  }
}

function gradeOpenQuestion(correct) {
  const question = state.quiz.questions[state.quiz.index];
  if (!question) return;
  state.quiz.answers = state.quiz.answers.filter((answer) => answer.question.id !== question.id);
  state.quiz.answers.push({
    question,
    text: state.quiz.openResponses[question.id] || "",
    correct,
  });
  state.quiz.showOpenAnswer = true;
  if (state.activeView === "exam") {
    renderExamWorkspace();
  } else {
    renderQuestion();
  }
}

function nextQuestion() {
  state.quiz.index += 1;
  state.quiz.selected = null;
  state.quiz.showOpenAnswer = false;
  if (state.activeView === "exam") {
    renderExamWorkspace();
  } else {
    renderQuestion();
  }
}

function shuffle(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function renderLabs() {
  $("#labGrid").innerHTML = labs
    .map((lab) => {
      const done = state.progress.doneLabs.includes(lab.id);
      return `
        <article class="lab-card" id="${lab.id}">
          <header>
            <span class="tag">Module ${lab.module}</span>
            <h3>${escapeHtml(lab.title)}</h3>
            <p>${escapeHtml(lab.objective)}</p>
          </header>
          <div class="lab-body">
            <textarea class="editor" id="editor-${lab.id}" spellcheck="false">${escapeHtml(lab.starter)}</textarea>
            <div class="lab-actions">
              <button class="primary-button" data-check-lab="${lab.id}" type="button">
                ${lab.runner === "js" ? "Chạy test" : "Chấm nhanh"}
              </button>
              <button class="secondary-button" data-show-solution="${lab.id}" type="button">Hiện đáp án</button>
              <button class="tiny-button" data-reset-lab="${lab.id}" type="button">Reset</button>
              <span class="lesson-status ${done ? "done" : ""}">${done ? "Đã qua" : "Chưa qua"}</span>
            </div>
            <div class="check-result" id="result-${lab.id}">
              ${
                lab.runner === "js"
                  ? "Lab này chạy JavaScript thật trong Web Worker và chấm bằng test case."
                  : "Bộ kiểm tra sẽ tìm các bước chính trong lời giải Python."
              }
            </div>
            <div class="lab-output" id="output-${lab.id}" hidden>
              <strong>Output</strong>
              <pre></pre>
            </div>
            <div class="answer-box" id="answer-${lab.id}">
              <div class="code-block">
                <button class="copy-button" data-copy-solution="${lab.id}" type="button">Copy</button>
                <pre><code id="solution-${lab.id}">${escapeHtml(lab.solution)}</code></pre>
              </div>
              <div class="output-box">
                <h4>Expected output</h4>
                <p>${escapeHtml(lab.expected)}</p>
              </div>
            </div>
          </div>
        </article>
      `;
    })
    .join("");
}

function checkLab(labId) {
  const lab = labs.find((item) => item.id === labId);
  const editor = $(`#editor-${labId}`);
  const result = $(`#result-${labId}`);
  if (!lab || !editor || !result) return;
  const code = editor.value;
  if (lab.runner === "js") {
    runJavaScriptLab(lab, code);
    return;
  }
  const missing = lab.checks.filter((check) => !check.pattern.test(code));
  if (!missing.length) {
    result.className = "check-result pass";
    result.textContent = "Đạt. Lời giải có đủ các bước chính. Bạn nên chạy lại trong Python/Jupyter để kiểm tra output thật.";
    if (!state.progress.doneLabs.includes(labId)) {
      state.progress.doneLabs.push(labId);
      saveProgress();
      const status = document.getElementById(labId)?.querySelector(".lesson-status");
      if (status) {
        status.classList.add("done");
        status.textContent = "Đã qua";
      }
      showToast("Đã ghi nhận code lab hoàn thành.");
    }
    return;
  }
  result.className = "check-result fail";
  result.textContent = `Còn thiếu: ${missing.map((check) => check.label).join(", ")}.`;
}

function markLabDone(labId) {
  if (!state.progress.doneLabs.includes(labId)) {
    state.progress.doneLabs.push(labId);
    saveProgress();
  }
  const status = document.getElementById(labId)?.querySelector(".lesson-status");
  if (status) {
    status.classList.add("done");
    status.textContent = "Đã qua";
  }
}

function runJavaScriptLab(lab, code) {
  const result = $(`#result-${lab.id}`);
  const output = $(`#output-${lab.id}`);
  const outputPre = output?.querySelector("pre");
  if (!result || !output || !outputPre) return;

  result.className = "check-result";
  result.textContent = "Đang chạy test trong sandbox...";
  output.hidden = false;
  outputPre.textContent = "";

  const workerSource = `
    self.onmessage = (event) => {
      const data = event.data;
      const logs = [];
      const fakeConsole = {
        log: (...args) => logs.push(args.map((value) => {
          if (typeof value === "object") {
            try { return JSON.stringify(value); } catch { return String(value); }
          }
          return String(value);
        }).join(" "))
      };
      const tests = data.tests || [];
      const testCode = tests.map((test) => {
        return "try { __results.push({ label: " + JSON.stringify(test.label) +
          ", pass: Boolean(" + test.expression + "), expected: " + JSON.stringify(test.expected) +
          " }); } catch (error) { __results.push({ label: " + JSON.stringify(test.label) +
          ", pass: false, expected: " + JSON.stringify(test.expected) +
          ", error: String(error && error.message ? error.message : error) }); }";
      }).join("\\n");
      try {
        const runner = new Function("console", '"use strict";\\n' + data.code + '\\nconst __results = [];\\n' + testCode + '\\nreturn __results;');
        const results = runner(fakeConsole);
        self.postMessage({ ok: true, logs, results });
      } catch (error) {
        self.postMessage({ ok: false, logs, error: String(error && error.message ? error.message : error) });
      }
    };
  `;
  const blob = new Blob([workerSource], { type: "text/javascript" });
  const worker = new Worker(URL.createObjectURL(blob));
  const timeout = window.setTimeout(() => {
    worker.terminate();
    result.className = "check-result fail";
    result.textContent = "Code chạy quá lâu hoặc có vòng lặp vô hạn. Hãy kiểm tra lại.";
    outputPre.textContent = "Timeout after 1200ms";
  }, 1200);

  worker.onmessage = (event) => {
    window.clearTimeout(timeout);
    worker.terminate();
    const data = event.data;
    if (!data.ok) {
      result.className = "check-result fail";
      result.textContent = `Lỗi runtime/syntax: ${data.error}`;
      outputPre.textContent = data.logs?.join("\n") || "";
      return;
    }
    const failed = data.results.filter((item) => !item.pass);
    outputPre.textContent = [
      ...(data.logs?.length ? [`console.log:\n${data.logs.join("\n")}`] : []),
      "Test results:",
      ...data.results.map(
        (item) =>
          `${item.pass ? "PASS" : "FAIL"} - ${item.label}${item.pass ? "" : ` | expected: ${item.expected}${item.error ? ` | error: ${item.error}` : ""}`}`,
      ),
    ].join("\n");

    if (!failed.length) {
      result.className = "check-result pass";
      result.textContent = "Tất cả test pass. Lab này đã chạy thật trong trình duyệt.";
      markLabDone(lab.id);
    } else {
      result.className = "check-result fail";
      result.textContent = `Còn ${failed.length} test chưa pass. Xem Output để sửa.`;
    }
  };

  worker.postMessage({ code, tests: lab.tests || [] });
}

function renderCases() {
  $("#caseGrid").innerHTML = cases
    .map((item, index) => {
      const id = `case-${index}`;
      const draft = state.progress.caseDrafts[id] || "";
      return `
        <article class="case-card">
          <header>
            <span class="tag">Module ${item.module}</span>
            <h3>${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.prompt)}</p>
          </header>
          <div class="case-body">
            <h4>Rubric ăn điểm</h4>
            <ul class="rubric">
              ${item.rubric.map((rule) => `<li>${escapeHtml(rule)}</li>`).join("")}
            </ul>
            <label>
              Bản nháp của bạn
              <textarea class="case-writing" data-case-draft="${id}" placeholder="Viết khoảng 100-150 từ...">${escapeHtml(draft)}</textarea>
            </label>
            <div class="lab-actions">
              <button class="secondary-button" data-show-case="${id}" type="button">Xem mẫu trả lời</button>
              <button class="tiny-button" data-save-case="${id}" type="button">Lưu nháp</button>
            </div>
            <div class="answer-box" id="answer-${id}">
              <div class="note-box">
                <h4>Mẫu trả lời</h4>
                <p>${escapeHtml(item.sample)}</p>
              </div>
            </div>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderCheatSheet() {
  $("#cheatSheetGrid").innerHTML = cheatSheets
    .map(
      (sheet) => `
      <article class="cheat-card">
        <header>
          <h3>${escapeHtml(sheet.title)}</h3>
        </header>
        <div class="cheat-body">
          <ul>
            ${sheet.items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
          </ul>
        </div>
      </article>
    `,
    )
    .join("");
}

function renderResources() {
  const root = $("#resourceGrid");
  if (!root) return;
  root.innerHTML = resourceLibrary
    .map(
      (resource) => `
      <article class="resource-card">
        <div class="resource-meta">
          <span class="tag">${escapeHtml(resource.category)}</span>
          ${resource.tags.map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("")}
        </div>
        <h3>${escapeHtml(resource.title)}</h3>
        <p>${escapeHtml(resource.description)}</p>
        <a href="${escapeHtml(resource.url)}" target="_blank" rel="noreferrer">Mở nguồn</a>
      </article>
    `,
    )
    .join("");
}

function copyText(text) {
  if (navigator.clipboard?.writeText) {
    navigator.clipboard.writeText(text).then(() => showToast("Đã copy code."));
    return;
  }
  const area = document.createElement("textarea");
  area.value = text;
  document.body.append(area);
  area.select();
  document.execCommand("copy");
  area.remove();
  showToast("Đã copy code.");
}

function completeLesson(lessonId) {
  const done = state.progress.doneLessons.includes(lessonId);
  state.progress.doneLessons = done
    ? state.progress.doneLessons.filter((id) => id !== lessonId)
    : [...state.progress.doneLessons, lessonId];
  saveProgress();
  renderLessons();
  showToast(done ? "Đã bỏ đánh dấu bài học." : "Đã đánh dấu hoàn thành bài học.");
}

function saveCaseDraft(caseId) {
  const textarea = $(`[data-case-draft="${caseId}"]`);
  if (!textarea) return;
  state.progress.caseDrafts[caseId] = textarea.value;
  saveProgress();
  showToast("Đã lưu nháp tự luận.");
}

function resetProgress() {
  if (!confirm("Reset toàn bộ tiến độ học, lab và nháp tự luận?")) return;
  state.progress.doneLessons = [];
  state.progress.doneLabs = [];
  state.progress.caseDrafts = {};
  saveProgress();
  renderLessons();
  renderLabs();
  renderCases();
  showToast("Đã reset tiến độ.");
}

function drawNetwork() {
  const canvas = $("#networkCanvas");
  if (!canvas) return;
  if (networkAnimationId) {
    cancelAnimationFrame(networkAnimationId);
    networkAnimationId = null;
  }
  const ctx = canvas.getContext("2d");
  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  canvas.width = Math.max(1, Math.floor(rect.width * dpr));
  canvas.height = Math.max(1, Math.floor(rect.height * dpr));
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  const width = rect.width;
  const height = rect.height;
  const layers = [4, 6, 5, 3];
  const nodes = layers.map((count, layerIndex) => {
    const x = 50 + (layerIndex * (width - 100)) / (layers.length - 1);
    return Array.from({ length: count }, (_, nodeIndex) => {
      const y = 55 + (nodeIndex * (height - 110)) / Math.max(1, count - 1);
      return { x, y };
    });
  });

  let frame = 0;
  function animate() {
    frame += 0.018;
    ctx.clearRect(0, 0, width, height);
    const grid = ctx.createLinearGradient(0, 0, width, height);
    grid.addColorStop(0, "rgba(96, 165, 250, 0.16)");
    grid.addColorStop(1, "rgba(45, 212, 191, 0.12)");
    ctx.fillStyle = grid;
    ctx.fillRect(0, 0, width, height);

    ctx.lineWidth = 1;
    for (let i = 0; i < nodes.length - 1; i += 1) {
      nodes[i].forEach((a, ai) => {
        nodes[i + 1].forEach((b, bi) => {
          const pulse = (Math.sin(frame * 4 + ai * 0.8 + bi * 0.45 + i) + 1) / 2;
          ctx.strokeStyle = `rgba(147, 197, 253, ${0.13 + pulse * 0.22})`;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        });
      });
    }

    nodes.forEach((layer, layerIndex) => {
      layer.forEach((node, nodeIndex) => {
        const pulse = (Math.sin(frame * 5 + layerIndex + nodeIndex * 0.7) + 1) / 2;
        ctx.beginPath();
        ctx.arc(node.x, node.y, 8 + pulse * 3, 0, Math.PI * 2);
        ctx.fillStyle =
          layerIndex === nodes.length - 1
            ? `rgba(251, 191, 36, ${0.72 + pulse * 0.2})`
            : layerIndex === 0
              ? `rgba(45, 212, 191, ${0.72 + pulse * 0.2})`
              : `rgba(96, 165, 250, ${0.7 + pulse * 0.22})`;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(node.x, node.y, 15 + pulse * 4, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(255,255,255,0.16)";
        ctx.stroke();
      });
    });

    networkAnimationId = requestAnimationFrame(animate);
  }
  animate();
}

function initEvents() {
  document.addEventListener("click", (event) => {
    const target = event.target.closest("button, a");
    if (!target) return;

    if (target.matches(".nav-item")) {
      setView(target.dataset.view);
    }

    if (target.dataset.viewJump) {
      setView(target.dataset.viewJump);
    }

    if (target.dataset.moduleJump) {
      state.activeModule = target.dataset.moduleJump;
      renderFilters();
      renderLessons();
      setView("theory");
    }

    if (target.dataset.planTarget) {
      if (target.dataset.planTarget === "all") {
        setView("quiz");
        startQuiz({ examMode: true });
      } else {
        state.activeModule = target.dataset.planTarget;
        renderFilters();
        renderLessons();
        setView("theory");
      }
    }

    if (target.dataset.moduleFilter) {
      state.activeModule = target.dataset.moduleFilter;
      renderFilters();
      renderLessons();
    }

    if (target.dataset.startFullMock) {
      startFullMock(target.dataset.startFullMock);
    }

    if (target.dataset.examGoto) {
      goToExamQuestion(Number(target.dataset.examGoto));
    }

    if (target.dataset.examOption) {
      chooseExamOption(Number(target.dataset.examOption));
    }

    if (target.hasAttribute("data-exam-prev")) {
      goToExamQuestion(state.quiz.index - 1);
    }

    if (target.hasAttribute("data-exam-next")) {
      if (state.quiz.index >= state.quiz.questions.length - 1) {
        const unanswered = state.quiz.questions.filter((question) => !isExamAnswered(question)).length;
        if (unanswered) showToast(`Còn ${unanswered} câu chưa trả lời. Bạn vẫn có thể nộp ở panel bên phải.`);
      }
      goToExamQuestion(state.quiz.index + 1);
    }

    if (target.dataset.toggleMark) {
      toggleExamMark(target.dataset.toggleMark);
    }

    if (target.hasAttribute("data-submit-exam")) {
      submitExamSession();
    }

    if (target.dataset.reportGrade) {
      gradeReportQuestion(target.dataset.reportGrade, target.dataset.gradeValue === "pass");
    }

    if (target.dataset.reportGoto) {
      state.quiz.reportIndex = Number(target.dataset.reportGoto);
      renderExamReport();
    }

    if (target.hasAttribute("data-report-prev")) {
      state.quiz.reportIndex = Math.max(0, state.quiz.reportIndex - 1);
      renderExamReport();
    }

    if (target.hasAttribute("data-report-next")) {
      state.quiz.reportIndex = Math.min(state.quiz.questions.length - 1, state.quiz.reportIndex + 1);
      renderExamReport();
    }

    if (target.hasAttribute("data-retry-current-exam")) {
      const current = fullMockExams.find((exam) => exam.title === state.quiz.title) || fullMockExams[0];
      startFullMock(current.id);
    }

    if (target.dataset.lessonQuiz) {
      startLessonQuiz(target.dataset.lessonQuiz);
    }

    if (target.dataset.completeLesson) {
      completeLesson(target.dataset.completeLesson);
    }

    if (target.dataset.quizFor) {
      $("#quizModule").value = target.dataset.quizFor;
      $("#quizSize").value = "60";
      setView("quiz");
      startQuiz();
    }

    if (target.dataset.copyCode) {
      const lesson = lessons.find((item) => item.id === target.dataset.copyCode);
      if (lesson?.code) copyText(lesson.code);
    }

    if (target.dataset.copySolution) {
      const lab = labs.find((item) => item.id === target.dataset.copySolution);
      if (lab?.solution) copyText(lab.solution);
    }

    if (target.dataset.checkLab) {
      checkLab(target.dataset.checkLab);
    }

    if (target.dataset.showSolution) {
      $(`#answer-${target.dataset.showSolution}`)?.classList.toggle("show");
    }

    if (target.dataset.resetLab) {
      const lab = labs.find((item) => item.id === target.dataset.resetLab);
      const editor = $(`#editor-${target.dataset.resetLab}`);
      if (lab && editor) editor.value = lab.starter;
    }

    if (target.dataset.showCase) {
      $(`#answer-${target.dataset.showCase}`)?.classList.toggle("show");
    }

    if (target.dataset.saveCase) {
      saveCaseDraft(target.dataset.saveCase);
    }

    if (target.matches("[data-option]")) {
      selectOption(Number(target.dataset.option));
    }

    if (target.dataset.revealOpenAnswer) {
      revealOpenAnswer();
    }

    if (target.dataset.gradeOpen) {
      gradeOpenQuestion(target.dataset.gradeOpen === "pass");
    }

    if (target.id === "nextQuestion") {
      nextQuestion();
    }

    if (target.id === "restartQuiz") {
      startQuiz();
    }
  });

  document.addEventListener("input", (event) => {
    const target = event.target;
    if (target instanceof HTMLTextAreaElement && target.dataset.openResponse) {
      state.quiz.openResponses[target.dataset.openResponse] = target.value;
    }
  });

  $("#startQuiz").addEventListener("click", startQuiz);
  $("#startExam").addEventListener("click", startExam);
  $("#menuToggle").addEventListener("click", () => document.body.classList.toggle("menu-open"));
  $("#themeToggle").addEventListener("click", () => {
    applyTheme(document.body.classList.contains("dark") ? "light" : "dark");
  });
  $("#resetProgress").addEventListener("click", resetProgress);
  $("#globalSearch").addEventListener("input", (event) => {
    state.search = event.target.value;
    renderLessons();
    if (state.search.trim()) setView("theory");
  });

  window.addEventListener("resize", debounce(drawNetwork, 180));
}

function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

function init() {
  applyTheme(state.progress.theme || "light");
  renderModuleMap();
  renderExamBlueprint();
  renderStudyPlan();
  renderStats();
  renderFilters();
  renderLessons();
  renderMockExams();
  renderLabs();
  renderCases();
  renderCheatSheet();
  renderResources();
  initEvents();
  drawNetwork();
  renderQuestion();
  renderQuizReview();

  const hash = location.hash.replace("#", "");
  if (hash && $(`#${hash}.view`)) {
    setView(hash);
  }
}

init();
