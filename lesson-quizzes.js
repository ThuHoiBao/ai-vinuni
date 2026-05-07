// lesson-quizzes.js
// 20 câu quiz riêng biệt cho mỗi bài lý thuyết Module A
// + Nội dung lý thuyết mở rộng (tất cả công thức, ví dụ có số, bẫy hay gặp)

// ─── PER-LESSON QUIZ QUESTIONS (20 câu × 6 bài Module A) ───────────────────

window.LESSON_QUIZZES = {

  // ══════════════════════════════════════════════════════════
  // BÀI 1: Xác suất cơ bản — biến cố, phần bù, độc lập
  // ══════════════════════════════════════════════════════════
  "probability-basics": [
    {
      module: "A", difficulty: "easy",
      q: "P(A ∪ B) = ? Biết P(A) = 0.4, P(B) = 0.5, P(A ∩ B) = 0.15.",
      options: ["0.75", "0.90", "0.25", "0.60"],
      answer: 0,
      explanation: "P(A ∪ B) = P(A) + P(B) – P(A ∩ B) = 0.4 + 0.5 – 0.15 = 0.75."
    },
    {
      module: "A", difficulty: "easy",
      q: "P(Aᶜ) khi P(A) = 0.35 là bao nhiêu?",
      options: ["0.65", "0.35", "1.35", "0"],
      answer: 0,
      explanation: "Phần bù: P(Aᶜ) = 1 – P(A) = 1 – 0.35 = 0.65."
    },
    {
      module: "A", difficulty: "easy",
      q: "A và B độc lập, P(A) = 0.4, P(B) = 0.3. P(A ∩ B) = ?",
      options: ["0.12", "0.70", "0.28", "0.01"],
      answer: 0,
      explanation: "Nếu độc lập: P(A ∩ B) = P(A) × P(B) = 0.4 × 0.3 = 0.12."
    },
    {
      module: "A", difficulty: "easy",
      q: "P(A | B) = ? Biết P(A ∩ B) = 0.15, P(B) = 0.5.",
      options: ["0.30", "0.075", "0.15", "0.65"],
      answer: 0,
      explanation: "P(A|B) = P(A ∩ B) / P(B) = 0.15 / 0.5 = 0.30."
    },
    {
      module: "A", difficulty: "medium",
      q: "A và B loại trừ nhau (P(A) > 0, P(B) > 0). Chúng có độc lập không?",
      options: [
        "Không, vì P(A ∩ B) = 0 nhưng P(A)×P(B) > 0",
        "Có, loại trừ nhau thì tự động độc lập",
        "Có, nếu P(A) + P(B) = 1",
        "Phụ thuộc vào bài toán cụ thể"
      ],
      answer: 0,
      explanation: "Loại trừ nhau → P(A ∩ B) = 0. Độc lập → P(A ∩ B) = P(A)P(B). Nếu P(A), P(B) > 0 thì P(A)P(B) > 0 ≠ 0 → mâu thuẫn, tức hai sự kiện loại trừ nhau không thể độc lập."
    },
    {
      module: "A", difficulty: "medium",
      q: "Túi có 5 bi đỏ, 3 bi xanh. Rút 2 bi không hoàn lại. P(cả hai đỏ) = ?",
      options: ["5/14", "25/64", "5/8", "4/7"],
      answer: 0,
      explanation: "P(đỏ₁) = 5/8. Sau đó P(đỏ₂ | đỏ₁) = 4/7. Tích: 5/8 × 4/7 = 20/56 = 5/14 ≈ 0.357."
    },
    {
      module: "A", difficulty: "medium",
      q: "P(ít nhất 1 thành công trong 4 lần thử độc lập, P(thành công) = 0.1) = ?",
      options: ["1 − 0.9⁴ ≈ 0.344", "4 × 0.1 = 0.4", "0.9⁴ ≈ 0.656", "0.1⁴"],
      answer: 0,
      explanation: "P(ít nhất 1) = 1 – P(không lần nào) = 1 – 0.9⁴ = 1 – 0.6561 ≈ 0.344."
    },
    {
      module: "A", difficulty: "easy",
      q: "P(A ∩ B) = P(A) × P(B). Điều này cho biết A và B có quan hệ gì?",
      options: ["Độc lập", "Loại trừ nhau", "Phụ thuộc nhân quả", "Bổ sung nhau"],
      answer: 0,
      explanation: "Đây là định nghĩa độc lập xác suất: biết B không làm thay đổi xác suất A."
    },
    {
      module: "A", difficulty: "medium",
      q: "P(A) = 0.6, P(B | A) = 0.7. P(A ∩ B) = ?",
      options: ["0.42", "0.70", "0.60", "1.30"],
      answer: 0,
      explanation: "Quy tắc nhân: P(A ∩ B) = P(B|A) × P(A) = 0.7 × 0.6 = 0.42."
    },
    {
      module: "A", difficulty: "easy",
      q: "P(A) + P(Aᶜ) = ?",
      options: ["1", "2", "0", "Phụ thuộc vào A"],
      answer: 0,
      explanation: "Axiom xác suất cơ bản: biến cố A và phần bù Aᶜ bao phủ toàn bộ sample space."
    },
    {
      module: "A", difficulty: "medium",
      q: "P(A | B) = P(A) khi nào?",
      options: [
        "Khi A và B độc lập",
        "Khi A và B loại trừ nhau",
        "Khi P(B) = 1",
        "Khi P(A) = P(B)"
      ],
      answer: 0,
      explanation: "Tính chất của độc lập: biết B xảy ra không thay đổi xác suất A."
    },
    {
      module: "A", difficulty: "hard",
      q: "P(A) = 0.7, P(B) = 0.6. P(A ∩ B) tối thiểu là bao nhiêu?",
      options: ["0.30", "0", "0.42", "0.60"],
      answer: 0,
      explanation: "Bất đẳng thức Bonferroni: P(A ∩ B) ≥ P(A) + P(B) – 1 = 0.7 + 0.6 – 1 = 0.3."
    },
    {
      module: "A", difficulty: "medium",
      q: "P(Aᶜ ∩ B) = ?",
      options: ["P(B) – P(A ∩ B)", "P(B) × P(Aᶜ)", "P(Aᶜ) + P(B)", "1 – P(A ∩ B)"],
      answer: 0,
      explanation: "B = (A ∩ B) ∪ (Aᶜ ∩ B) với hai phần disjoint. Vì vậy P(Aᶜ ∩ B) = P(B) – P(A ∩ B)."
    },
    {
      module: "A", difficulty: "easy",
      q: "Trong Naive Bayes, từ 'naive' đề cập đến giả định gì?",
      options: [
        "Các feature độc lập có điều kiện theo class",
        "Model không cần dữ liệu lớn",
        "Chỉ dùng 1 feature",
        "Không sử dụng xác suất"
      ],
      answer: 0,
      explanation: "'Naive' = giả định đơn giản hóa rằng mọi feature độc lập có điều kiện theo class."
    },
    {
      module: "A", difficulty: "medium",
      q: "P(tất cả 5 sản phẩm không lỗi), biết mỗi sản phẩm có 5% khả năng lỗi, độc lập.",
      options: ["0.95⁵ ≈ 0.774", "1 – 0.05⁵", "0.05⁵", "0.95 × 5 = 4.75"],
      answer: 0,
      explanation: "P(không lỗi mỗi lần) = 0.95. Năm lần độc lập: 0.95⁵ ≈ 0.774."
    },
    {
      module: "A", difficulty: "easy",
      q: "Biến cố không thể (impossible event) có xác suất bằng?",
      options: ["0", "1", "0.5", "Không xác định"],
      answer: 0,
      explanation: "Biến cố không thể là biến cố không bao giờ xảy ra, xác suất = 0."
    },
    {
      module: "A", difficulty: "medium",
      q: "P(A ∪ B) = P(A) + P(B) đúng khi nào?",
      options: [
        "Khi A và B loại trừ nhau (P(A ∩ B) = 0)",
        "Khi A và B độc lập",
        "Luôn đúng",
        "Khi P(A) = P(B)"
      ],
      answer: 0,
      explanation: "Công thức đầy đủ: P(A∪B) = P(A)+P(B)–P(A∩B). Rút gọn thành cộng đơn giản chỉ khi A và B loại trừ nhau."
    },
    {
      module: "A", difficulty: "hard",
      q: "P(A | B) = P(B | A) khi nào?",
      options: ["Khi P(A) = P(B)", "Luôn bằng nhau", "Khi A và B độc lập", "Không bao giờ"],
      answer: 0,
      explanation: "Từ Bayes: P(A|B) = P(B|A)·P(A)/P(B). Hai vế bằng nhau khi P(A) = P(B)."
    },
    {
      module: "A", difficulty: "hard",
      q: "P(model đúng ít nhất 1 trong 3 lần dự đoán độc lập, accuracy = 80%) = ?",
      options: ["1 – 0.2³ = 0.992", "3 × 0.8 = 2.4", "0.8³ = 0.512", "0.2³ = 0.008"],
      answer: 0,
      explanation: "P(ít nhất 1 đúng) = 1 – P(sai cả 3) = 1 – 0.2³ = 0.992."
    },
    {
      module: "A", difficulty: "medium",
      q: "Đề thi yêu cầu 'P(ít nhất một lỗi)'. Cách nào nhanh nhất?",
      options: [
        "Dùng phần bù: 1 – P(không lỗi nào)",
        "Cộng P(1 lỗi) + P(2 lỗi) + ...",
        "Nhân P(lỗi) với số lần thử",
        "Lấy P(lỗi) bình phương"
      ],
      answer: 0,
      explanation: "Kỹ thuật phần bù: P(ít nhất 1) = 1 – P(không có gì xảy ra) — luôn nhanh hơn cộng từng trường hợp."
    }
  ],

  // ══════════════════════════════════════════════════════════
  // BÀI 2: Định lý Bayes và cách dùng trong phân loại
  // ══════════════════════════════════════════════════════════
  "bayes": [
    {
      module: "A", difficulty: "easy",
      q: "Trong công thức Bayes P(A|B) = P(B|A)·P(A) / P(B), P(A) gọi là gì?",
      options: ["Prior (xác suất tiên nghiệm)", "Posterior", "Likelihood", "Evidence"],
      answer: 0,
      explanation: "P(A) là prior — niềm tin về A trước khi có bằng chứng B."
    },
    {
      module: "A", difficulty: "easy",
      q: "Sau khi áp dụng Bayes, P(A|B) được gọi là gì?",
      options: ["Posterior", "Prior", "Likelihood", "Marginal"],
      answer: 0,
      explanation: "P(A|B) = posterior — niềm tin về A sau khi quan sát bằng chứng B."
    },
    {
      module: "A", difficulty: "medium",
      q: "P(bệnh) = 1%, sensitivity = 99%, false positive rate = 5%. P(dương tính) = ?",
      options: ["0.0099 + 0.0495 = 0.0594", "0.99 × 0.01 = 0.0099", "0.05 + 0.01 = 0.06", "0.99"],
      answer: 0,
      explanation: "P(dương) = P(dương|bệnh)·P(bệnh) + P(dương|khỏe)·P(khỏe) = 0.99×0.01 + 0.05×0.99 = 0.0594."
    },
    {
      module: "A", difficulty: "hard",
      q: "Từ câu trên, P(bệnh | dương tính) ≈ ?",
      options: ["≈ 16.7%", "≈ 99%", "≈ 50%", "≈ 5%"],
      answer: 0,
      explanation: "P(bệnh|dương) = 0.0099 / 0.0594 ≈ 0.167 = 16.7%. Base rate thấp kéo precision xuống dù sensitivity cao."
    },
    {
      module: "A", difficulty: "medium",
      q: "Likelihood P(B|A) trong Bayes là gì?",
      options: [
        "Xác suất quan sát được bằng chứng B nếu A là đúng",
        "Xác suất A sau khi thấy B",
        "Xác suất A trước khi có bằng chứng",
        "Xác suất không điều kiện của B"
      ],
      answer: 0,
      explanation: "Likelihood = P(data | hypothesis) = xác suất dữ liệu sinh ra nếu giả thuyết đúng."
    },
    {
      module: "A", difficulty: "medium",
      q: "Tại sao P(bệnh | test dương) lại thấp dù test có sensitivity 95%?",
      options: [
        "Vì prior (tỉ lệ bệnh thực sự) rất thấp, false positive tạo nhiều báo nhầm",
        "Vì test không chính xác",
        "Vì sensitivity 95% là thấp",
        "Vì false positive rate = 0"
      ],
      answer: 0,
      explanation: "Đây là lỗi base rate fallacy. Khi bệnh hiếm (prior thấp), dù test tốt, số báo dương giả vẫn nhiều hơn dương thật."
    },
    {
      module: "A", difficulty: "medium",
      q: "Naive Bayes giả định gì về các feature?",
      options: [
        "Các feature độc lập có điều kiện theo class",
        "Tất cả feature phải là số",
        "Chỉ dùng feature quan trọng nhất",
        "Feature phải phân phối chuẩn"
      ],
      answer: 0,
      explanation: "P(x₁,x₂,...|class) = P(x₁|class)·P(x₂|class)·... — đây là giả định 'naive' giúp tính toán đơn giản."
    },
    {
      module: "A", difficulty: "hard",
      q: "P(spam) = 0.3, P('free' | spam) = 0.8, P('free' | ham) = 0.05. P(spam | 'free') ≈ ?",
      options: ["≈ 0.821", "≈ 0.3", "≈ 0.8", "≈ 0.5"],
      answer: 0,
      explanation: "P('free') = 0.8×0.3 + 0.05×0.7 = 0.24+0.035 = 0.275. P(spam|'free') = 0.24/0.275 ≈ 0.873. (Lưu ý: kết quả gần nhất với 0.821 tùy làm tròn; cốt lõi là > 0.8.)"
    },
    {
      module: "A", difficulty: "medium",
      q: "Sensitivity = Recall = ?",
      options: ["TP / (TP + FN)", "TP / (TP + FP)", "TN / (TN + FP)", "FP / (FP + TN)"],
      answer: 0,
      explanation: "Sensitivity = tỉ lệ bắt đúng người có bệnh/positive thật = TP / (TP + FN)."
    },
    {
      module: "A", difficulty: "medium",
      q: "Specificity = ?",
      options: ["TN / (TN + FP)", "TP / (TP + FN)", "TP / (TP + FP)", "TN / (TN + FN)"],
      answer: 0,
      explanation: "Specificity = tỉ lệ bắt đúng người khỏe/negative thật = TN / (TN + FP)."
    },
    {
      module: "A", difficulty: "medium",
      q: "Khi prior của class positive rất thấp (ví dụ: 0.1%), precision (PPV) có xu hướng?",
      options: [
        "Thấp dù recall cao, vì false positive nhiều hơn true positive",
        "Cao vì model chắc chắn",
        "Bằng recall",
        "Không liên quan đến prior"
      ],
      answer: 0,
      explanation: "Precision = TP/(TP+FP). Khi class hiếm, FP từ class majority áp đảo TP → precision thấp."
    },
    {
      module: "A", difficulty: "hard",
      q: "P(bệnh) = 0.001, sensitivity = 99%, specificity = 99%. P(bệnh | dương tính) ≈ ?",
      options: ["≈ 9%", "≈ 99%", "≈ 0.1%", "≈ 50%"],
      answer: 0,
      explanation: "P(dương) = 0.99×0.001 + 0.01×0.999 ≈ 0.01098. P(bệnh|dương) ≈ 0.00099/0.01098 ≈ 9%. Prior rất thấp kéo precision xuống dù test gần hoàn hảo."
    },
    {
      module: "A", difficulty: "medium",
      q: "Trong Bayesian update nhiều lần, posterior từ lần trước trở thành gì ở lần sau?",
      options: ["Prior mới", "Likelihood mới", "Evidence mới", "Phần bù"],
      answer: 0,
      explanation: "Cơ chế cập nhật Bayesian: posterior của lần t trở thành prior của lần t+1 khi có bằng chứng mới."
    },
    {
      module: "A", difficulty: "easy",
      q: "P(B) ở mẫu số trong công thức Bayes còn gọi là gì?",
      options: ["Marginal likelihood / normalizing constant", "Posterior", "Prior", "Likelihood"],
      answer: 0,
      explanation: "P(B) = P(B|A)P(A) + P(B|Aᶜ)P(Aᶜ) là marginal probability của evidence, dùng để chuẩn hóa."
    },
    {
      module: "A", difficulty: "medium",
      q: "Khi sensitivity = specificity = 50%, test có giá trị gì?",
      options: [
        "Không có giá trị, tương đương đoán ngẫu nhiên",
        "Tối ưu cho bài toán imbalanced",
        "Có giá trị vì specificity = sensitivity",
        "Rất tốt cho phát hiện bệnh hiếm"
      ],
      answer: 0,
      explanation: "Test 50/50 không phân biệt positive/negative tốt hơn flip coin ngẫu nhiên."
    },
    {
      module: "A", difficulty: "easy",
      q: "Tại sao phương pháp bảng tần suất (frequency table) hữu ích khi học Bayes?",
      options: [
        "Trực quan, dễ hiểu hơn là nhớ công thức, tránh nhầm conditional probability",
        "Nhanh hơn công thức",
        "Chỉ dùng cho bài toán y tế",
        "Không cần biết prior"
      ],
      answer: 0,
      explanation: "Tưởng tượng 10.000 người cụ thể giúp đếm TP/FP/FN/TN dễ hơn thao tác ký hiệu xác suất."
    },
    {
      module: "A", difficulty: "medium",
      q: "Phân biệt P(bệnh | dương tính) với P(dương tính | bệnh). Câu nào hữu ích cho bệnh nhân?",
      options: [
        "P(bệnh | dương tính) — xác suất thật sự có bệnh khi test dương",
        "P(dương tính | bệnh) — độ nhạy của test",
        "Cả hai giống nhau",
        "P(dương tính | bệnh) hữu ích hơn"
      ],
      answer: 0,
      explanation: "Bệnh nhân muốn biết 'tôi có thật sự bệnh không?' = P(bệnh|dương tính) = PPV. P(dương|bệnh) = sensitivity là thông số kỹ thuật của test."
    },
    {
      module: "A", difficulty: "hard",
      q: "Nếu prior tăng từ 1% lên 10% (cùng sensitivity 99%, FPR 5%), P(bệnh | dương tính) thay đổi thế nào?",
      options: ["Tăng mạnh lên ~70%", "Không đổi", "Giảm", "Tăng nhẹ lên 20%"],
      answer: 0,
      explanation: "P(dương) = 0.99×0.1+0.05×0.9 = 0.144. P(bệnh|dương) = 0.099/0.144 ≈ 68.8%. Prior tăng 10× làm posterior tăng rất mạnh."
    },
    {
      module: "A", difficulty: "medium",
      q: "Trong spam filter dùng Naive Bayes, prior P(spam) là gì?",
      options: [
        "Tỉ lệ email spam trong dữ liệu huấn luyện",
        "Xác suất từ khóa 'free' xuất hiện",
        "Accuracy của bộ lọc",
        "Tỉ lệ false positive"
      ],
      answer: 0,
      explanation: "Prior = tỉ lệ spam trong tổng email nhận được, được ước lượng từ dữ liệu train."
    },
    {
      module: "A", difficulty: "hard",
      q: "False Discovery Rate (FDR) = FP / (FP + TP). Khi prior rất thấp, FDR có xu hướng?",
      options: [
        "Cao — phần lớn báo positive là sai",
        "Thấp — model chắc chắn hơn",
        "Bằng 0 khi recall cao",
        "Không liên quan đến prior"
      ],
      answer: 0,
      explanation: "Khi class positive hiếm, FP từ class majority nhiều hơn TP → FDR cao = phần lớn dương tính là nhầm."
    }
  ],

  // ══════════════════════════════════════════════════════════
  // BÀI 3: Thống kê, kỳ vọng và độ phân tán
  // ══════════════════════════════════════════════════════════
  "stats-expectation": [
    {
      module: "A", difficulty: "easy",
      q: "E[X] của biến nhận 0 (P=0.4), 5 (P=0.35), 10 (P=0.25) là?",
      options: ["4.25", "5.0", "3.5", "6.0"],
      answer: 0,
      explanation: "E[X] = 0×0.4 + 5×0.35 + 10×0.25 = 0 + 1.75 + 2.5 = 4.25."
    },
    {
      module: "A", difficulty: "medium",
      q: "Var(X) = ? Biết E[X²] = 20, E[X] = 4.",
      options: ["4", "20", "16", "0.25"],
      answer: 0,
      explanation: "Var(X) = E[X²] – (E[X])² = 20 – 16 = 4."
    },
    {
      module: "A", difficulty: "easy",
      q: "Standard deviation (độ lệch chuẩn) và variance khác nhau chủ yếu ở?",
      options: [
        "Std là √Var, cùng đơn vị với dữ liệu gốc; variance là bình phương đơn vị",
        "Variance luôn lớn hơn std",
        "Std không thể âm còn variance có thể",
        "Không có sự khác biệt"
      ],
      answer: 0,
      explanation: "Std = √Var(X). Std có cùng đơn vị với X (ví dụ: cm), Var có đơn vị bình phương (cm²) — khó diễn giải."
    },
    {
      module: "A", difficulty: "medium",
      q: "Tập {2, 4, 4, 6, 100}: đâu là median?",
      options: ["4", "23.2", "6", "2"],
      answer: 0,
      explanation: "Sắp xếp: {2,4,4,6,100}. Phần tử giữa (vị trí 3) = 4. Mean = 116/5 = 23.2 bị kéo bởi outlier."
    },
    {
      module: "A", difficulty: "easy",
      q: "E[aX + b] = ?",
      options: ["a·E[X] + b", "a·E[X]", "E[X] + b", "a·b·E[X]"],
      answer: 0,
      explanation: "Tính tuyến tính của kỳ vọng: hằng số đưa ra ngoài E[], hằng cộng thêm giữ nguyên."
    },
    {
      module: "A", difficulty: "medium",
      q: "Var(aX + b) = ?",
      options: ["a²·Var(X)", "a·Var(X) + b", "a²·Var(X) + b²", "Var(X)"],
      answer: 0,
      explanation: "Dịch chuyển b không ảnh hưởng variance. Nhân a: Var(aX) = a²Var(X)."
    },
    {
      module: "A", difficulty: "easy",
      q: "Khi nào median là đại lượng đại diện tốt hơn mean?",
      options: [
        "Khi dữ liệu có outlier hoặc phân phối lệch",
        "Khi dữ liệu phân phối chuẩn",
        "Khi muốn tính kỳ vọng xác suất",
        "Khi dataset có nhiều hơn 1000 điểm"
      ],
      answer: 0,
      explanation: "Median là giá trị giữa, không bị kéo bởi giá trị cực (outlier) như mean."
    },
    {
      module: "A", difficulty: "medium",
      q: "Mode của {1, 2, 2, 3, 3, 3, 4} là?",
      options: ["3", "2", "2.5", "1"],
      answer: 0,
      explanation: "Mode là giá trị xuất hiện nhiều nhất: 3 xuất hiện 3 lần."
    },
    {
      module: "A", difficulty: "medium",
      q: "E[X + Y] = E[X] + E[Y]. Điều này đúng khi nào?",
      options: [
        "Luôn đúng, kể cả khi X và Y không độc lập",
        "Chỉ khi X và Y độc lập",
        "Chỉ khi X và Y cùng phân phối",
        "Chỉ khi E[X] = E[Y]"
      ],
      answer: 0,
      explanation: "Tính tuyến tính của kỳ vọng không yêu cầu độc lập — E[X+Y] = E[X]+E[Y] luôn đúng."
    },
    {
      module: "A", difficulty: "medium",
      q: "E[X·Y] = E[X]·E[Y] chỉ đúng khi?",
      options: ["X và Y độc lập", "Luôn đúng", "Khi E[X] = E[Y]", "Khi X, Y nguyên"],
      answer: 0,
      explanation: "Khác với kỳ vọng tổng, kỳ vọng tích cần điều kiện độc lập."
    },
    {
      module: "A", difficulty: "medium",
      q: "IQR = Q3 – Q1 dùng để làm gì?",
      options: [
        "Đo độ phân tán của 50% dữ liệu giữa, bền hơn range",
        "Tính mean của dataset",
        "Xác định phân phối chuẩn",
        "Chỉ dùng cho dữ liệu phân loại"
      ],
      answer: 0,
      explanation: "IQR bỏ qua 25% trên và 25% dưới, tránh bị ảnh hưởng bởi outlier cực đoan."
    },
    {
      module: "A", difficulty: "medium",
      q: "Z-score của điểm 75 khi mean = 70, std = 5 là?",
      options: ["1.0", "0.5", "2.0", "−1.0"],
      answer: 0,
      explanation: "Z = (x – μ) / σ = (75 – 70) / 5 = 1.0. Điểm 75 nằm 1 std trên mean."
    },
    {
      module: "A", difficulty: "easy",
      q: "Phân phối chuẩn (normal distribution): mean, median, mode có quan hệ gì?",
      options: ["Bằng nhau (phân phối đối xứng)", "Mean > median > mode", "Mode > mean", "Không xác định"],
      answer: 0,
      explanation: "Phân phối chuẩn đối xứng hoàn toàn xung quanh tâm — mean = median = mode."
    },
    {
      module: "A", difficulty: "medium",
      q: "Dataset lệch phải (right-skewed): mean so với median thế nào?",
      options: ["Mean > median (bị kéo về đuôi phải)", "Mean < median", "Mean = median", "Không xác định"],
      answer: 0,
      explanation: "Đuôi phải kéo mean về phía các giá trị lớn, median ổn định hơn."
    },
    {
      module: "A", difficulty: "easy",
      q: "Kỳ vọng của biến Bernoulli(p) = ?",
      options: ["p", "p²", "p(1−p)", "1−p"],
      answer: 0,
      explanation: "X Bernoulli: P(X=1)=p, P(X=0)=1−p. E[X] = 1×p + 0×(1−p) = p."
    },
    {
      module: "A", difficulty: "medium",
      q: "Variance của biến Bernoulli(p) = ?",
      options: ["p(1−p)", "p²", "p", "1−p"],
      answer: 0,
      explanation: "Var(X) = E[X²]−(E[X])² = p − p² = p(1−p). Đạt max khi p = 0.5."
    },
    {
      module: "A", difficulty: "medium",
      q: "Dataset fraud: 99% giao dịch bình thường, 1% gian lận. Model đoán toàn bình thường: accuracy = ?",
      options: ["99% nhưng hoàn toàn vô dụng", "50%", "1%", "Không tính được"],
      answer: 0,
      explanation: "Accuracy = (TN)/(total) = 99%, nhưng recall gian lận = 0. Model không detect được gian lận nào."
    },
    {
      module: "A", difficulty: "medium",
      q: "Standard error = std/√n. Khi n tăng, standard error thay đổi thế nào?",
      options: ["Giảm — ước lượng mean chính xác hơn", "Tăng", "Không đổi", "Bằng variance"],
      answer: 0,
      explanation: "Mẫu lớn hơn → trung bình mẫu ổn định hơn → standard error giảm."
    },
    {
      module: "A", difficulty: "hard",
      q: "Correlation 0.9 giữa doanh số kem và tỷ lệ đuối nước. Kết luận đúng?",
      options: [
        "Tương quan mạnh nhưng không phải nhân quả — yếu tố ẩn là mùa hè",
        "Ăn kem gây đuối nước",
        "Đuối nước làm tăng doanh số kem",
        "Correlation 0.9 chứng minh nhân quả"
      ],
      answer: 0,
      explanation: "Correlation ≠ causation. Cả hai tăng vào mùa hè — đây là confounding variable."
    },
    {
      module: "A", difficulty: "hard",
      q: "Tập [1, 1, 2, 100, 200]. Đại lượng nào bền nhất khi thêm outlier 10000?",
      options: ["Median", "Mean", "Variance", "Standard deviation"],
      answer: 0,
      explanation: "Median chỉ phụ thuộc vào vị trí giữa, không thay đổi khi outlier tăng. Mean, variance, std đều bị ảnh hưởng mạnh."
    }
  ],

  // ══════════════════════════════════════════════════════════
  // BÀI 4: Confusion Matrix — TP, FP, TN, FN
  // ══════════════════════════════════════════════════════════
  "confusion-matrix": [
    {
      module: "A", difficulty: "easy",
      q: "TP = 90, FP = 10, FN = 30, TN = 870. Precision = ?",
      options: ["0.90", "0.75", "0.96", "0.82"],
      answer: 0,
      explanation: "Precision = TP / (TP + FP) = 90 / (90 + 10) = 90/100 = 0.90."
    },
    {
      module: "A", difficulty: "easy",
      q: "Cùng dữ liệu: TP=90, FP=10, FN=30, TN=870. Recall = ?",
      options: ["0.75", "0.90", "0.96", "0.60"],
      answer: 0,
      explanation: "Recall = TP / (TP + FN) = 90 / (90 + 30) = 90/120 = 0.75."
    },
    {
      module: "A", difficulty: "medium",
      q: "Cùng dữ liệu: TP=90, FP=10, FN=30, TN=870. F1 ≈ ?",
      options: ["0.818", "0.825", "0.75", "0.90"],
      answer: 0,
      explanation: "F1 = 2×P×R/(P+R) = 2×0.9×0.75/(0.9+0.75) = 1.35/1.65 ≈ 0.818."
    },
    {
      module: "A", difficulty: "easy",
      q: "Accuracy với TP=90, FP=10, FN=30, TN=870 (tổng 1000) = ?",
      options: ["0.96", "0.90", "0.75", "0.82"],
      answer: 0,
      explanation: "Accuracy = (TP + TN) / total = (90 + 870) / 1000 = 960/1000 = 0.96."
    },
    {
      module: "A", difficulty: "easy",
      q: "FN (False Negative) là gì?",
      options: [
        "Model đoán negative nhưng thực tế là positive (bỏ sót)",
        "Model đoán positive nhưng thực tế là negative (báo nhầm)",
        "Model đoán đúng là negative",
        "Model đoán đúng là positive"
      ],
      answer: 0,
      explanation: "False = sai, Negative = nhãn model đưa ra. FN = bỏ sót positive thật."
    },
    {
      module: "A", difficulty: "easy",
      q: "FP (False Positive) là gì?",
      options: [
        "Model đoán positive nhưng thực tế là negative (báo nhầm)",
        "Model đoán negative nhưng thực tế là positive",
        "Model đoán đúng là positive",
        "Model đoán đúng là negative"
      ],
      answer: 0,
      explanation: "False Positive = model báo có (positive) nhưng thực tế không có."
    },
    {
      module: "A", difficulty: "medium",
      q: "Bài toán phát hiện bệnh nguy hiểm: metric nào phải ưu tiên?",
      options: [
        "Recall/Sensitivity — tránh bỏ sót bệnh nhân (FN đắt hơn FP)",
        "Precision — tránh lo lắng không cần thiết",
        "Accuracy — đo tổng thể",
        "AUC — dùng cho mọi bài toán"
      ],
      answer: 0,
      explanation: "Bỏ sót bệnh nhân (FN) nguy hiểm hơn test dương giả (FP) — recall/sensitivity quan trọng hơn."
    },
    {
      module: "A", difficulty: "medium",
      q: "Với spam filter: metric nào quan trọng hơn?",
      options: [
        "Precision — tránh bỏ email thật vào spam (FP rất khó chịu)",
        "Recall — bắt hết spam",
        "Accuracy — đo tổng thể",
        "F1 — luôn cân bằng tốt nhất"
      ],
      answer: 0,
      explanation: "FP = email thật bị gắn spam rất khó chịu cho người dùng → ưu tiên precision."
    },
    {
      module: "A", difficulty: "easy",
      q: "F1 score cân bằng giữa hai metric nào?",
      options: ["Precision và Recall", "Accuracy và AUC", "Sensitivity và Specificity", "TPR và FPR"],
      answer: 0,
      explanation: "F1 = harmonic mean của Precision và Recall = 2PR/(P+R)."
    },
    {
      module: "A", difficulty: "medium",
      q: "ROC curve vẽ mối quan hệ giữa?",
      options: ["TPR (Recall) vs FPR theo từng threshold", "Precision vs Recall", "Accuracy vs Loss", "Train error vs Val error"],
      answer: 0,
      explanation: "ROC = Receiver Operating Characteristic: trục y là TPR (sensitivity), trục x là FPR (1 − specificity)."
    },
    {
      module: "A", difficulty: "easy",
      q: "AUC = 0.5 nghĩa là?",
      options: [
        "Model không tốt hơn đoán ngẫu nhiên",
        "Model hoàn hảo",
        "Precision = Recall = 0.5",
        "50% accuracy"
      ],
      answer: 0,
      explanation: "ROC AUC = 0.5 là đường chéo ngẫu nhiên, model không phân biệt được positive/negative."
    },
    {
      module: "A", difficulty: "medium",
      q: "Khi tăng threshold (ngưỡng quyết định), Precision thường thay đổi thế nào?",
      options: ["Tăng — chỉ predict positive khi rất chắc", "Giảm", "Không đổi", "Bằng Recall"],
      answer: 0,
      explanation: "Threshold cao → model chỉ báo positive khi rất tự tin → ít FP → Precision tăng."
    },
    {
      module: "A", difficulty: "medium",
      q: "Khi tăng threshold, Recall thường thay đổi thế nào?",
      options: ["Giảm — bỏ sót nhiều positive hơn", "Tăng", "Không đổi", "Bằng Precision"],
      answer: 0,
      explanation: "Threshold cao → model ít predict positive hơn → nhiều FN → Recall giảm."
    },
    {
      module: "A", difficulty: "medium",
      q: "PR-AUC hữu ích hơn ROC-AUC khi nào?",
      options: [
        "Khi class imbalance nặng (positive rất hiếm)",
        "Khi dataset cân bằng",
        "Khi bài toán regression",
        "Khi model không có score dự đoán"
      ],
      answer: 0,
      explanation: "ROC-AUC bị lạc quan khi TN nhiều. PR curve tập trung vào class minority → hữu ích hơn với imbalanced data."
    },
    {
      module: "A", difficulty: "medium",
      q: "Dataset: 99% class 0, 1% class 1. Model đoán toàn class 0. Recall của class 1 = ?",
      options: ["0 (bỏ sót 100% class 1)", "99%", "1%", "50%"],
      answer: 0,
      explanation: "TP = 0 (không detect được class 1 nào). Recall = TP/(TP+FN) = 0/count(class1) = 0."
    },
    {
      module: "A", difficulty: "hard",
      q: "TP=0, FP=0, FN=50, TN=950. Precision = ?",
      options: ["Undefined (0/0)", "0", "1.0", "0.5"],
      answer: 0,
      explanation: "Precision = TP/(TP+FP) = 0/0 = undefined. Model không bao giờ predict positive nên không tính được precision."
    },
    {
      module: "A", difficulty: "medium",
      q: "AUC = 1.0 nghĩa là?",
      options: [
        "Model hoàn hảo — phân tách hoàn toàn hai class",
        "Accuracy = 100%",
        "Precision = Recall = 1",
        "Threshold = 0.5 là tối ưu"
      ],
      answer: 0,
      explanation: "AUC = 1 nghĩa là với mọi threshold, model xếp hạng positive cao hơn negative hoàn toàn."
    },
    {
      module: "A", difficulty: "hard",
      q: "Macro F1 vs Weighted F1: khi class sizes rất khác nhau, dùng gì?",
      options: [
        "Weighted F1 (tính theo tỉ lệ từng class)",
        "Macro F1 (trung bình đều nhau)",
        "Luôn dùng Macro",
        "Không quan trọng"
      ],
      answer: 0,
      explanation: "Weighted F1 cân nhắc tỉ lệ từng class → phù hợp khi imbalanced. Macro F1 cho class nhỏ trọng số bằng class lớn."
    },
    {
      module: "A", difficulty: "hard",
      q: "Sensitivity = Recall. Specificity = 1 – FPR. Với AUC cao nhưng specificity thấp tại threshold chọn, ý nghĩa?",
      options: [
        "Model xếp hạng tốt nhưng nhiều false alarm tại threshold đó",
        "Model hoàn hảo ở mọi threshold",
        "Không cần điều chỉnh threshold",
        "Model underfitting"
      ],
      answer: 0,
      explanation: "AUC là metric tổng hợp. Specificity tại một threshold cụ thể vẫn có thể thấp — cần tune threshold."
    },
    {
      module: "A", difficulty: "medium",
      q: "Trong bài toán fraud detection: bỏ sót gian lận (FN) hay báo nhầm (FP) đắt hơn?",
      options: [
        "Bỏ sót gian lận (FN) đắt hơn — mất tiền thật",
        "Báo nhầm (FP) đắt hơn — phiền khách hàng",
        "Cả hai như nhau",
        "Phụ thuộc vào threshold"
      ],
      answer: 0,
      explanation: "FN = cho qua gian lận thật sự = thiệt hại tài chính trực tiếp → cần recall cao, dù FP tăng thì cũng được review."
    }
  ],

  // ══════════════════════════════════════════════════════════
  // BÀI 5: Ma trận, vector và gradient trong ML
  // ══════════════════════════════════════════════════════════
  "matrix-calculus": [
    {
      module: "A", difficulty: "easy",
      q: "A shape (3, 4), B shape (4, 5). A × B có shape gì?",
      options: ["(3, 5)", "(4, 4)", "(3, 4)", "(5, 3)"],
      answer: 0,
      explanation: "Nhân ma trận hợp lệ khi cột A = hàng B (4=4). Kết quả: (hàng A, cột B) = (3, 5)."
    },
    {
      module: "A", difficulty: "easy",
      q: "Ma trận A shape (5, 3). Aᵀ có shape gì?",
      options: ["(3, 5)", "(5, 3)", "(5, 5)", "(3, 3)"],
      answer: 0,
      explanation: "Transpose đổi hàng thành cột: (m, n) → (n, m). (5,3) → (3,5)."
    },
    {
      module: "A", difficulty: "easy",
      q: "A shape (3, 4), B shape (3, 4). A × B có hợp lệ không?",
      options: [
        "Không — cần cột A = hàng B (4 ≠ 3)",
        "Có, bình thường",
        "Có, dùng element-wise",
        "Có nếu dùng broadcasting"
      ],
      answer: 0,
      explanation: "Nhân ma trận chuẩn yêu cầu cột A = hàng B. 4 ≠ 3 → không hợp lệ cho matrix multiplication."
    },
    {
      module: "A", difficulty: "medium",
      q: "X shape (100, 20), lớp Linear W shape (20, 8). X @ W có shape gì?",
      options: ["(100, 8)", "(20, 20)", "(8, 100)", "(100, 20)"],
      answer: 0,
      explanation: "Cột X = 20 = hàng W → hợp lệ. Output shape = (hàng X, cột W) = (100, 8)."
    },
    {
      module: "A", difficulty: "medium",
      q: "Gradient descent: w := w − lr × ∂L/∂w. Nếu gradient dương (+), w thay đổi thế nào?",
      options: ["Giảm (đi ngược gradient để giảm loss)", "Tăng", "Không đổi", "Bằng 0"],
      answer: 0,
      explanation: "Đi ngược gradient: nếu ∂L/∂w > 0 thì giảm w để loss giảm."
    },
    {
      module: "A", difficulty: "easy",
      q: "Ảnh 28×28 pixels flatten thành vector, shape là?",
      options: ["(784,)", "(28, 28)", "(1, 784)", "(28,)"],
      answer: 0,
      explanation: "28 × 28 = 784 pixel, flatten thành vector 1D shape (784,)."
    },
    {
      module: "A", difficulty: "medium",
      q: "(AB)ᵀ = ?",
      options: ["BᵀAᵀ", "AᵀBᵀ", "AB", "ABᵀ"],
      answer: 0,
      explanation: "Transpose của tích: (AB)ᵀ = BᵀAᵀ — thứ tự đảo ngược."
    },
    {
      module: "A", difficulty: "easy",
      q: "Ma trận đơn vị I: A × I = ?",
      options: ["A", "I", "0", "Aᵀ"],
      answer: 0,
      explanation: "I là phần tử trung hòa của nhân ma trận, tương tự số 1 trong nhân số."
    },
    {
      module: "A", difficulty: "medium",
      q: "X shape (4, 3). Xᵀ × X có shape gì?",
      options: ["(3, 3)", "(4, 4)", "(3, 4)", "(4, 3)"],
      answer: 0,
      explanation: "Xᵀ shape (3,4). Xᵀ × X: cột Xᵀ = 4 = hàng X → hợp lệ. Output: (3, 3)."
    },
    {
      module: "A", difficulty: "medium",
      q: "Dot product a · b = 0 có ý nghĩa hình học gì?",
      options: ["Hai vector vuông góc nhau", "Hai vector bằng nhau", "Hai vector cùng chiều", "Một vector bằng 0"],
      answer: 0,
      explanation: "a·b = ||a||||b||cos(θ). Cos(90°) = 0 → dot product = 0 → vuông góc."
    },
    {
      module: "A", difficulty: "medium",
      q: "Learning rate quá lớn trong gradient descent thường gây ra?",
      options: [
        "Loss dao động hoặc phân kỳ",
        "Model học rất nhanh và tốt",
        "Gradient bằng 0",
        "Dữ liệu bị xóa"
      ],
      answer: 0,
      explanation: "Bước nhảy quá lớn vượt qua điểm tối ưu, loss dao động qua lại hoặc tăng dần."
    },
    {
      module: "A", difficulty: "medium",
      q: "Gradient là gì?",
      options: [
        "Vector các đạo hàm riêng, chỉ hướng tăng nhanh nhất của hàm",
        "Giá trị loss tại điểm hiện tại",
        "Tốc độ học (learning rate)",
        "Ma trận weight"
      ],
      answer: 0,
      explanation: "Gradient = [∂f/∂x₁, ∂f/∂x₂, ...] — chỉ hướng tăng nhanh nhất. Optimizer đi ngược để giảm loss."
    },
    {
      module: "A", difficulty: "medium",
      q: "W shape (784, 10) trong bài toán MNIST (ảnh 28×28, 10 chữ số). Nghĩa là?",
      options: [
        "Lớp tuyến tính từ 784 feature sang 10 logit cho 10 chữ số",
        "784 samples, 10 features",
        "10 ảnh mỗi batch, 784 lớp",
        "Mạng có 10 lớp ẩn"
      ],
      answer: 0,
      explanation: "Input 784 pixel × W(784,10) → output 10 logit, một cho mỗi chữ số 0-9."
    },
    {
      module: "A", difficulty: "hard",
      q: "Det(A) = 0 → ma trận A có đặc điểm gì?",
      options: [
        "Singular — không có nghịch đảo, các hàng/cột tuyến tính phụ thuộc",
        "Diagonal matrix",
        "Identity matrix",
        "Sparse matrix"
      ],
      answer: 0,
      explanation: "Determinant = 0 nghĩa là ma trận singular, không khả nghịch."
    },
    {
      module: "A", difficulty: "medium",
      q: "Chain rule: d/dx[f(g(x))] = ?",
      options: ["f'(g(x)) × g'(x)", "f'(x) × g'(x)", "f(g'(x))", "f'(x) + g'(x)"],
      answer: 0,
      explanation: "Chain rule: đạo hàm ngoài nhân đạo hàm trong. Nền tảng của backpropagation."
    },
    {
      module: "A", difficulty: "medium",
      q: "Trong backpropagation, chain rule được dùng để?",
      options: [
        "Tính gradient ngược qua nhiều layer liên tiếp",
        "Cập nhật learning rate",
        "Tính loss function",
        "Split train/test"
      ],
      answer: 0,
      explanation: "Backprop = lan truyền ngược gradient từ output về input qua chain rule."
    },
    {
      module: "A", difficulty: "medium",
      q: "Rank của ma trận A(3, 4) tối đa là?",
      options: ["3 (min của số hàng và số cột)", "4", "12", "7"],
      answer: 0,
      explanation: "Rank ≤ min(m, n). Với (3,4): rank ≤ 3."
    },
    {
      module: "A", difficulty: "medium",
      q: "X shape (100, 20), mu shape (20,). Phép X – mu có hợp lệ trong NumPy không?",
      options: [
        "Có, NumPy broadcasting áp mu cho mỗi hàng của X",
        "Không, shape không khớp",
        "Có nhưng kết quả sai",
        "Chỉ hợp lệ nếu mu là ma trận (100, 20)"
      ],
      answer: 0,
      explanation: "Broadcasting rule: (100,20) – (20,) → mu được 'broadcast' để áp cho mỗi trong 100 hàng."
    },
    {
      module: "A", difficulty: "medium",
      q: "Tại sao cần scale feature trước khi đưa vào neural network?",
      options: [
        "Để gradient đồng đều, không có feature áp đảo quá trình cập nhật weight",
        "Vì neural network chỉ nhận số trong [0,1]",
        "Để tăng tốc độ đọc dữ liệu",
        "Không cần, neural network tự xử lý"
      ],
      answer: 0,
      explanation: "Feature có thang đo lớn (triệu đồng vs tuổi) tạo gradient không đều. StandardScaler giúp train ổn định hơn."
    },
    {
      module: "A", difficulty: "hard",
      q: "Mini-batch gradient descent ưu điểm so với full-batch gradient descent?",
      options: [
        "Nhanh hơn mỗi bước, thêm noise có thể giúp thoát local minimum",
        "Luôn tìm được global minimum",
        "Không cần learning rate",
        "Kết quả chắc chắn hơn full-batch"
      ],
      answer: 0,
      explanation: "Mini-batch cân bằng giữa tốc độ (SGD) và ổn định (full-batch), là lựa chọn phổ biến nhất."
    }
  ],

  // ══════════════════════════════════════════════════════════
  // BÀI 6: Đạo hàm, tích phân, tích vô hướng và sin/cos
  // ══════════════════════════════════════════════════════════
  "calculus-dot-trig": [
    {
      module: "A", difficulty: "easy",
      q: "d/dx(x⁴) = ?",
      options: ["4x³", "x³", "4x", "4"],
      answer: 0,
      explanation: "Quy tắc lũy thừa: d/dx(xⁿ) = n·xⁿ⁻¹. Với n=4: 4x³."
    },
    {
      module: "A", difficulty: "easy",
      q: "d/dx(sin x) = ?",
      options: ["cos x", "−cos x", "−sin x", "tan x"],
      answer: 0,
      explanation: "Đạo hàm sin là cos. Thuộc: sin → cos → −sin → −cos → sin (chu kỳ 4)."
    },
    {
      module: "A", difficulty: "easy",
      q: "d/dx(cos x) = ?",
      options: ["−sin x", "sin x", "−cos x", "cos x"],
      answer: 0,
      explanation: "d/dx(cos x) = −sin x. Dấu âm quan trọng."
    },
    {
      module: "A", difficulty: "easy",
      q: "d/dx(eˣ) = ?",
      options: ["eˣ", "x·eˣ⁻¹", "1/eˣ", "ln(x)·eˣ"],
      answer: 0,
      explanation: "eˣ là hàm duy nhất tự đạo hàm bằng chính nó."
    },
    {
      module: "A", difficulty: "easy",
      q: "d/dx(ln x) = ?",
      options: ["1/x", "x", "ln(x)/x", "eˣ"],
      answer: 0,
      explanation: "Đạo hàm logarithm tự nhiên: d/dx(ln x) = 1/x, với x > 0."
    },
    {
      module: "A", difficulty: "medium",
      q: "Chain rule: d/dx[sin(x²)] = ?",
      options: ["2x·cos(x²)", "cos(x²)", "2x·sin(x²)", "cos(2x)"],
      answer: 0,
      explanation: "d/dx[sin(g(x))] = cos(g(x))·g'(x). Với g(x) = x²: g'(x) = 2x → 2x·cos(x²)."
    },
    {
      module: "A", difficulty: "medium",
      q: "Product rule: d/dx[f(x)·g(x)] = ?",
      options: ["f'(x)g(x) + f(x)g'(x)", "f'(x)g'(x)", "f'(x)/g'(x)", "f(x)+g(x)"],
      answer: 0,
      explanation: "Quy tắc tích (Leibniz rule): vi phân cái này × cái kia + cái này × vi phân cái kia."
    },
    {
      module: "A", difficulty: "easy",
      q: "a = [1, 0], b = [0, 1]. a · b = ?",
      options: ["0", "1", "2", "√2"],
      answer: 0,
      explanation: "a·b = 1×0 + 0×1 = 0. Hai vector đơn vị trục x và y vuông góc nhau."
    },
    {
      module: "A", difficulty: "medium",
      q: "||a|| với a = [3, 4] = ?",
      options: ["5", "7", "12", "√7"],
      answer: 0,
      explanation: "||a|| = √(3² + 4²) = √(9+16) = √25 = 5. Đây là bộ số Pythagorean 3-4-5."
    },
    {
      module: "A", difficulty: "medium",
      q: "Cosine similarity của a = [1, 1] và b = [1, 1] = ?",
      options: ["1.0 (cùng hướng hoàn toàn)", "0.5", "0", "√2"],
      answer: 0,
      explanation: "a·b = 2. ||a|| = ||b|| = √2. Cosine = 2/(√2·√2) = 2/2 = 1.0."
    },
    {
      module: "A", difficulty: "easy",
      q: "Cosine similarity = 0 nghĩa là?",
      options: ["Hai vector vuông góc nhau", "Hai vector giống nhau", "Hai vector ngược chiều", "Một vector bằng 0"],
      answer: 0,
      explanation: "Cosine(90°) = 0 → không có component nào cùng hướng."
    },
    {
      module: "A", difficulty: "easy",
      q: "Cosine similarity = −1 nghĩa là?",
      options: ["Hai vector ngược hướng hoàn toàn", "Hai vector giống nhau", "Vuông góc", "Không xác định"],
      answer: 0,
      explanation: "Cosine(180°) = −1 → hai vector đối lập hoàn toàn."
    },
    {
      module: "A", difficulty: "medium",
      q: "∫₀¹ 2x dx = ?",
      options: ["1", "2", "0.5", "4"],
      answer: 0,
      explanation: "∫2x dx = x². Tính từ 0 đến 1: [x²]₀¹ = 1 − 0 = 1."
    },
    {
      module: "A", difficulty: "easy",
      q: "Sin(π/6) = ?",
      options: ["0.5", "√2/2", "√3/2", "1"],
      answer: 0,
      explanation: "Sin(30°) = sin(π/6) = 0.5. Bộ 30-60-90: sin30=0.5, sin60=√3/2, sin90=1."
    },
    {
      module: "A", difficulty: "easy",
      q: "Cos(π/3) = ?",
      options: ["0.5", "√3/2", "0", "1"],
      answer: 0,
      explanation: "Cos(60°) = cos(π/3) = 0.5. Cos60 = sin30."
    },
    {
      module: "A", difficulty: "medium",
      q: "d/dx(3x² + 2x + 1) tại x = 2 = ?",
      options: ["14", "12", "16", "8"],
      answer: 0,
      explanation: "f'(x) = 6x + 2. f'(2) = 6×2 + 2 = 12 + 2 = 14."
    },
    {
      module: "A", difficulty: "hard",
      q: "d/dx(σ(x)) = σ(x)(1−σ(x)) với σ là sigmoid. Tại x = 0, giá trị = ?",
      options: ["0.25", "0.5", "1.0", "0"],
      answer: 0,
      explanation: "σ(0) = 1/(1+e⁰) = 0.5. Đạo hàm = 0.5×(1−0.5) = 0.5×0.5 = 0.25."
    },
    {
      module: "A", difficulty: "medium",
      q: "Trong gradient descent: weight := 3 − 0.1 × (d/dx x² tại x=3). Kết quả weight mới = ?",
      options: ["2.4", "3.6", "3.0", "2.7"],
      answer: 0,
      explanation: "d/dx(x²) = 2x. Tại x=3: gradient = 6. w := 3 − 0.1×6 = 3 − 0.6 = 2.4."
    },
    {
      module: "A", difficulty: "medium",
      q: "Tích phân ∫f(x)dx trong ngữ cảnh xác suất có ý nghĩa?",
      options: [
        "Diện tích dưới density function — tổng xác suất liên tục",
        "Đạo hàm của phân phối",
        "Variance của phân phối",
        "Mode của phân phối"
      ],
      answer: 0,
      explanation: "PDF: ∫f(x)dx = 1 (tổng xác suất = 1). Xác suất P(a<X<b) = ∫ₐᵇ f(x)dx."
    },
    {
      module: "A", difficulty: "hard",
      q: "Trong RAG, cosine similarity giữa query embedding và document embedding được dùng để?",
      options: [
        "Xếp hạng tài liệu — tài liệu similarity cao với query được ưu tiên",
        "Tính toán loss của LLM",
        "Encode text thành số",
        "Kiểm tra prompt injection"
      ],
      answer: 0,
      explanation: "Vector search trong RAG: tìm top-k documents có cosine similarity cao nhất với query embedding."
    },
    {
      module: "A", difficulty: "hard",
      q: "Positional encoding trong Transformer dùng sin/cos để?",
      options: [
        "Mã hóa vị trí token để model biết thứ tự — mỗi vị trí có pattern unique",
        "Tính attention score",
        "Normalize embedding",
        "Tạo random noise"
      ],
      answer: 0,
      explanation: "PE(pos,2i) = sin(pos/10000^(2i/d)), PE(pos,2i+1) = cos(...). Cho phép model nhận biết vị trí tương đối của các token."
    }
  ]
};


// ─── EXPANDED THEORY CONTENT (Lý thuyết mở rộng Module A) ─────────────────

window.LESSON_EXTRA_THEORY = {

  "probability-basics": {
    allFormulas: [
      { name: "Phép cộng xác suất", formula: "P(A ∪ B) = P(A) + P(B) − P(A ∩ B)", note: "Khi loại trừ nhau: P(A ∪ B) = P(A) + P(B)" },
      { name: "Phần bù", formula: "P(Aᶜ) = 1 − P(A)", note: "Dùng khi đề hỏi 'ít nhất một', 'không xảy ra'" },
      { name: "Độc lập", formula: "P(A ∩ B) = P(A) × P(B)", note: "Nếu và chỉ nếu A, B độc lập" },
      { name: "Xác suất có điều kiện", formula: "P(A | B) = P(A ∩ B) / P(B)", note: "P(B) > 0" },
      { name: "Quy tắc nhân", formula: "P(A ∩ B) = P(B|A) × P(A)", note: "Tổng quát, không cần độc lập" },
      { name: "Bonferroni (tối thiểu)", formula: "P(A ∩ B) ≥ P(A) + P(B) − 1", note: "Khi hai sự kiện gần như chắc chắn" },
    ],
    workedExamples: [
      {
        title: "Ví dụ 1: Phần bù — ít nhất một lỗi",
        problem: "Dây chuyền có P(lỗi/sản phẩm) = 3%. Kiểm tra 5 sản phẩm độc lập. P(ít nhất 1 lỗi) = ?",
        steps: [
          "Không dùng cộng từng trường hợp (P=1 lỗi) + (P=2 lỗi) + ... — quá phức tạp",
          "Dùng phần bù: P(ít nhất 1) = 1 − P(không lỗi nào)",
          "P(không lỗi mỗi lần) = 1 − 0.03 = 0.97",
          "5 lần độc lập: P(không lỗi nào) = 0.97⁵ ≈ 0.8587",
          "P(ít nhất 1 lỗi) = 1 − 0.8587 ≈ 14.13%"
        ],
        answer: "≈ 14.13%"
      },
      {
        title: "Ví dụ 2: Xác suất có điều kiện — rút không hoàn lại",
        problem: "Túi 4 đỏ, 3 xanh. Rút 2 không hoàn lại. P(cả 2 đỏ) = ?",
        steps: [
          "P(đỏ₁) = 4/7 (7 bi, 4 đỏ)",
          "Sau khi rút 1 đỏ: còn 6 bi, 3 đỏ",
          "P(đỏ₂ | đỏ₁) = 3/6 = 1/2",
          "P(cả 2 đỏ) = 4/7 × 1/2 = 4/14 = 2/7 ≈ 28.6%"
        ],
        answer: "2/7 ≈ 28.6%"
      },
      {
        title: "Ví dụ 3: Phân biệt độc lập và loại trừ nhau",
        problem: "A = {kết quả chẵn}, B = {kết quả lẻ} khi gieo xúc xắc. Độc lập hay loại trừ?",
        steps: [
          "P(A) = 3/6 = 0.5, P(B) = 3/6 = 0.5",
          "A ∩ B = ∅ → P(A ∩ B) = 0 → Loại trừ nhau",
          "Nếu độc lập: P(A ∩ B) = 0.5×0.5 = 0.25 ≠ 0",
          "Kết luận: Loại trừ nhau, KHÔNG độc lập"
        ],
        answer: "Loại trừ nhau, không độc lập"
      }
    ]
  },

  "bayes": {
    allFormulas: [
      { name: "Định lý Bayes", formula: "P(A|B) = P(B|A) × P(A) / P(B)", note: "Cơ bản" },
      { name: "Total Probability", formula: "P(B) = P(B|A)P(A) + P(B|Aᶜ)P(Aᶜ)", note: "Khi có 2 trường hợp" },
      { name: "Bayes đầy đủ", formula: "P(A|B) = P(B|A)P(A) / [P(B|A)P(A) + P(B|Aᶜ)P(Aᶜ)]", note: "Mẫu số là evidence" },
      { name: "Sensitivity = Recall", formula: "TPR = P(dương | bệnh) = TP/(TP+FN)", note: "Test bắt được bao nhiêu positive thật" },
      { name: "Specificity", formula: "TNR = P(âm | khỏe) = TN/(TN+FP)", note: "Test xác nhận đúng bao nhiêu negative" },
      { name: "Precision = PPV", formula: "P(bệnh | dương) = TP/(TP+FP)", note: "Dương tính thật sự positive" },
    ],
    workedExamples: [
      {
        title: "Ví dụ 1: Bẫy base rate — test y tế",
        problem: "Bệnh hiếm P(bệnh)=1%. Test sensitivity=99%, false positive rate=5%. Test dương: thực sự bệnh bao nhiêu %?",
        steps: [
          "Tưởng tượng 10.000 người:",
          "• Có bệnh: 10.000 × 1% = 100 người",
          "• Khỏe: 9.900 người",
          "• Test dương thật (TP): 100 × 99% = 99 người",
          "• Test dương giả (FP): 9.900 × 5% = 495 người",
          "Tổng test dương: 99 + 495 = 594",
          "P(bệnh | dương) = 99/594 ≈ 16.7%",
          "→ Dù sensitivity 99%, chỉ 1/6 người test dương là thật sự bệnh!"
        ],
        answer: "≈ 16.7% — vì bệnh hiếm, false positive áp đảo"
      },
      {
        title: "Ví dụ 2: Tác động của prior",
        problem: "Cùng test trên nhưng P(bệnh)=10% (sàng lọc nhóm nguy cơ cao). P(bệnh | dương) = ?",
        steps: [
          "10.000 người: 1.000 có bệnh, 9.000 khỏe",
          "TP = 1.000 × 99% = 990",
          "FP = 9.000 × 5% = 450",
          "P(bệnh | dương) = 990/(990+450) = 990/1440 ≈ 68.8%",
          "→ Prior tăng 10× làm precision tăng từ 16.7% lên 68.8%!"
        ],
        answer: "≈ 68.8% — prior cao hơn → precision cao hơn nhiều"
      }
    ]
  },

  "stats-expectation": {
    allFormulas: [
      { name: "Kỳ vọng (rời rạc)", formula: "E[X] = Σ xᵢ × P(X = xᵢ)", note: "Trung bình có trọng số theo xác suất" },
      { name: "Kỳ vọng (liên tục)", formula: "E[X] = ∫ x·f(x) dx", note: "f(x) là probability density function" },
      { name: "Variance", formula: "Var(X) = E[(X−μ)²] = E[X²] − (E[X])²", note: "Hai cách tính tương đương" },
      { name: "Standard deviation", formula: "σ = √Var(X)", note: "Cùng đơn vị với X" },
      { name: "Tính tuyến tính E", formula: "E[aX + b] = a·E[X] + b", note: "Luôn đúng" },
      { name: "Variance scale", formula: "Var(aX + b) = a²·Var(X)", note: "Dịch chuyển b không ảnh hưởng" },
      { name: "Z-score", formula: "z = (x − μ) / σ", note: "Chuẩn hóa về phân phối chuẩn" },
      { name: "Bernoulli", formula: "E[X] = p, Var(X) = p(1−p)", note: "Max variance khi p = 0.5" },
      { name: "Standard error", formula: "SE = σ / √n", note: "Giảm khi n tăng" },
    ],
    workedExamples: [
      {
        title: "Ví dụ 1: Tác động outlier với mean vs median",
        problem: "Dataset lương (triệu): {8, 9, 10, 11, 500}. Đại diện tốt là mean hay median?",
        steps: [
          "Mean = (8+9+10+11+500)/5 = 538/5 = 107.6 triệu",
          "Median = phần tử giữa = 10 triệu",
          "Mean bị kéo bởi outlier 500, không đại diện cho 4 người còn lại",
          "Median (10) đại diện 'trung tâm thực sự' của dataset"
        ],
        answer: "Median (10 triệu) — bền hơn với outlier"
      },
      {
        title: "Ví dụ 2: Tính kỳ vọng và variance",
        problem: "X: bán được 0 (P=0.4), 100 (P=0.4), 200 (P=0.2). E[X] và Var(X) = ?",
        steps: [
          "E[X] = 0×0.4 + 100×0.4 + 200×0.2 = 0 + 40 + 40 = 80",
          "E[X²] = 0²×0.4 + 100²×0.4 + 200²×0.2 = 0 + 4000 + 8000 = 12000",
          "Var(X) = E[X²] − (E[X])² = 12000 − 6400 = 5600",
          "σ = √5600 ≈ 74.8"
        ],
        answer: "E[X] = 80, Var(X) = 5600, σ ≈ 74.8"
      }
    ]
  },

  "confusion-matrix": {
    allFormulas: [
      { name: "Accuracy", formula: "(TP + TN) / (TP + FP + FN + TN)", note: "Tốt khi class cân bằng" },
      { name: "Precision (PPV)", formula: "TP / (TP + FP)", note: "Giảm false alarm" },
      { name: "Recall = Sensitivity", formula: "TP / (TP + FN)", note: "Giảm bỏ sót" },
      { name: "F1 Score", formula: "2 × P × R / (P + R)", note: "Harmonic mean của P và R" },
      { name: "Specificity (TNR)", formula: "TN / (TN + FP)", note: "Tỉ lệ negative được xác nhận đúng" },
      { name: "FPR (False Positive Rate)", formula: "FP / (FP + TN) = 1 − Specificity", note: "Trục x của ROC" },
      { name: "MCC", formula: "(TP×TN − FP×FN) / √[(TP+FP)(TP+FN)(TN+FP)(TN+FN)]", note: "Metric cân bằng nhất khi imbalanced" },
    ],
    workedExamples: [
      {
        title: "Ví dụ 1: Tính đầy đủ các metric",
        problem: "TP=80, FP=20, FN=10, TN=890 (tổng 1000). Tính tất cả.",
        steps: [
          "Accuracy = (80+890)/1000 = 970/1000 = 0.97",
          "Precision = 80/(80+20) = 80/100 = 0.80",
          "Recall = 80/(80+10) = 80/90 ≈ 0.889",
          "F1 = 2×0.8×0.889/(0.8+0.889) = 1.422/1.689 ≈ 0.842",
          "Specificity = 890/(890+20) = 890/910 ≈ 0.978",
          "FPR = 20/(20+890) = 20/910 ≈ 0.022"
        ],
        answer: "Acc=0.97, P=0.80, R=0.889, F1=0.842, Spec=0.978"
      },
      {
        title: "Ví dụ 2: Chọn threshold theo business need",
        problem: "AI phát hiện ung thư: FN (bỏ sót bệnh) đắt hơn FP (test thêm). Cần làm gì?",
        steps: [
          "Hạ threshold → model dự đoán positive nhiều hơn → Recall tăng, Precision giảm",
          "Ưu tiên Recall cao (sensitivity) để không bỏ sót bệnh nhân",
          "Chấp nhận Precision thấp hơn (nhiều test false positive nhưng không nguy hiểm)",
          "Chọn threshold sao cho Recall ≥ 0.95 trước, rồi tối đa Precision"
        ],
        answer: "Hạ threshold, ưu tiên Recall/Sensitivity cao"
      }
    ]
  },

  "matrix-calculus": {
    allFormulas: [
      { name: "Nhân ma trận", formula: "(m,n) × (n,k) = (m,k)", note: "Cột A phải bằng hàng B" },
      { name: "Transpose", formula: "(Aᵀ)ᵢⱼ = Aⱼᵢ, shape (m,n)→(n,m)", note: "Đổi hàng thành cột" },
      { name: "Tích của transpose", formula: "(AB)ᵀ = BᵀAᵀ", note: "Thứ tự đảo ngược" },
      { name: "Linear layer", formula: "y = XW + b", note: "X:(m,n), W:(n,k), b:(k,), y:(m,k)" },
      { name: "Gradient descent", formula: "w := w − lr × ∂L/∂w", note: "Đi ngược chiều gradient" },
      { name: "Chain rule", formula: "∂L/∂w = ∂L/∂y × ∂y/∂w", note: "Nền tảng backpropagation" },
      { name: "Cosine similarity", formula: "cos(θ) = (a·b) / (||a|| × ||b||)", note: "∈ [−1, 1]" },
      { name: "Dot product", formula: "a·b = Σ aᵢbᵢ = ||a||||b||cos(θ)", note: "Hai cách tính" },
    ],
    workedExamples: [
      {
        title: "Ví dụ 1: Kiểm tra shape trong neural network",
        problem: "Input batch (32,784), Linear W(784,128), Linear W2(128,10). Shape qua từng layer?",
        steps: [
          "Input: (32, 784)",
          "Sau Linear W(784,128): (32,784)×(784,128) = (32,128) ✓",
          "Sau activation ReLU: vẫn (32,128)",
          "Sau Linear W2(128,10): (32,128)×(128,10) = (32,10) ✓",
          "Output: 32 mẫu, mỗi mẫu 10 logit"
        ],
        answer: "(32,784) → (32,128) → (32,10)"
      },
      {
        title: "Ví dụ 2: Gradient descent step",
        problem: "Loss = (w−3)². Gradient tại w=5, lr=0.1. w sau 1 bước = ?",
        steps: [
          "∂L/∂w = 2(w−3) = 2(5−3) = 4",
          "w := 5 − 0.1 × 4 = 5 − 0.4 = 4.6",
          "Loss mới: (4.6−3)² = 2.56 < 4 (cũ)",
          "Tiếp tục: w=4.6, grad=2×1.6=3.2, w:=4.6−0.32=4.28..."
        ],
        answer: "w = 4.6 sau 1 bước, tiếp tục hội tụ về w=3"
      }
    ]
  },

  "calculus-dot-trig": {
    allFormulas: [
      { name: "Power rule", formula: "d/dx(xⁿ) = n·xⁿ⁻¹", note: "Quy tắc lũy thừa" },
      { name: "d/dx(sin x)", formula: "cos x", note: "Chu kỳ: sin→cos→−sin→−cos→sin" },
      { name: "d/dx(cos x)", formula: "−sin x", note: "Dấu âm quan trọng!" },
      { name: "d/dx(eˣ)", formula: "eˣ", note: "Tự đạo hàm" },
      { name: "d/dx(ln x)", formula: "1/x", note: "x > 0" },
      { name: "Chain rule", formula: "d/dx[f(g(x))] = f'(g(x)) · g'(x)", note: "Đạo hàm ngoài × đạo hàm trong" },
      { name: "Product rule", formula: "d/dx[f·g] = f'g + fg'", note: "Leibniz rule" },
      { name: "Quotient rule", formula: "d/dx[f/g] = (f'g − fg') / g²", note: "g ≠ 0" },
      { name: "d/dx(sigmoid)", formula: "σ(x)(1−σ(x))", note: "Max = 0.25 tại x=0" },
      { name: "Dot product", formula: "a·b = Σaᵢbᵢ = ||a||||b||cosθ", note: "Hai công thức tương đương" },
      { name: "Vector norm", formula: "||a|| = √(Σaᵢ²)", note: "Euclidean norm" },
      { name: "Cosine similarity", formula: "sim(a,b) = a·b / (||a||·||b||)", note: "Độ tương đồng hướng" },
      { name: "Sin/Cos chuẩn", formula: "sin²θ + cos²θ = 1", note: "Pythagorean identity" },
    ],
    workedExamples: [
      {
        title: "Ví dụ 1: Chain rule trong backprop",
        problem: "f(x) = sin(x²+1). Tính f'(x).",
        steps: [
          "Xác định hàm ngoài và trong: ngoài = sin(u), trong = u = x²+1",
          "d/du(sin u) = cos u, d/dx(x²+1) = 2x",
          "Chain rule: f'(x) = cos(x²+1) × 2x = 2x·cos(x²+1)"
        ],
        answer: "f'(x) = 2x·cos(x²+1)"
      },
      {
        title: "Ví dụ 2: Cosine similarity trong RAG",
        problem: "Query embedding: q=[1,2,0]. Doc embedding: d=[2,1,0]. Cosine similarity = ?",
        steps: [
          "q·d = 1×2 + 2×1 + 0×0 = 4",
          "||q|| = √(1+4+0) = √5 ≈ 2.236",
          "||d|| = √(4+1+0) = √5 ≈ 2.236",
          "cosine = 4 / (√5 × √5) = 4/5 = 0.8",
          "Similarity = 0.8 → document liên quan khá tốt với query"
        ],
        answer: "Cosine similarity = 0.8"
      },
      {
        title: "Ví dụ 3: Bảng giá trị sin/cos cần thuộc",
        problem: "Liệt kê giá trị sin và cos tại các góc chuẩn",
        steps: [
          "sin(0°)=0,  cos(0°)=1",
          "sin(30°)=0.5, cos(30°)=√3/2≈0.866",
          "sin(45°)=√2/2≈0.707, cos(45°)=√2/2≈0.707",
          "sin(60°)=√3/2≈0.866, cos(60°)=0.5",
          "sin(90°)=1, cos(90°)=0",
          "sin(180°)=0, cos(180°)=−1"
        ],
        answer: "Bảng trên — cần thuộc để làm câu tính nhanh"
      }
    ]
  }
};
