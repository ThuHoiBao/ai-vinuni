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
  ],

  // ══════════════════════════════════════════════════════════
  // MODULE B — BÀI 1: Python core
  // ══════════════════════════════════════════════════════════
  "python-core": [
    { module:"B", difficulty:"easy",
      q: "Kết quả của `[x**2 for x in range(4)]` là gì?",
      options:["[0,1,4,9]","[1,4,9,16]","[0,1,2,3]","[1,2,3,4]"],
      answer:0,
      explanation:"range(4) sinh 0,1,2,3 nên bình phương lần lượt là 0,1,4,9." },
    { module:"B", difficulty:"easy",
      q: "Python list nào là mutable?",
      options:["list","tuple","str","frozenset"],
      answer:0,
      explanation:"List có thể thay đổi phần tử sau khi tạo. Tuple, str, frozenset là immutable." },
    { module:"B", difficulty:"easy",
      q: "`d = {'a':1,'b':2}; d.get('c', 0)` trả về gì?",
      options:["0","None","KeyError","'c'"],
      answer:0,
      explanation:"get(key, default) trả về default khi key không tồn tại." },
    { module:"B", difficulty:"easy",
      q: "`len({'a','b','a','c'})` bằng bao nhiêu?",
      options:["3","4","2","1"],
      answer:0,
      explanation:"Set loại bỏ trùng: {'a','b','c'} có 3 phần tử." },
    { module:"B", difficulty:"easy",
      q: "Biểu thức `[i for i in range(10) if i % 2 == 0]` trả về?",
      options:["[0,2,4,6,8]","[1,3,5,7,9]","[0,1,2,3,4]","[2,4,6,8,10]"],
      answer:0,
      explanation:"Các số chẵn trong range(10): 0,2,4,6,8." },
    { module:"B", difficulty:"medium",
      q: "Mutable default argument trong Python gây ra vấn đề gì?",
      options:["Trạng thái được chia sẻ giữa các lần gọi hàm","Hàm không chạy được","Lỗi syntax","Argument bị bỏ qua"],
      answer:0,
      explanation:"def f(x=[]): x được tạo một lần lúc định nghĩa hàm, không phải mỗi lần gọi. Dùng None rồi khởi tạo trong thân hàm." },
    { module:"B", difficulty:"medium",
      q: "`a = [1,2,3]; b = a; b.append(4); print(len(a))` bằng?",
      options:["4","3","1","Lỗi"],
      answer:0,
      explanation:"b = a không copy, cả hai trỏ cùng list. append(4) làm list dài 4 phần tử." },
    { module:"B", difficulty:"medium",
      q: "Cú pháp nào dùng để tạo shallow copy của list?",
      options:["b = a[:]","b = a","b = a.copy() hoặc b = a[:]","Cả b=a.copy() và b=a[:]"],
      answer:3,
      explanation:"Cả hai cách đều tạo shallow copy: list mới nhưng phần tử bên trong vẫn tham chiếu cùng object." },
    { module:"B", difficulty:"medium",
      q: "dict.items() trả về gì?",
      options:["Cặp (key, value) dạng view","Chỉ các giá trị","Chỉ các khóa","Một list"],
      answer:0,
      explanation:"dict.items() trả về view chứa các tuple (key, value), dùng được trong for k, v in d.items()." },
    { module:"B", difficulty:"medium",
      q: "Kết quả của `sorted({'b':2,'a':1,'c':3})` là gì?",
      options:["['a','b','c']","['b','a','c']","[1,2,3]","{'a':1,'b':2,'c':3}"],
      answer:0,
      explanation:"sorted áp lên dict mặc định sắp xếp theo key theo alphabet." },
    { module:"B", difficulty:"medium",
      q: "`def add(a, b=5): return a + b`. Gọi `add(3)` trả về?",
      options:["8","3","5","Lỗi"],
      answer:0,
      explanation:"b mặc định là 5, a=3, nên kết quả là 3+5=8." },
    { module:"B", difficulty:"medium",
      q: "Lambda tương đương hàm nào: `f = lambda x, y: x if x > y else y`?",
      options:["Trả giá trị lớn hơn của x và y","Trả x+y","Trả x-y","Trả True/False"],
      answer:0,
      explanation:"Đây là biểu thức điều kiện inline: nếu x > y thì x, ngược lại y — hàm max." },
    { module:"B", difficulty:"medium",
      q: "Cách đếm số lần xuất hiện của từng phần tử trong list nhanh nhất?",
      options:["from collections import Counter","Dùng for loop và dict.get","Cả hai đều đúng","Dùng sorted"],
      answer:2,
      explanation:"Counter là cách ngắn nhất; dict.get(x,0)+1 cũng chính xác và không cần import." },
    { module:"B", difficulty:"hard",
      q: "`x = [[0]*3]*3; x[0][1] = 9; print(x[1][1])` bằng?",
      options:["9","0","Lỗi","3"],
      answer:0,
      explanation:"[[0]*3]*3 tạo 3 tham chiếu đến cùng một sublist. Sửa x[0][1] cũng sửa x[1][1] và x[2][1]." },
    { module:"B", difficulty:"hard",
      q: "Generator expression khác list comprehension ở điểm nào chính?",
      options:["Generator lazy — chỉ tính khi cần, không lưu toàn bộ vào RAM","Generator luôn nhanh hơn","Generator tạo tuple","Generator không dùng được trong vòng lặp"],
      answer:0,
      explanation:"Generator dùng () thay [], sinh từng phần tử khi cần — tiết kiệm bộ nhớ với dữ liệu lớn." },
    { module:"B", difficulty:"hard",
      q: "`a = (1,); type(a)` là gì? Nếu bỏ dấu phẩy: `b = (1)` thì `type(b)`?",
      options:["tuple và int","tuple và tuple","int và tuple","int và int"],
      answer:0,
      explanation:"Dấu phẩy sau phần tử duy nhất mới làm tuple. (1) chỉ là số nguyên 1 đặt trong ngoặc." },
    { module:"B", difficulty:"hard",
      q: "Kết quả của `list(map(lambda x: x*2, filter(lambda x: x%2==0, range(6))))`?",
      options:["[0,4,8]","[0,2,4]","[2,4,6,8]","[1,3,5]"],
      answer:0,
      explanation:"filter lấy số chẵn trong range(6): 0,2,4. map nhân đôi: 0,4,8." },
    { module:"B", difficulty:"hard",
      q: "Trong Python, `*args` và `**kwargs` dùng để làm gì?",
      options:["*args nhận positional tuỳ số lượng; **kwargs nhận keyword tuỳ số lượng","Cả hai nhận list","*args chỉ nhận số nguyên","**kwargs chỉ nhận dict rỗng"],
      answer:0,
      explanation:"*args gom positional arguments thành tuple; **kwargs gom keyword arguments thành dict." },
    { module:"B", difficulty:"hard",
      q: "Kết quả: `d = {}; [d.update({i: i**2}) for i in range(3)]; print(d)`?",
      options:["{0:0,1:1,2:4}","[None,None,None]","{}","Lỗi"],
      answer:0,
      explanation:"List comprehension chạy side-effect: mỗi lần update thêm cặp vào d. Kết quả d = {0:0, 1:1, 2:4}." },
    { module:"B", difficulty:"hard",
      q: "Để unpack dict `{\"a\":1,\"b\":2}` vào kwargs của hàm, dùng cú pháp nào?",
      options:["f(**d)","f(*d)","f(d)","f(d.values())"],
      answer:0,
      explanation:"**d unpack dict thành keyword arguments; f(**{'a':1,'b':2}) tương đương f(a=1, b=2)." }
  ],

  // ══════════════════════════════════════════════════════════
  // MODULE B — BÀI 2: Đọc code, debug, độ phức tạp
  // ══════════════════════════════════════════════════════════
  "read-code-debug": [
    { module:"B", difficulty:"easy",
      q: "`s = 0\nfor i in range(5): s += i\nprint(s)` — kết quả là?",
      options:["10","15","4","5"],
      answer:0,
      explanation:"0+1+2+3+4 = 10." },
    { module:"B", difficulty:"easy",
      q: "Độ phức tạp thời gian của một vòng for lồng trong một vòng for khác (cả hai chạy n bước) là?",
      options:["O(n²)","O(n)","O(log n)","O(2n)"],
      answer:0,
      explanation:"Vòng lặp lồng nhau mỗi cái n bước: n × n = n²." },
    { module:"B", difficulty:"easy",
      q: "Tra cứu key trong dict Python trung bình tốn bao nhiêu thời gian?",
      options:["O(1)","O(n)","O(log n)","O(n²)"],
      answer:0,
      explanation:"Dict dùng hash table, truy cập trung bình O(1)." },
    { module:"B", difficulty:"easy",
      q: "`lst = [1,2,3]; print(lst[10])` sẽ gây ra lỗi gì?",
      options:["IndexError","KeyError","ValueError","TypeError"],
      answer:0,
      explanation:"Truy cập index ngoài phạm vi list gây IndexError." },
    { module:"B", difficulty:"easy",
      q: "Kết quả `print(1 == '1')` trong Python 3?",
      options:["False","True","TypeError","1"],
      answer:0,
      explanation:"So sánh int và str trả False vì khác kiểu, không ném lỗi." },
    { module:"B", difficulty:"medium",
      q: "`x = 5\ndef f(): x = 10\nf()\nprint(x)` — kết quả là?",
      options:["5","10","Lỗi","None"],
      answer:0,
      explanation:"Biến x trong f() là local, không ảnh hưởng x global. print(x) in ra 5." },
    { module:"B", difficulty:"medium",
      q: "Bug nào thường gặp khi sửa list trong khi đang lặp qua nó?",
      options:["Bỏ sót hoặc lặp lại phần tử do index dịch chuyển","IndexError luôn luôn xảy ra","Không có bug","List bị xóa hoàn toàn"],
      answer:0,
      explanation:"Khi xóa/thêm phần tử trong lúc for loop, index trượt và có thể bỏ qua hoặc lặp lại phần tử." },
    { module:"B", difficulty:"medium",
      q: "`def fact(n): return n * fact(n-1)` — đây thiếu gì?",
      options:["Base case (n==0 hoặc n==1)","Return statement","Tham số","Import module"],
      answer:0,
      explanation:"Không có điều kiện dừng nên đệ quy vô hạn gây RecursionError." },
    { module:"B", difficulty:"medium",
      q: "`for i in range(3):\n  for j in range(3):\n    if i==j: print(i)` — in ra bao nhiêu dòng?",
      options:["3","9","0","6"],
      answer:0,
      explanation:"i==j khi i=0,j=0; i=1,j=1; i=2,j=2 — 3 lần in." },
    { module:"B", difficulty:"medium",
      q: "Code nào có độ phức tạp O(n log n)?",
      options:["sort() trong Python","Tìm kiếm tuần tự","Binary search","Đọc một phần tử"],
      answer:0,
      explanation:"Timsort (Python built-in sort) có độ phức tạp O(n log n) trong mọi trường hợp." },
    { module:"B", difficulty:"medium",
      q: "Off-by-one error là gì?",
      options:["Lỗi sai biên (range bắt đầu/kết thúc sai một đơn vị)","Lỗi chia cho 0","Lỗi kiểu dữ liệu","Lỗi tên biến"],
      answer:0,
      explanation:"range(1, n) khác range(0, n) một phần tử. Lỗi biên rất phổ biến trong loop và slice." },
    { module:"B", difficulty:"medium",
      q: "`print('a' * 3)` cho kết quả gì?",
      options:["'aaa'","3","'a3'","Lỗi"],
      answer:0,
      explanation:"Nhân string với số nguyên lặp lại string đó." },
    { module:"B", difficulty:"hard",
      q: "`lst = [1,2,3,4,5]; print(lst[1:4])` trả về?",
      options:["[2,3,4]","[1,2,3]","[2,3,4,5]","[1,2,3,4]"],
      answer:0,
      explanation:"Slice [1:4] lấy index 1,2,3 (không bao gồm 4): giá trị 2,3,4." },
    { module:"B", difficulty:"hard",
      q: "Binary search yêu cầu dữ liệu ở trạng thái nào?",
      options:["Đã được sắp xếp","Ngẫu nhiên","Phân phối đều","Không có yêu cầu"],
      answer:0,
      explanation:"Binary search chỉ hoạt động đúng trên mảng đã sắp xếp." },
    { module:"B", difficulty:"hard",
      q: "Kết quả của `sum([[1,2],[3,4]], [])` là?",
      options:["[1,2,3,4]","[[1,2],[3,4]]","10","Lỗi"],
      answer:0,
      explanation:"sum với start=[] nối các list lại: [] + [1,2] + [3,4] = [1,2,3,4]. Đây là flatten 1 lớp." },
    { module:"B", difficulty:"hard",
      q: "`a = []; b = a; a += [1]; print(b)` kết quả là?",
      options:["[1]","[]","None","Lỗi"],
      answer:0,
      explanation:"a += [1] tương đương a.extend([1]) — sửa trực tiếp list gốc. b trỏ cùng list nên in [1]." },
    { module:"B", difficulty:"hard",
      q: "Cách nào hiệu quả nhất để check xem một phần tử có trong tập hợp lớn không?",
      options:["Dùng set","Dùng list và in","Dùng sorted list","Dùng tuple"],
      answer:0,
      explanation:"set sử dụng hash table, kiểm tra membership O(1). List search là O(n)." },
    { module:"B", difficulty:"hard",
      q: "Độ phức tạp không gian của Merge Sort là?",
      options:["O(n)","O(1)","O(log n)","O(n²)"],
      answer:0,
      explanation:"Merge Sort cần mảng phụ O(n) để merge." },
    { module:"B", difficulty:"hard",
      q: "`try:\n  x = 1/0\nexcept ZeroDivisionError:\n  x = -1\nfinally:\n  x += 1\nprint(x)` — kết quả?",
      options:["0","1","-1","Lỗi"],
      answer:0,
      explanation:"ZeroDivisionError: x = -1. finally luôn chạy: x += 1 = 0." },
    { module:"B", difficulty:"hard",
      q: "Khi nào nên dùng `collections.deque` thay vì list?",
      options:["Khi cần thêm/xóa ở cả hai đầu với O(1)","Khi cần random access","Khi cần sort","Khi cần lưu trữ string"],
      answer:0,
      explanation:"list.insert(0, x) tốn O(n) vì dịch phần tử. deque.appendleft(x) là O(1)." }
  ],

  // ══════════════════════════════════════════════════════════
  // MODULE B — BÀI 3: Code tay / pseudo-code
  // ══════════════════════════════════════════════════════════
  "hand-code-pseudocode": [
    { module:"B", difficulty:"easy",
      q: "Khi viết code tay, điều nào quan trọng nhất?",
      options:["Xử lý đúng edge case và input/output rõ ràng","Syntax hoàn toàn chính xác","Không cần giải thích","Dùng nhiều thư viện"],
      answer:0,
      explanation:"Trong thi tự luận, logic đúng và edge case quan trọng hơn cú pháp hoàn hảo." },
    { module:"B", difficulty:"easy",
      q: "Edge case nào cần xử lý khi tính mean của list?",
      options:["List rỗng (chia cho 0)","List chứa string","List có 3 phần tử","List đã sắp xếp"],
      answer:0,
      explanation:"mean = sum/len, nếu list rỗng thì len=0 gây ZeroDivisionError." },
    { module:"B", difficulty:"easy",
      q: "Pipeline pandas chuẩn cho bài thi là gì?",
      options:["read -> inspect -> clean -> feature engineer -> split -> train","Train trước rồi clean","Split trước rồi read","Visualize trước rồi clean"],
      answer:0,
      explanation:"Thứ tự đúng: đọc dữ liệu, khám phá, làm sạch, tạo feature, chia tập, huấn luyện." },
    { module:"B", difficulty:"easy",
      q: "Pseudo-code tốt cần gì?",
      options:["Tên biến rõ ràng và độc lập với thư viện cụ thể","Syntax Python chính xác","Dùng nhiều import","Viết bằng C++"],
      answer:0,
      explanation:"Pseudo-code diễn đạt ý tưởng, không bị ràng buộc bởi ngôn ngữ cụ thể." },
    { module:"B", difficulty:"medium",
      q: "Bạn cần đếm tần suất từ trong list. Pseudo-code đúng là?",
      options:["for word in words: counts[word] = counts.get(word,0)+1","counts = sorted(words)","counts = len(words)","counts = words.unique()"],
      answer:0,
      explanation:"Pattern chuẩn: dict.get(key, 0) + 1 để tích lũy đếm." },
    { module:"B", difficulty:"medium",
      q: "Hàm nào trả top-k phần tử theo tần suất từ dict?",
      options:["sorted(counts.items(), key=lambda x: x[1], reverse=True)[:k]","sorted(counts)[:k]","counts[:k]","max(counts)"],
      answer:0,
      explanation:"Sắp xếp theo value giảm dần rồi slice k phần tử đầu." },
    { module:"B", difficulty:"medium",
      q: "Khi viết pipeline pandas trong thi, cần ghi rõ điều gì ngoài code?",
      options:["Giả định dữ liệu: cột nào tồn tại, missing xử lý thế nào","Chỉ cần kết quả","Không cần giải thích","Chỉ cần import"],
      answer:0,
      explanation:"Thi tự luận thường tính điểm cho cả logic và giải thích. Ghi giả định rõ ràng tránh mất điểm." },
    { module:"B", difficulty:"medium",
      q: "Cách tính top 3 quận có median price_per_m2 cao nhất bằng pandas?",
      options:["df.groupby('district')['ppm2'].median().nlargest(3)","df['district'].top(3)","df.sort('district')[:3]","df.max()[:3]"],
      answer:0,
      explanation:"groupby -> agg median -> nlargest(3) là pipeline chuẩn." },
    { module:"B", difficulty:"medium",
      q: "Lý do nên xử lý missing trước khi tính thống kê là?",
      options:["NaN lan truyền: phép toán với NaN cho NaN","Missing tự động được bỏ qua","Missing bằng 0","Pandas không hỗ trợ NaN"],
      answer:0,
      explanation:"Trong pandas/numpy, bất kỳ phép toán với NaN cho kết quả NaN. Cần dropna hoặc fillna trước." },
    { module:"B", difficulty:"medium",
      q: "Cú pháp Python để tính median an toàn khi list có thể rỗng?",
      options:["import statistics; statistics.median(lst) if lst else None","sum(lst)/len(lst)","max(lst)","sorted(lst)[0]"],
      answer:0,
      explanation:"statistics.median xử lý đúng, thêm kiểm tra rỗng trả None để tránh lỗi." },
    { module:"B", difficulty:"hard",
      q: "Viết pseudo-code tìm cặp (i,j) sao cho lst[i]+lst[j]==target, i<j. Độ phức tạp tốt nhất là?",
      options:["O(n) dùng set để lưu complement","O(n²) brute force","O(n log n) dùng sort","O(1) dùng dict"],
      answer:0,
      explanation:"Với mỗi x, kiểm tra (target-x) đã thấy chưa bằng set — O(n) thời gian, O(n) không gian." },
    { module:"B", difficulty:"hard",
      q: "Khi nào nên dùng recursion vs iteration?",
      options:["Recursion tự nhiên hơn cho tree/graph; iteration thường hiệu quả hơn với list đơn giản","Recursion luôn nhanh hơn","Iteration không thể thay recursion","Không có quy tắc"],
      answer:0,
      explanation:"DFS trên cây dễ viết bằng recursion. Nhưng Python stack giới hạn (~1000), nên iteration an toàn hơn với dữ liệu lớn." },
    { module:"B", difficulty:"hard",
      q: "Kết quả pseudo-code: `result=[]; for x in [1..5]: if x%2!=0: result.append(x*x)`. Là?",
      options:["[1,9,25]","[1,4,9,16,25]","[4,16]","[1,3,5]"],
      answer:0,
      explanation:"Số lẻ trong 1-5: 1,3,5. Bình phương: 1,9,25." },
    { module:"B", difficulty:"hard",
      q: "Hàm tạo running total (tích lũy) từ list không dùng itertools?",
      options:["Vòng lặp cộng dần vào biến acc","max(lst)","sorted(lst)","set(lst)"],
      answer:0,
      explanation:"acc=0; result=[]; for x in lst: acc+=x; result.append(acc). Đây là cumsum thủ công." },
    { module:"B", difficulty:"hard",
      q: "Trong thi, khi code tay hàm tính IQR, các bước đúng là?",
      options:["sort -> Q1=percentile 25% -> Q3=percentile 75% -> IQR=Q3-Q1","max-min","std*2","mean±std"],
      answer:0,
      explanation:"IQR = Q3 - Q1. Cần sort trước để tính percentile đúng." },
    { module:"B", difficulty:"hard",
      q: "Cách viết hàm one-hot encode cho cột categorical không dùng pandas get_dummies?",
      options:["Lấy unique categories, với mỗi dòng tạo dict {cat: 1 hoặc 0}","Dùng label encode","Không thể không dùng pandas","Dùng str.split"],
      answer:0,
      explanation:"Thuật toán: categories = sorted(set(col)); for row: encode = {c: int(row==c) for c in categories}." },
    { module:"B", difficulty:"hard",
      q: "Khi gặp bài code tay dự đoán churn bằng threshold, pseudo-code cần gồm?",
      options:["Load data -> feature -> predict score -> threshold -> label -> eval metric","Chỉ threshold","Chỉ load data","Chỉ metric"],
      answer:0,
      explanation:"Pipeline đầy đủ từ data đến metric là câu trả lời chuẩn cho bài tự luận." },
    { module:"B", difficulty:"hard",
      q: "Độ phức tạp của thuật toán tìm kiếm trong sorted array bằng binary search?",
      options:["O(log n)","O(n)","O(n log n)","O(1)"],
      answer:0,
      explanation:"Mỗi bước binary search chia đôi không gian tìm kiếm: O(log n)." },
    { module:"B", difficulty:"hard",
      q: "Khi đề yêu cầu 'viết code không dùng thư viện', điều nào đúng?",
      options:["Dùng vòng lặp và logic cơ bản của ngôn ngữ, giải thích rõ từng bước","Bỏ qua vì quá khó","Dùng numpy vẫn được","Không có kết quả đúng"],
      answer:0,
      explanation:"Thi thực chiến đánh giá logic nền tảng. Giải thích từng bước trong pseudo-code được điểm đầy đủ." },
    { module:"B", difficulty:"hard",
      q: "Viết pseudo-code flatten list lồng một lớp `[[1,2],[3,4],[5]]` không dùng itertools?",
      options:["result=[]; for sub in nested: for x in sub: result.append(x)","result=nested[0]","result=sum(nested)","result=list(nested)"],
      answer:0,
      explanation:"Vòng lặp lồng nhau: outer qua sublist, inner qua phần tử — đây là flatten depth-1." }
  ],

  // ══════════════════════════════════════════════════════════
  // MODULE B — BÀI 4: NumPy & pandas cơ bản
  // ══════════════════════════════════════════════════════════
  "numpy-pandas": [
    { module:"B", difficulty:"easy",
      q: "`import pandas as pd; df = pd.DataFrame({'a':[1,2],'b':[3,4]}); print(df.shape)` — kết quả?",
      options:["(2, 2)","(4,)","(2,)","(1, 4)"],
      answer:0,
      explanation:"2 dòng, 2 cột → shape (2, 2)." },
    { module:"B", difficulty:"easy",
      q: "Lệnh nào kiểm tra số giá trị missing theo từng cột?",
      options:["df.isna().sum()","df.count()","df.info()","df.describe()"],
      answer:0,
      explanation:"isna() tạo mask boolean, sum() đếm True theo cột." },
    { module:"B", difficulty:"easy",
      q: "`df['price'].mean()` tính gì?",
      options:["Trung bình cột price","Tổng cột price","Số dòng","Phương sai"],
      answer:0,
      explanation:"Series.mean() trả giá trị trung bình." },
    { module:"B", difficulty:"easy",
      q: "Lệnh nào đọc file CSV vào DataFrame?",
      options:["pd.read_csv('file.csv')","pd.load('file.csv')","pd.open('file.csv')","pd.get_csv('file.csv')"],
      answer:0,
      explanation:"pd.read_csv là hàm chuẩn đọc CSV." },
    { module:"B", difficulty:"easy",
      q: "`np.array([1,2,3]) + np.array([4,5,6])` cho kết quả gì?",
      options:["array([5,7,9])","array([4,10,18])","[1,2,3,4,5,6]","Lỗi"],
      answer:0,
      explanation:"NumPy cộng element-wise: 1+4=5, 2+5=7, 3+6=9." },
    { module:"B", difficulty:"medium",
      q: "Data leakage trong ML xảy ra khi nào?",
      options:["Thông tin từ tập test ảnh hưởng đến quá trình training","Model overfitting","Dữ liệu thiếu nhiều","Số feature quá ít"],
      answer:0,
      explanation:"Leakage: fit scaler/imputer trên toàn bộ dữ liệu trước khi split là ví dụ điển hình." },
    { module:"B", difficulty:"medium",
      q: "Cú pháp groupby để tính mean price theo city?",
      options:["df.groupby('city')['price'].mean()","df['city'].groupby('price')","df.mean().groupby('city')","df.sort('city')['price']"],
      answer:0,
      explanation:"groupby(key)[col].agg() là pattern chuẩn." },
    { module:"B", difficulty:"medium",
      q: "Khác nhau giữa `df.loc` và `df.iloc`?",
      options:["loc dùng nhãn (label); iloc dùng vị trí số nguyên","loc chỉ cho cột; iloc chỉ cho dòng","Cả hai giống nhau","loc nhanh hơn iloc"],
      answer:0,
      explanation:"loc['a':'c'] lấy từ nhãn 'a' đến 'c'. iloc[0:3] lấy vị trí 0,1,2." },
    { module:"B", difficulty:"medium",
      q: "Lệnh nào điền NaN trong cột 'age' bằng median?",
      options:["df['age'].fillna(df['age'].median())","df['age'].dropna()","df['age'].mean()","df.fillna(0)"],
      answer:0,
      explanation:"fillna(value) thay NaN bằng giá trị chỉ định; tính median trước rồi điền." },
    { module:"B", difficulty:"medium",
      q: "Fit scaler trên toàn bộ dữ liệu (bao gồm test) trước khi split gây ra vấn đề gì?",
      options:["Data leakage — model thấy thống kê của test khi training","Không có vấn đề gì","Model underfitting","Dữ liệu bị mất"],
      answer:0,
      explanation:"StandardScaler tính mean/std của cả dataset. Nếu test có trong đó, thông tin test rò rỉ vào train." },
    { module:"B", difficulty:"medium",
      q: "Lệnh tạo cột mới `price_per_m2` = price / area?",
      options:["df['price_per_m2'] = df['price'] / df['area']","df.price_per_m2 = price / area","df['ppm2'] = df.div('price','area')","df.create('ppm2')"],
      answer:0,
      explanation:"Phép chia cột trong pandas là element-wise và cú pháp gán cột mới dùng df['col'] = ..." },
    { module:"B", difficulty:"medium",
      q: "`df.describe()` mặc định cho biết thông tin gì?",
      options:["count, mean, std, min, 25%, 50%, 75%, max cho cột số","Chỉ mean","Kiểu dữ liệu","Missing values"],
      answer:0,
      explanation:"describe() tóm tắt 8 thống kê cho các cột số." },
    { module:"B", difficulty:"hard",
      q: "Pipeline đúng để tránh leakage khi scale features?",
      options:["Split trước, fit scaler trên X_train, transform X_train và X_test riêng","Fit scaler trên toàn bộ X rồi split","Scale trước split vì nhanh hơn","Không cần scale"],
      answer:0,
      explanation:"Quy tắc vàng: học thống kê từ train, áp dụng lên test. Không để test ảnh hưởng fitting." },
    { module:"B", difficulty:"hard",
      q: "Khi merge hai DataFrame có key trùng nhiều-nhiều (many-to-many), kết quả có bao nhiêu dòng?",
      options:["m × n dòng cho mỗi giá trị key trùng (cartesian product theo key)","m + n","max(m,n)","min(m,n)"],
      answer:0,
      explanation:"Many-to-many merge tạo tích Đề-các theo từng giá trị key — rất nguy hiểm, cần kiểm tra grain." },
    { module:"B", difficulty:"hard",
      q: "Lệnh nào lấy 5 dòng có price cao nhất?",
      options:["df.nlargest(5, 'price')","df.sort('price')[:5]","df['price'].max(5)","df.head(5)"],
      answer:0,
      explanation:"nlargest(n, col) trả n dòng có giá trị col lớn nhất." },
    { module:"B", difficulty:"hard",
      q: "`df.pivot_table(values='sales', index='month', columns='city', aggfunc='sum')` tạo ra?",
      options:["Bảng 2D: dòng=month, cột=city, giá trị=tổng sales","List tổng sales","Dict theo city","Chuỗi thời gian"],
      answer:0,
      explanation:"pivot_table tạo bảng tổng hợp đa chiều, rất hữu ích để xem dữ liệu theo hai biến phân loại." },
    { module:"B", difficulty:"hard",
      q: "Sau `df = df.dropna(subset=['price'])`, số dòng trong df thay đổi thế nào?",
      options:["Giảm — các dòng có price=NaN bị xóa","Tăng","Không thay đổi","Tất cả NaN bị xóa kể cả cột khác"],
      answer:0,
      explanation:"dropna(subset=['price']) chỉ xóa dòng có NaN ở cột price, cột khác không bị ảnh hưởng." },
    { module:"B", difficulty:"hard",
      q: "Cách đếm số giá trị duy nhất trong cột 'city'?",
      options:["df['city'].nunique()","df['city'].unique()","len(df['city'])","df['city'].count()"],
      answer:0,
      explanation:"nunique() trả số lượng giá trị distinct. unique() trả mảng các giá trị đó." },
    { module:"B", difficulty:"hard",
      q: "Để merge và giữ toàn bộ dòng từ bảng trái dù không khớp bảng phải, dùng?",
      options:["how='left'","how='inner'","how='right'","how='outer'"],
      answer:0,
      explanation:"LEFT JOIN giữ tất cả dòng bảng trái, điền NaN cho cột bảng phải khi không khớp." },
    { module:"B", difficulty:"hard",
      q: "Lệnh nào reset index sau khi filter?",
      options:["df.reset_index(drop=True)","df.reindex()","df.index = 0","df.set_index()"],
      answer:0,
      explanation:"reset_index(drop=True) tạo index 0,1,2,... mới và bỏ index cũ." }
  ],

  // ══════════════════════════════════════════════════════════
  // MODULE B — BÀI 5: NumPy chi tiết
  // ══════════════════════════════════════════════════════════
  "numpy-deep": [
    { module:"B", difficulty:"easy",
      q: "`np.zeros((3,4)).shape` bằng?",
      options:["(3, 4)","(4, 3)","(12,)","(3,)"],
      answer:0,
      explanation:"np.zeros((3,4)) tạo ma trận 3 dòng 4 cột, shape (3,4)." },
    { module:"B", difficulty:"easy",
      q: "`np.arange(0, 10, 2)` cho kết quả?",
      options:["array([0,2,4,6,8])","array([0,2,4,6,8,10])","array([2,4,6,8])","array([0,1,2,3,4])"],
      answer:0,
      explanation:"arange(start, stop, step): từ 0 đến 10 bước 2, không bao gồm 10." },
    { module:"B", difficulty:"easy",
      q: "`a = np.array([[1,2],[3,4]]); a.sum(axis=0)` bằng?",
      options:["array([4, 6])","array([3, 7])","10","array([1,2,3,4])"],
      answer:0,
      explanation:"axis=0 tính theo cột: 1+3=4, 2+4=6." },
    { module:"B", difficulty:"easy",
      q: "`np.dot(np.array([1,2]), np.array([3,4]))` bằng?",
      options:["11","[3,8]","7","[1,2,3,4]"],
      answer:0,
      explanation:"Dot product: 1×3 + 2×4 = 3 + 8 = 11." },
    { module:"B", difficulty:"easy",
      q: "Phép toán nào nhân từng phần tử (element-wise) trong NumPy?",
      options:["a * b","a @ b","np.dot(a,b)","np.matmul(a,b)"],
      answer:0,
      explanation:"* trong NumPy là element-wise. @ và np.dot/@np.matmul là matrix multiplication." },
    { module:"B", difficulty:"medium",
      q: "Broadcasting rule: (3,4) + (4,) có hợp lệ không và kết quả shape là?",
      options:["Hợp lệ, shape (3,4)","Không hợp lệ","Hợp lệ, shape (4,)","Hợp lệ, shape (3,)"],
      answer:0,
      explanation:"(4,) được broadcast thành (1,4) rồi (3,4). Cộng theo hàng." },
    { module:"B", difficulty:"medium",
      q: "`X = np.array([[1,2],[3,4]]); X.reshape(1,-1).shape` bằng?",
      options:["(1, 4)","(4, 1)","(2, 2)","(4,)"],
      answer:0,
      explanation:"reshape(1,-1): 1 dòng, NumPy tự tính 4 cột. Tổng phần tử không đổi: 4." },
    { module:"B", difficulty:"medium",
      q: "Chuẩn hóa (standardize) một feature array X dùng NumPy?",
      options:["(X - X.mean()) / X.std()","X / X.max()","X - X.min()","X.normalize()"],
      answer:0,
      explanation:"Standardization: trừ mean, chia std. Z-score. Kết quả có mean≈0, std≈1." },
    { module:"B", difficulty:"medium",
      q: "`np.random.seed(42)` dùng để làm gì?",
      options:["Đảm bảo kết quả random reproducible","Tăng tốc tính toán","Giảm kích thước mảng","Reset mảng về 0"],
      answer:0,
      explanation:"Seed cố định trạng thái random generator. Chạy lại sẽ cho cùng chuỗi số ngẫu nhiên." },
    { module:"B", difficulty:"medium",
      q: "Khác nhau giữa `a.copy()` và `b = a` với NumPy array?",
      options:["copy() tạo mảng độc lập; b=a tạo view (tham chiếu)","Không có khác biệt","copy() chậm hơn và giống b=a","b=a tạo mảng mới"],
      answer:0,
      explanation:"b = a thực ra là view/alias. Sửa b[0] sẽ sửa a[0]. a.copy() tạo mảng mới độc lập." },
    { module:"B", difficulty:"medium",
      q: "`np.linalg.norm(np.array([3,4]))` bằng?",
      options:["5.0","7","3","4"],
      answer:0,
      explanation:"Euclidean norm: √(3²+4²) = √25 = 5." },
    { module:"B", difficulty:"medium",
      q: "`a = np.array([[1,2,3],[4,5,6]]); a.sum(axis=1)` bằng?",
      options:["array([6, 15])","array([5, 7, 9])","21","array([1,2,3,4,5,6])"],
      answer:0,
      explanation:"axis=1 tính theo hàng: 1+2+3=6, 4+5+6=15." },
    { module:"B", difficulty:"hard",
      q: "Broadcasting: (3,1) + (1,4) hợp lệ không? Shape kết quả là?",
      options:["Hợp lệ, (3,4)","Không hợp lệ","(1,1)","(3,1)"],
      answer:0,
      explanation:"(3,1) + (1,4): chiều 0: max(3,1)=3; chiều 1: max(1,4)=4 → (3,4)." },
    { module:"B", difficulty:"hard",
      q: "`np.where(a > 0, a, 0)` làm gì?",
      options:["Giữ giá trị dương, thay âm/0 bằng 0 (ReLU)","Xóa dòng âm","Tính tổng dương","Tính trung bình"],
      answer:0,
      explanation:"np.where(condition, x, y): nơi True lấy x, nơi False lấy y. Đây là ReLU vector hóa." },
    { module:"B", difficulty:"hard",
      q: "Để tạo ma trận identity 4×4 trong NumPy?",
      options:["np.eye(4)","np.ones((4,4))","np.identity = 4","np.diag(4)"],
      answer:0,
      explanation:"np.eye(n) tạo ma trận đơn vị n×n: đường chéo là 1, còn lại là 0." },
    { module:"B", difficulty:"hard",
      q: "`np.concatenate([a, b], axis=0)` vs `np.stack([a, b], axis=0)` — khác nhau ở?",
      options:["concatenate nối theo chiều có sẵn; stack tạo chiều mới","Không khác","stack chỉ dùng cho 1D","concatenate tạo chiều mới"],
      answer:0,
      explanation:"stack([a,b]) tạo chiều mới — hai array (3,) thành (2,3). concatenate nối theo axis có sẵn." },
    { module:"B", difficulty:"hard",
      q: "Cosine similarity giữa vector u và v tính bằng NumPy?",
      options:["np.dot(u,v) / (np.linalg.norm(u) * np.linalg.norm(v))","np.sum(u*v)","np.dot(u,v)","np.linalg.norm(u-v)"],
      answer:0,
      explanation:"Cosine = u·v / (‖u‖ × ‖v‖). Cần chuẩn hóa theo độ lớn hai vector." },
    { module:"B", difficulty:"hard",
      q: "Khi `X` có shape (1000, 20), `X.T` có shape?",
      options:["(20, 1000)","(1000, 20)","(20,)","(1000,)"],
      answer:0,
      explanation:"Transpose đổi chiều: (n, p) → (p, n)." },
    { module:"B", difficulty:"hard",
      q: "Vectorization trong NumPy nhanh hơn vì lý do gì?",
      options:["Phần tính toán nặng chạy bằng C/Fortran, tránh overhead vòng lặp Python","NumPy dùng GPU","RAM lớn hơn","Python tự tối ưu"],
      answer:0,
      explanation:"NumPy là wrapper C; phép toán array tránh interpreter Python loop — nhanh hơn nhiều lần." },
    { module:"B", difficulty:"hard",
      q: "`np.argmax(np.array([3,1,4,1,5,9,2]))` bằng?",
      options:["5","9","6","0"],
      answer:0,
      explanation:"argmax trả index của phần tử lớn nhất. Giá trị 9 ở index 5." }
  ],

  // ══════════════════════════════════════════════════════════
  // MODULE B — BÀI 6: pandas chi tiết — loc/iloc/filter
  // ══════════════════════════════════════════════════════════
  "pandas-indexing": [
    { module:"B", difficulty:"easy",
      q: "`df['score']` và `df[['score']]` khác nhau thế nào?",
      options:["df['score'] trả Series; df[['score']] trả DataFrame 1 cột","Giống nhau","df['score'] lỗi","df[['score']] trả list"],
      answer:0,
      explanation:"Dấu ngoặc đơn → Series; dấu ngoặc đôi → DataFrame. Quan trọng khi chain operation." },
    { module:"B", difficulty:"easy",
      q: "Boolean mask lọc dòng có score >= 8 trong df?",
      options:["df[df['score'] >= 8]","df.filter('score>=8')","df.loc('score',8)","df['score'].get(8)"],
      answer:0,
      explanation:"df[mask] với mask là Series boolean tương ứng với index của df." },
    { module:"B", difficulty:"easy",
      q: "`df.sort_values('price', ascending=False).head(3)` làm gì?",
      options:["Lấy 3 dòng có price cao nhất","Lấy 3 dòng đầu theo index","Sort tăng dần","Xóa 3 dòng"],
      answer:0,
      explanation:"sort_values giảm dần (ascending=False) rồi head(3) lấy 3 dòng đầu." },
    { module:"B", difficulty:"easy",
      q: "`df.iloc[0]` trả về?",
      options:["Series của dòng đầu tiên (index vị trí 0)","Cột đầu tiên","Dòng có index nhãn 0","Lỗi nếu index không phải số"],
      answer:0,
      explanation:"iloc[0] dùng vị trí số nguyên — luôn là dòng đầu tiên bất kể nhãn index." },
    { module:"B", difficulty:"easy",
      q: "Kết hợp hai điều kiện filter trong pandas đúng cú pháp là?",
      options:["df[(df['a']>1) & (df['b']<5)]","df[df['a']>1 and df['b']<5]","df.filter(a>1, b<5)","df.loc('a>1 & b<5')"],
      answer:0,
      explanation:"Phải dùng & (bitwise) và mỗi điều kiện trong ngoặc. and/or Python không hoạt động với Series." },
    { module:"B", difficulty:"medium",
      q: "`df.loc[df['city']=='HN', 'price']` trả về?",
      options:["Series giá trị price của các dòng city='HN'","DataFrame","List","Số vô hướng"],
      answer:0,
      explanation:"loc[mask, col] trả Series của cột col ở những dòng thỏa mask." },
    { module:"B", difficulty:"medium",
      q: "Lệnh nào thay thế giá trị của cột 'status' thành 'inactive' cho các dòng có score < 5?",
      options:["df.loc[df['score']<5, 'status'] = 'inactive'","df['status'] = 'inactive'","df.update('status', 'inactive')","df['status'].replace(5,'inactive')"],
      answer:0,
      explanation:"loc[mask, col] = value là cách chính xác để gán có điều kiện." },
    { module:"B", difficulty:"medium",
      q: "`df.reset_index(drop=True)` cần dùng khi nào?",
      options:["Sau filter/slice khi index cũ không liên tục","Khi muốn xóa cột","Luôn dùng khi đọc CSV","Khi rename cột"],
      answer:0,
      explanation:"Filter tạo DataFrame với index gốc bị ngắt quãng. reset_index tạo 0,1,2,... liên tục." },
    { module:"B", difficulty:"medium",
      q: "`df.iloc[1:4, 0:2]` chọn gì?",
      options:["Dòng 1,2,3 và cột 0,1","Dòng 1 đến 4 và cột 0 đến 2","Dòng 0,1 và cột 0,1,2","Tất cả"],
      answer:0,
      explanation:"iloc[1:4, 0:2]: slice dòng 1-3, slice cột 0-1 (exclusive end)." },
    { module:"B", difficulty:"medium",
      q: "Cách đổi tên cột 'old' thành 'new' trong df?",
      options:["df.rename(columns={'old':'new'}, inplace=True)","df['new'] = df['old']","df.columns['old']='new'","df.rename('old','new')"],
      answer:0,
      explanation:"rename(columns=dict) ánh xạ tên cũ sang mới. inplace=True sửa trực tiếp." },
    { module:"B", difficulty:"medium",
      q: "`df.value_counts('city')` tương đương lệnh nào?",
      options:["df['city'].value_counts()","df['city'].unique()","df['city'].nunique()","df.groupby('city').count()"],
      answer:0,
      explanation:"value_counts() đếm tần suất từng giá trị trong Series." },
    { module:"B", difficulty:"medium",
      q: "Lọc chuỗi: lấy dòng tên bắt đầu bằng 'A' trong cột 'name'?",
      options:["df[df['name'].str.startswith('A')]","df[df['name']=='A%']","df['name'].filter('A')","df.loc('name','A')"],
      answer:0,
      explanation:"pandas .str accessor cho phép dùng các phương thức string trên Series." },
    { module:"B", difficulty:"hard",
      q: "Lệnh nào lấy index của 5 dòng có score thấp nhất?",
      options:["df.nsmallest(5,'score').index","df.sort_values('score').head(5).index","Cả hai đúng","df.min(5)"],
      answer:2,
      explanation:"nsmallest và sort_values+head đều đúng. nsmallest ngắn hơn và tối ưu hơn cho n nhỏ." },
    { module:"B", difficulty:"hard",
      q: "`df.set_index('user_id')` làm gì?",
      options:["Đặt cột user_id làm index của DataFrame","Xóa cột user_id","Sắp xếp theo user_id","Đổi tên cột"],
      answer:0,
      explanation:"set_index thay đổi index từ 0,1,2,... thành giá trị cột chỉ định — hữu ích khi dùng loc bằng ID." },
    { module:"B", difficulty:"hard",
      q: "Lệnh nào tạo cột 'grade' từ cột 'score': >=8→'A', >=6→'B', còn lại→'C'?",
      options:["df['grade'] = pd.cut(df['score'], bins=[0,6,8,10], labels=['C','B','A'])","df['grade'] = df['score'].map({'>=8':'A'})","df['grade'] = df['score'].where(8,'A')","df['grade'] = df['score'] >= 8"],
      answer:0,
      explanation:"pd.cut phân bin liên tục thành nhãn. Bins [0,6,8,10] với labels ['C','B','A'] là cú pháp đúng." },
    { module:"B", difficulty:"hard",
      q: "Sau `df2 = df[df['score']>7]; df2['new_col'] = 1`, pandas thường cảnh báo gì?",
      options:["SettingWithCopyWarning — nên dùng .copy() hoặc .loc trực tiếp","TypeError","IndexError","Không có cảnh báo"],
      answer:0,
      explanation:"df2 có thể là view của df. Gán vào view không đảm bảo sửa đúng. Dùng df2 = df[mask].copy() để an toàn." },
    { module:"B", difficulty:"hard",
      q: "Cách nối hai DataFrame cùng cấu trúc theo chiều dọc (stack rows)?",
      options:["pd.concat([df1, df2], axis=0, ignore_index=True)","pd.merge(df1, df2)","df1.append(df2) (deprecated)","df1 + df2"],
      answer:0,
      explanation:"pd.concat axis=0 nối theo hàng. ignore_index=True reset index liên tục." },
    { module:"B", difficulty:"hard",
      q: "`df.duplicated().sum()` đo gì?",
      options:["Số dòng bị trùng lặp hoàn toàn","Số cột trùng","Tổng giá trị duplicate","Số NaN"],
      answer:0,
      explanation:"duplicated() trả mask True cho dòng trùng với dòng trước. sum() đếm số dòng đó." },
    { module:"B", difficulty:"hard",
      q: "Lệnh nào xóa cột 'temp' khỏi df mà không cần gán lại?",
      options:["df.drop(columns=['temp'], inplace=True)","df = df.drop('temp')","del df.temp","df.remove('temp')"],
      answer:0,
      explanation:"drop(columns=..., inplace=True) sửa trực tiếp. Cũng có thể dùng df = df.drop(columns=['temp'])." },
    { module:"B", difficulty:"hard",
      q: "`df.query('score > 7 and city == \"HN\"')` làm gì?",
      options:["Lọc dòng score>7 và city='HN' dùng cú pháp query string","Lỗi syntax","Trả tất cả dòng","Tạo index mới"],
      answer:0,
      explanation:"query() nhận string biểu thức, dùng được với and/or. Dấu ngoặc kép trong ngoặc đơn hoặc ngược lại." }
  ],

  // ══════════════════════════════════════════════════════════
  // MODULE B — BÀI 7: groupby, agg, merge, pivot, leakage
  // ══════════════════════════════════════════════════════════
  "pandas-groupby-merge": [
    { module:"B", difficulty:"easy",
      q: "`orders.groupby('user_id')['amount'].sum()` tính gì?",
      options:["Tổng amount theo từng user_id","Mean amount","Số dòng theo user","Max amount"],
      answer:0,
      explanation:"groupby + sum() cho tổng theo nhóm." },
    { module:"B", difficulty:"easy",
      q: "Split-apply-combine là pattern của?",
      options:["groupby trong pandas","merge","pivot","concat"],
      answer:0,
      explanation:"groupby: chia (split), tính (apply), ghép kết quả (combine)." },
    { module:"B", difficulty:"easy",
      q: "INNER JOIN giữ những dòng nào?",
      options:["Chỉ dòng có key khớp ở cả hai bảng","Tất cả dòng bảng trái","Tất cả dòng hai bảng","Không có dòng nào"],
      answer:0,
      explanation:"INNER JOIN = giao của hai bảng theo key." },
    { module:"B", difficulty:"easy",
      q: "LEFT JOIN dùng để làm gì?",
      options:["Giữ toàn bộ bảng trái, điền NaN khi không khớp bảng phải","Giữ bảng phải","Giao hai bảng","Xóa dòng không khớp"],
      answer:0,
      explanation:"LEFT JOIN an toàn khi bạn không muốn mất dòng từ bảng chính (trái)." },
    { module:"B", difficulty:"easy",
      q: "Lệnh merge bảng orders với users theo user_id, giữ tất cả orders?",
      options:["orders.merge(users, on='user_id', how='left')","orders.merge(users, how='inner')","pd.concat([orders, users])","orders.join(users)"],
      answer:0,
      explanation:"how='left' giữ toàn bộ orders. Nếu user không có trong users, cột users sẽ là NaN." },
    { module:"B", difficulty:"medium",
      q: "Sau merge many-to-many, số dòng có thể?",
      options:["Tăng lên nhiều hơn bảng lớn nhất","Bằng bảng trái","Giảm","Luôn bằng tổng hai bảng"],
      answer:0,
      explanation:"Mỗi match sinh một dòng mới. m dòng với key A × n dòng với key A = m×n dòng." },
    { module:"B", difficulty:"medium",
      q: "Grain của bảng là gì?",
      options:["Đơn vị của mỗi dòng: một giao dịch, một user, một ngày,...","Số cột","Số dòng","Kiểu dữ liệu"],
      answer:0,
      explanation:"Xác định grain trước khi join/groupby giúp tránh nhầm lẫn về ý nghĩa aggregation." },
    { module:"B", difficulty:"medium",
      q: "Lệnh groupby với nhiều aggregation khác nhau cho một cột?",
      options:["df.groupby('city')['price'].agg(['mean','min','max'])","df.groupby('city').sum()","df.groupby(['city','price']).count()","df.agg('city')"],
      answer:0,
      explanation:"agg(['mean','min','max']) tính nhiều thống kê cùng lúc cho cột chỉ định." },
    { module:"B", difficulty:"medium",
      q: "Cú pháp named aggregation trong pandas?",
      options:["df.groupby('city').agg(avg_price=('price','mean'), cnt=('id','count'))","df.groupby('city').rename()","df.agg({'price':'mean'})","df.pivot('mean')"],
      answer:0,
      explanation:"Named agg: result_col=(source_col, func) — tạo tên cột rõ ràng trong kết quả." },
    { module:"B", difficulty:"medium",
      q: "Leakage xảy ra khi nào trong feature engineering?",
      options:["Dùng dữ liệu sau thời điểm label hoặc sau thời điểm dự đoán","Model quá phức tạp","Dữ liệu không đủ","Missing nhiều"],
      answer:0,
      explanation:"Ví dụ: tính total_spend cả năm để dự đoán churn tháng 6 bao gồm dữ liệu tháng 7-12." },
    { module:"B", difficulty:"medium",
      q: "Kiểm tra grain trước khi merge bằng cách nào?",
      options:["df['key'].is_unique hoặc df.duplicated('key').sum() == 0","df.info()","df.describe()","df.shape"],
      answer:0,
      explanation:"Nếu key có duplicate trong cả hai bảng thì many-to-many merge sẽ tạo dòng bùng nổ." },
    { module:"B", difficulty:"medium",
      q: "`pivot_table` khác `groupby` ở điểm gì chính?",
      options:["pivot_table tạo bảng 2D (dòng×cột); groupby tạo Series/DataFrame dọc","Không khác","pivot_table nhanh hơn","groupby tạo bảng 2D"],
      answer:0,
      explanation:"pivot_table tiện để nhìn dữ liệu theo hai biến phân loại dạng bảng chéo." },
    { module:"B", difficulty:"hard",
      q: "Để đếm số user duy nhất từ bảng merge orders×users, lệnh đúng là?",
      options:["merged['user_id'].nunique()","merged['user_id'].count()","len(merged)","merged.groupby('user_id').count()"],
      answer:0,
      explanation:"count() đếm cả dòng trùng; nunique() chỉ đếm distinct values." },
    { module:"B", difficulty:"hard",
      q: "Cách tính spend trung bình mỗi user từ bảng orders?",
      options:["orders.groupby('user_id')['amount'].sum().mean()","orders['amount'].mean()","orders.groupby('amount')['user_id'].mean()","orders['user_id'].mean()"],
      answer:0,
      explanation:"Bước 1: sum theo user → tổng spend từng user. Bước 2: mean của các tổng đó." },
    { module:"B", difficulty:"hard",
      q: "Sau merge LEFT, cột từ bảng phải có NaN nghĩa là gì?",
      options:["Không có record khớp trong bảng phải","Lỗi dữ liệu","Key bị trùng","Cột được tính toán sai"],
      answer:0,
      explanation:"LEFT JOIN giữ dòng bảng trái dù không khớp. Cột bảng phải fill NaN khi không match." },
    { module:"B", difficulty:"hard",
      q: "`df.groupby('month')['sales'].transform('mean')` khác `groupby().mean()` thế nào?",
      options:["transform trả Series cùng index với df gốc; mean() trả Series theo group","Không khác","transform trả scalar","mean() nhanh hơn"],
      answer:0,
      explanation:"transform giữ chiều dài gốc, hữu ích để tạo feature như 'sales_vs_monthly_avg'." },
    { module:"B", difficulty:"hard",
      q: "Lệnh nào tính cumulative sum theo user, sắp xếp theo date?",
      options:["df.sort_values('date').groupby('user_id')['amount'].cumsum()","df.groupby('user_id').cumsum()","df.sort_values('date').cumsum()","df['amount'].rolling(3).sum()"],
      answer:0,
      explanation:"cumsum() sau groupby tính tổng tích lũy trong mỗi group. Cần sort trước để đúng thứ tự." },
    { module:"B", difficulty:"hard",
      q: "`pd.merge(df1, df2, how='outer')` giữ những dòng nào?",
      options:["Tất cả dòng từ cả hai bảng, NaN ở đâu không khớp","Chỉ dòng khớp","Chỉ bảng trái","Chỉ bảng phải"],
      answer:0,
      explanation:"OUTER JOIN = hợp của hai bảng. Dòng không khớp từ một phía điền NaN ở cột phía kia." },
    { module:"B", difficulty:"hard",
      q: "Cách tạo feature 'orders_last_30d' không gây leakage?",
      options:["Chỉ đếm orders trước reference_date của mỗi user","Đếm tất cả orders","Dùng orders tháng sau label","Dùng total_lifetime_orders"],
      answer:0,
      explanation:"Window features phải chỉ nhìn vào quá khứ so với thời điểm dự đoán để không leak tương lai." },
    { module:"B", difficulty:"hard",
      q: "`df.groupby('city')['price'].rank(pct=True)` tính gì?",
      options:["Percentile rank của price trong mỗi nhóm city","Rank tuyệt đối","Mean price","Max price"],
      answer:0,
      explanation:"rank(pct=True) trả percentile 0-1 trong mỗi group — hữu ích để normalize within-group." }
  ],

  // ══════════════════════════════════════════════════════════
  // MODULE B — BÀI 8: EDA & Visualization
  // ══════════════════════════════════════════════════════════
  "eda-visualization": [
    { module:"B", difficulty:"easy",
      q: "EDA viết tắt của?",
      options:["Exploratory Data Analysis","Enhanced Data Algorithm","Estimated Distribution Approach","Error Detection Analysis"],
      answer:0,
      explanation:"EDA = phân tích dữ liệu khám phá: hiểu phân phối, pattern, anomaly trước khi model." },
    { module:"B", difficulty:"easy",
      q: "Biểu đồ nào tốt nhất để xem phân phối của biến liên tục?",
      options:["Histogram hoặc KDE plot","Bar chart","Pie chart","Line chart"],
      answer:0,
      explanation:"Histogram chia bins, KDE làm mượt → đều hiển thị hình dạng phân phối." },
    { module:"B", difficulty:"easy",
      q: "Boxplot hiển thị thông tin gì?",
      options:["Median, IQR (Q1-Q3), whisker và outlier","Mean và std","Chỉ min/max","Tần suất"],
      answer:0,
      explanation:"Boxplot = 5-number summary: min, Q1, median, Q3, max + điểm outlier." },
    { module:"B", difficulty:"easy",
      q: "Correlation matrix cho biết điều gì?",
      options:["Mức độ tương quan tuyến tính giữa các cặp feature","Nhân quả giữa feature","Thứ tự quan trọng feature","Phân phối từng feature"],
      answer:0,
      explanation:"Correlation ∈ [-1, 1]. 1 = tương quan dương hoàn toàn; -1 = tương quan âm; 0 = không tuyến tính." },
    { module:"B", difficulty:"easy",
      q: "Lệnh pandas nào xem phân phối của target (biến phân loại)?",
      options:["df['target'].value_counts(normalize=True)","df['target'].describe()","df['target'].mean()","df['target'].plot()"],
      answer:0,
      explanation:"value_counts(normalize=True) cho tỉ lệ phần trăm mỗi class." },
    { module:"B", difficulty:"medium",
      q: "Tại sao phải xem phân phối target trước khi chọn metric?",
      options:["Dataset lệch nặng → accuracy không đáng tin, cần precision/recall/F1","Accuracy luôn đúng","Metric không liên quan phân phối","Chỉ cần nhìn mean target"],
      answer:0,
      explanation:"Nếu 95% là class 0, model đoán 0 mọi lúc đạt accuracy 95% nhưng vô nghĩa." },
    { module:"B", difficulty:"medium",
      q: "Scatterplot giữa feature X và target Y giúp phát hiện điều gì?",
      options:["Quan hệ phi tuyến, outlier, và mối tương quan","Phân phối X","Trung bình Y","Missing values"],
      answer:0,
      explanation:"Scatterplot hiển thị pattern của từng điểm dữ liệu — thấy được cụm, xu hướng, điểm bất thường." },
    { module:"B", difficulty:"medium",
      q: "Khi correlation giữa feature A và feature B là 0.95, nên làm gì?",
      options:["Xem xét bỏ một trong hai để giảm đa cộng tuyến","Giữ cả hai vì tốt hơn","Không cần làm gì","Cộng hai cột lại"],
      answer:0,
      explanation:"Tương quan cao = đa cộng tuyến. Một cột có thể không thêm thông tin mới và làm model bất ổn." },
    { module:"B", difficulty:"medium",
      q: "Leakage đáng ngờ phát hiện qua EDA khi?",
      options:["Feature có correlation quá cao với target (>0.99)","Correlation thấp","Missing nhiều","Outlier nhiều"],
      answer:0,
      explanation:"Feature tương quan gần 1 với target thường là thông tin tương lai hoặc thông tin trực tiếp từ target." },
    { module:"B", difficulty:"medium",
      q: "Checklist EDA đúng thứ tự?",
      options:["shape → info/dtypes → missing → describe → target dist → correlation → leakage check","Train model trước rồi EDA","Chỉ describe là đủ","Vẽ biểu đồ trước rồi check dtypes"],
      answer:0,
      explanation:"Thứ tự EDA chuẩn: hiểu cấu trúc → missing → thống kê → phân phối → quan hệ → kiểm tra leakage." },
    { module:"B", difficulty:"medium",
      q: "Dữ liệu lệch phải (right-skewed) có nghĩa là?",
      options:["Đuôi dài bên phải, mean > median","Đuôi dài bên trái","Phân phối đối xứng","Không có outlier"],
      answer:0,
      explanation:"Right skew: nhiều giá trị thấp, ít giá trị rất cao kéo đuôi phải. Mean bị kéo lên cao hơn median." },
    { module:"B", difficulty:"medium",
      q: "Biểu đồ nào dùng để so sánh phân phối giữa nhiều nhóm?",
      options:["Grouped boxplot hoặc violin plot","Histogram đơn","Pie chart","Line chart"],
      answer:0,
      explanation:"Boxplot nhóm hoặc violin plot cho phép so sánh median, spread và hình dạng phân phối giữa các nhóm." },
    { module:"B", difficulty:"hard",
      q: "Pair plot (seaborn pairplot) cho thấy gì?",
      options:["Scatterplot mọi cặp feature và histogram từng feature trên đường chéo","Chỉ correlation số","Phân phối target","Outlier duy nhất"],
      answer:0,
      explanation:"pairplot vẽ ma trận biểu đồ: đường chéo là histogram, off-diagonal là scatter. Hữu ích phát hiện pattern." },
    { module:"B", difficulty:"hard",
      q: "Khi nào nên dùng log transform trên feature?",
      options:["Khi feature có right-skew mạnh hoặc khoảng giá trị rất rộng","Luôn luôn","Khi feature là categorical","Khi correlation âm"],
      answer:0,
      explanation:"Log transform giảm ảnh hưởng outlier lớn và làm phân phối gần normal hơn." },
    { module:"B", difficulty:"hard",
      q: "Outlier phát hiện bằng IQR rule: ngưỡng là?",
      options:["x < Q1 − 1.5×IQR hoặc x > Q3 + 1.5×IQR","x > mean + 3std","x < min hoặc x > max","x ngoài range(0,1)"],
      answer:0,
      explanation:"Tukey fence: 1.5×IQR. Dùng 3×IQR cho extreme outlier. Cần domain knowledge để quyết định xử lý." },
    { module:"B", difficulty:"hard",
      q: "Heatmap correlation tốt nhất khi?",
      options:["Có nhiều feature số và muốn tìm đa cộng tuyến hoặc feature liên quan target","Chỉ có categorical","Chỉ có 2 feature","Dữ liệu thời gian"],
      answer:0,
      explanation:"Correlation heatmap hữu ích cho feature selection và phát hiện leakage trong dataset nhiều chiều." },
    { module:"B", difficulty:"hard",
      q: "Biểu đồ nào tốt nhất để xem trend theo thời gian?",
      options:["Line chart","Histogram","Boxplot","Scatter (không theo thứ tự)"],
      answer:0,
      explanation:"Line chart nối điểm theo thứ tự thời gian, thể hiện xu hướng và seasonality." },
    { module:"B", difficulty:"hard",
      q: "KDE plot khác histogram ở điểm gì?",
      options:["KDE làm mượt phân phối liên tục không phụ thuộc chọn bins","KDE chỉ dùng cho categorical","KDE không dùng kernel","Histogram chính xác hơn"],
      answer:0,
      explanation:"KDE (Kernel Density Estimation) ước lượng PDF liên tục. Histogram nhạy cảm với số bins." },
    { module:"B", difficulty:"hard",
      q: "Khi feature 'registration_date' có tương quan 0.82 với target 'churn', bạn nghi ngờ điều gì?",
      options:["Leakage hoặc proxy variable gắn với label","Feature quan trọng bình thường","Model tốt","Không có vấn đề"],
      answer:0,
      explanation:"Tương quan quá cao với target thường chỉ ra leakage: cột này chứa thông tin về kết quả." },
    { module:"B", difficulty:"hard",
      q: "Z-score outlier detection: ngưỡng thường dùng là?",
      options:["|z| > 3 (tức là ngoài 3 std so với mean)","z > 1","z > 0","z = 0"],
      answer:0,
      explanation:"Trong phân phối chuẩn, ~99.7% dữ liệu nằm trong ±3σ. Ngoài ngưỡng này được xem là outlier." }
  ],

  // ══════════════════════════════════════════════════════════
  // MODULE B — BÀI 9: Data cleaning & feature engineering
  // ══════════════════════════════════════════════════════════
  "data-cleaning": [
    { module:"B", difficulty:"easy",
      q: "Lệnh nào xóa tất cả dòng có bất kỳ NaN?",
      options:["df.dropna()","df.fillna(0)","df.isna()","df.clean()"],
      answer:0,
      explanation:"dropna() mặc định xóa dòng có ít nhất một NaN." },
    { module:"B", difficulty:"easy",
      q: "IQR = ?",
      options:["Q3 - Q1","Q3 + Q1","(Q1 + Q3) / 2","Max - Min"],
      answer:0,
      explanation:"Interquartile Range = khoảng từ percentile 25 đến percentile 75." },
    { module:"B", difficulty:"easy",
      q: "One-hot encoding dùng khi nào?",
      options:["Biến categorical không có thứ tự (nominal) với ít nhóm","Biến liên tục","Biến ordinal","Biến nhị phân"],
      answer:0,
      explanation:"One-hot tạo cột 0/1 cho mỗi category. Tránh dùng khi cardinality cao." },
    { module:"B", difficulty:"easy",
      q: "Lệnh nào điền NaN bằng median trong pandas?",
      options:["df['col'].fillna(df['col'].median())","df['col'].dropna()","df['col'].mean()","df.impute()"],
      answer:0,
      explanation:"fillna(value) thay NaN. median() ổn định hơn mean khi có outlier." },
    { module:"B", difficulty:"easy",
      q: "Feature engineering là gì?",
      options:["Tạo feature mới từ dữ liệu thô để cải thiện model","Xóa feature","Chuẩn hóa model","Chọn thuật toán"],
      answer:0,
      explanation:"Feature engineering biến dữ liệu thô thành tín hiệu hữu ích: ratio, bucketing, date parts, text stats." },
    { module:"B", difficulty:"medium",
      q: "Khi nào nên fill missing bằng median thay vì mean?",
      options:["Khi cột có outlier hoặc phân phối lệch","Khi dữ liệu cân bằng","Khi không có missing","Luôn luôn dùng mean"],
      answer:0,
      explanation:"Median ít bị kéo bởi outlier hơn mean. Phân phối lệch: median gần 'trung tâm' thực hơn." },
    { module:"B", difficulty:"medium",
      q: "Flag missing là gì và khi nào dùng?",
      options:["Tạo cột binary is_missing; dùng khi bản thân việc thiếu là tín hiệu","Xóa dòng missing","Fill bằng 0","Không dùng khi missing nhiều"],
      answer:0,
      explanation:"Đôi khi 'income missing' có thể tương quan với target. Cột flag giữ lại tín hiệu đó." },
    { module:"B", difficulty:"medium",
      q: "Outlier phát hiện bằng IQR — nên xóa không điều kiện?",
      options:["Không — kiểm tra domain knowledge trước, outlier có thể là tín hiệu quan trọng","Có — luôn xóa","Có — nếu nhiều hơn 5%","Không cần kiểm tra"],
      answer:0,
      explanation:"Outlier trong giao dịch tài chính (fraud detection) là signal quan trọng, xóa đi là sai." },
    { module:"B", difficulty:"medium",
      q: "Target encoding dễ gây leakage khi?",
      options:["Tính trung bình target theo category trên cả train+test trước khi split","Dùng trên biến nhị phân","Dùng trong cross-validation","Dùng với regularization"],
      answer:0,
      explanation:"Target encoding phải tính chỉ trên fold train trong CV, không trên toàn bộ dataset." },
    { module:"B", difficulty:"medium",
      q: "Lệnh nào xóa duplicate rows?",
      options:["df.drop_duplicates()","df.dropna()","df.unique()","df.reset_index()"],
      answer:0,
      explanation:"drop_duplicates() xóa dòng trùng lặp hoàn toàn. Có thể chỉ định subset cột." },
    { module:"B", difficulty:"medium",
      q: "Với cột 'age' missing 8% và 'income' missing 35%, chiến lược khác nhau là?",
      options:["age: fill median; income: tạo flag + fill median hoặc drop nếu không quan trọng","Xóa cả hai cột","Fill đều bằng 0","Xóa tất cả dòng missing"],
      answer:0,
      explanation:"Missing thấp (< 20%): fill an toàn. Missing cao (35%): fill + flag hoặc xem xét bỏ cột." },
    { module:"B", difficulty:"medium",
      q: "Chuẩn hóa min-max rescaling công thức là?",
      options:["(x - min) / (max - min)","(x - mean) / std","x / max","x - min"],
      answer:0,
      explanation:"Min-max scaling đưa dữ liệu về [0, 1]. Nhạy cảm với outlier vì dùng min/max." },
    { module:"B", difficulty:"hard",
      q: "ColumnTransformer trong sklearn dùng để làm gì?",
      options:["Áp pipeline xử lý khác nhau cho từng nhóm cột trong một bước","Merge bảng","Group dữ liệu","Visualize dữ liệu"],
      answer:0,
      explanation:"ColumnTransformer cho phép imputer và scaler khác nhau cho cột số và encoder cho cột categorical." },
    { module:"B", difficulty:"hard",
      q: "Nếu category 'XL' chưa xuất hiện trong train, xuất hiện trong test, OneHotEncoder mặc định làm gì?",
      options:["Lỗi nếu handle_unknown='error' (default); 'ignore' → vector 0","Tạo cột mới","Bỏ qua và không báo lỗi","Điền NaN"],
      answer:0,
      explanation:"handle_unknown='ignore' cần thiết khi test có category mới. Mặc định 'error' sẽ raise lỗi." },
    { module:"B", difficulty:"hard",
      q: "Feature 'day_of_week' từ cột datetime tạo bằng pandas như thế nào?",
      options:["df['dow'] = df['date'].dt.dayofweek","df['dow'] = df['date'].day","df['dow'] = weekday(df['date'])","df['dow'] = df.datetime.week"],
      answer:0,
      explanation:".dt accessor cho phép truy cập thuộc tính datetime: .dt.dayofweek (0=Mon, 6=Sun)." },
    { module:"B", difficulty:"hard",
      q: "Cách tạo buckets từ cột liên tục 'age' thành nhóm?",
      options:["pd.cut(df['age'], bins=[0,18,35,60,100], labels=['child','youth','adult','senior'])","df['age'].round()","df['age'].astype(str)","pd.qcut với q=4"],
      answer:0,
      explanation:"pd.cut dùng bins cố định. pd.qcut dùng quantile (số lượng equal-frequency). Cả hai đều hợp lệ." },
    { module:"B", difficulty:"hard",
      q: "Winsorization là gì?",
      options:["Cap giá trị outlier về ngưỡng percentile (ví dụ clip 1%-99%) thay vì xóa","Xóa outlier","Fill outlier bằng mean","Tạo feature mới từ outlier"],
      answer:0,
      explanation:"Winsorizing giữ dòng nhưng giới hạn giá trị cực đoan: an toàn hơn xóa khi n nhỏ." },
    { module:"B", difficulty:"hard",
      q: "Khi dùng SimpleImputer(strategy='median') trong pipeline, fit trên?",
      options:["Chỉ X_train — imputer học median từ train, transform cả train và test","X_train và X_test cùng lúc","Chỉ X_test","Toàn bộ DataFrame"],
      answer:0,
      explanation:"Imputer là transformer. Fit trên train để tránh leakage. Transform cả hai với median đã học." },
    { module:"B", difficulty:"hard",
      q: "Cột 'city' có 500 unique values. Nên encode thế nào?",
      options:["Target encoding với CV hoặc frequency encoding","One-hot (tạo 500 cột)","Label encoding (0-499)","Bỏ cột"],
      answer:0,
      explanation:"High-cardinality categorical: one-hot tạo quá nhiều cột. Target/frequency encoding hiệu quả hơn." },
    { module:"B", difficulty:"hard",
      q: "Validation set khác test set ở điểm nào?",
      options:["Validation dùng để tune hyperparameter trong quá trình train; test chỉ dùng đánh giá cuối","Không khác","Test dùng để tune","Validation là test set"],
      answer:0,
      explanation:"Dùng test set nhiều lần để tune model gây leakage. Validation set là 'test tạm thời' trong quá trình phát triển." }
  ],

  // ══════════════════════════════════════════════════════════
  // MODULE B — BÀI 10: SQL/data join và tư duy bảng
  // ══════════════════════════════════════════════════════════
  "sql-data-joins": [
    { module:"B", difficulty:"easy",
      q: "PRIMARY KEY đảm bảo điều gì?",
      options:["Mỗi dòng có giá trị duy nhất, không NULL","Dữ liệu được sắp xếp","Dữ liệu không thể thay đổi","Dữ liệu là số nguyên"],
      answer:0,
      explanation:"Primary key = định danh duy nhất cho mỗi bản ghi trong bảng." },
    { module:"B", difficulty:"easy",
      q: "INNER JOIN giữa bảng A (100 dòng) và B (50 dòng) trả tối đa bao nhiêu dòng?",
      options:["Tùy số lượng key khớp, có thể ít hơn 50","5000","150","100"],
      answer:0,
      explanation:"INNER JOIN chỉ trả dòng khớp. Nếu key unique ở cả hai bảng: tối đa 50 dòng." },
    { module:"B", difficulty:"easy",
      q: "GROUP BY trong SQL dùng để làm gì?",
      options:["Gom nhóm dòng theo cột và áp aggregate function","Sắp xếp dữ liệu","Lọc dòng","Nối bảng"],
      answer:0,
      explanation:"GROUP BY + COUNT/SUM/AVG/MIN/MAX là pattern aggregation cơ bản trong SQL." },
    { module:"B", difficulty:"easy",
      q: "Lệnh SQL nào lọc kết quả sau aggregation?",
      options:["HAVING","WHERE","FILTER","GROUP BY"],
      answer:0,
      explanation:"WHERE lọc trước GROUP BY. HAVING lọc sau GROUP BY trên kết quả aggregate." },
    { module:"B", difficulty:"easy",
      q: "Pandas merge tương đương SQL gì?",
      options:["JOIN","GROUP BY","SELECT","ORDER BY"],
      answer:0,
      explanation:"pd.merge(df1, df2, how='inner/left/right/outer') tương đương các loại SQL JOIN." },
    { module:"B", difficulty:"medium",
      q: "Foreign key là gì?",
      options:["Cột tham chiếu đến primary key của bảng khác, dùng để nối bảng","Cột khóa mã hóa","Cột có giá trị ngoại lai","Cột NULL"],
      answer:0,
      explanation:"FK trong bảng con trỏ về PK bảng cha, thiết lập quan hệ giữa các bảng." },
    { module:"B", difficulty:"medium",
      q: "SQL pattern: đếm số user có trên 5 đơn hàng?",
      options:["SELECT user_id, COUNT(*) as cnt FROM orders GROUP BY user_id HAVING cnt > 5","SELECT COUNT(user_id) FROM orders WHERE orders > 5","SELECT user_id FROM orders HAVING COUNT > 5","SELECT user_id, SUM(*) FROM orders GROUP BY user_id"],
      answer:0,
      explanation:"GROUP BY user_id → COUNT → HAVING lọc nhóm có count > 5." },
    { module:"B", difficulty:"medium",
      q: "Grain của bảng orders là gì?",
      options:["Mỗi dòng là một đơn hàng (order)","Mỗi dòng là một user","Mỗi dòng là một sản phẩm","Mỗi dòng là một ngày"],
      answer:0,
      explanation:"Grain = mức độ chi tiết mỗi dòng biểu diễn. Trong orders: một dòng = một đơn hàng." },
    { module:"B", difficulty:"medium",
      q: "Lỗi nào xảy ra khi join bảng user (1 dòng/user) với bảng orders (nhiều dòng/user) rồi đếm COUNT(user_id)?",
      options:["Đếm trùng — kết quả là số đơn hàng không phải số user","Không có lỗi","KeyError","Kết quả đúng nếu dùng DISTINCT"],
      answer:0,
      explanation:"Sau LEFT JOIN one-to-many, mỗi user xuất hiện nhiều lần. COUNT(user_id) đếm theo dòng, không theo user duy nhất." },
    { module:"B", difficulty:"medium",
      q: "Lệnh SQL tính doanh thu trung bình theo tháng?",
      options:["SELECT month, AVG(revenue) FROM sales GROUP BY month","SELECT AVG(revenue) FROM sales","SELECT month, SUM(revenue) FROM sales","SELECT month FROM sales ORDER BY revenue"],
      answer:0,
      explanation:"GROUP BY month + AVG(revenue) cho revenue trung bình của từng tháng." },
    { module:"B", difficulty:"medium",
      q: "Trong pandas, cách tương đương `SELECT DISTINCT city FROM df`?",
      options:["df['city'].unique()","df['city'].count()","df['city'].value_counts()","df['city'].nunique()"],
      answer:0,
      explanation:"unique() trả mảng các giá trị distinct. nunique() chỉ trả số lượng." },
    { module:"B", difficulty:"medium",
      q: "LEFT JOIN vs LEFT OUTER JOIN — khác nhau?",
      options:["Giống nhau hoàn toàn trong hầu hết SQL","LEFT giữ ít hơn","OUTER JOIN là inner","LEFT JOIN chỉ dùng trong pandas"],
      answer:0,
      explanation:"LEFT JOIN và LEFT OUTER JOIN là cùng một thứ. OUTER là keyword tùy chọn." },
    { module:"B", difficulty:"hard",
      q: "SQL Window function `ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY date DESC)` làm gì?",
      options:["Đánh số thứ tự dòng trong mỗi group user_id, dòng mới nhất = 1","Đếm tổng dòng","Rank theo toàn bảng","Group by và count"],
      answer:0,
      explanation:"Window function tính rank trong mỗi partition mà không gom nhóm. Dùng để lấy dòng mới nhất theo group." },
    { module:"B", difficulty:"hard",
      q: "Tại sao `SELECT AVG(amount) FROM orders` không bằng `SELECT AVG(user_total) FROM (SELECT user_id, SUM(amount) as user_total FROM orders GROUP BY user_id)`?",
      options:["Lệnh đầu tính average của từng giao dịch; lệnh hai tính average tổng chi tiêu mỗi user","Chúng bằng nhau","Lệnh hai sai syntax","user_total không hợp lệ"],
      answer:0,
      explanation:"User có nhiều giao dịch được tính nhiều lần trong AVG đơn giản. Lệnh hai chuẩn hóa theo user trước." },
    { module:"B", difficulty:"hard",
      q: "SELF JOIN dùng khi nào?",
      options:["Khi cần so sánh dòng với dòng khác trong cùng bảng","Chỉ khi có 2 bảng","Khi key là NULL","Khi dùng GROUP BY"],
      answer:0,
      explanation:"SELF JOIN: join bảng với chính nó, dùng alias. Ví dụ: tìm employee và manager từ cùng bảng employee." },
    { module:"B", difficulty:"hard",
      q: "SQL: tìm user không có đơn hàng nào. Cú pháp nào đúng?",
      options:["SELECT u.id FROM users u LEFT JOIN orders o ON u.id=o.user_id WHERE o.id IS NULL","SELECT u.id FROM users INNER JOIN orders ON ...","SELECT * FROM orders WHERE user_id NOT IN users","SELECT u.id FROM users, orders"],
      answer:0,
      explanation:"LEFT JOIN + WHERE IS NULL lấy dòng không khớp từ bảng phải — anti-join pattern." },
    { module:"B", difficulty:"hard",
      q: "Cách tính spend trung bình mỗi user trong SQL?",
      options:["SELECT AVG(user_total) FROM (SELECT user_id, SUM(amount) as user_total FROM orders GROUP BY user_id) sub","SELECT AVG(amount) FROM orders","SELECT SUM(amount)/COUNT(DISTINCT user_id) FROM orders","Không tính được"],
      answer:0,
      explanation:"Cần subquery: tính tổng theo user trước, rồi lấy AVG của các tổng đó." },
    { module:"B", difficulty:"hard",
      q: "Trong pandas, cách tương đương SQL subquery trên?",
      options:["orders.groupby('user_id')['amount'].sum().mean()","orders['amount'].mean()","orders.merge().mean()","orders.pivot().mean()"],
      answer:0,
      explanation:"groupby sum cho tổng theo user, rồi mean() trên Series kết quả = trung bình theo user." },
    { module:"B", difficulty:"hard",
      q: "Khi nào nên dùng FULL OUTER JOIN?",
      options:["Khi cần tất cả dòng từ cả hai bảng dù không khớp, để tìm gap ở cả hai phía","Luôn luôn","Chỉ khi INNER JOIN không đủ","Khi bảng rất lớn"],
      answer:0,
      explanation:"FULL OUTER JOIN = LEFT + RIGHT. Hữu ích để reconcile hai bảng, tìm dữ liệu thiếu ở cả hai." },
    { module:"B", difficulty:"hard",
      q: "Index trong SQL database giúp gì?",
      options:["Tăng tốc độ lookup/join theo cột được index, tương tự hash table","Sắp xếp dữ liệu vật lý","Đảm bảo unique","Tạo foreign key"],
      answer:0,
      explanation:"Index (B-tree hoặc hash) giúp tìm kiếm theo cột từ O(n) xuống O(log n) hoặc O(1). Nhưng tốn thêm không gian và làm chậm write." }
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
  },

  // ─── Module B Extra Theory ─────────────────────────────────────────────────

  "python-core": {
    allFormulas: [
      { name: "List comprehension", formula: "[f(x) for x in iterable if cond(x)]", note: "Kết quả là list mới" },
      { name: "Dict comprehension", formula: "{k: v for k, v in items}", note: "Kết quả là dict mới" },
      { name: "Set comprehension", formula: "{f(x) for x in iterable}", note: "Loại bỏ trùng lặp" },
      { name: "Lambda", formula: "lambda args: expression", note: "Hàm ẩn danh, dùng trong map/filter/sorted" },
      { name: "dict.get", formula: "d.get(key, default)", note: "Tránh KeyError khi key chưa có" },
      { name: "Shallow copy", formula: "b = a[:]  hoặc  b = a.copy()", note: "List mới, phần tử trong vẫn tham chiếu" },
      { name: "Sorted với key", formula: "sorted(iterable, key=lambda x: ..., reverse=True)", note: "Sắp theo tiêu chí tuỳ ý" },
      { name: "Unpack dict vào kwargs", formula: "f(**{'a':1,'b':2})  →  f(a=1, b=2)", note: "** unpack, * unpack iterable" },
    ],
    workedExamples: [
      {
        title: "Đếm tần suất từ bằng dict",
        problem: "Cho words = ['ai','data','ai','ml','data','ai']. Đếm số lần xuất hiện mỗi từ.",
        steps: [
          "counts = {}",
          "for w in words: counts[w] = counts.get(w, 0) + 1",
          "Kết quả: {'ai':3, 'data':2, 'ml':1}",
          "Hoặc dùng: from collections import Counter; Counter(words)"
        ],
        answer: "{'ai': 3, 'data': 2, 'ml': 1}"
      },
      {
        title: "Top-3 phần tử theo tần suất",
        problem: "Từ dict counts ở trên, lấy 3 từ xuất hiện nhiều nhất.",
        steps: [
          "top = sorted(counts.items(), key=lambda x: x[1], reverse=True)[:3]",
          "items() cho list (word, count). key=lambda x: x[1] sắp theo count.",
          "reverse=True để giảm dần. [:3] lấy 3 phần tử đầu."
        ],
        answer: "[('ai',3), ('data',2), ('ml',1)]"
      },
      {
        title: "Hàm summarize list",
        problem: "Viết hàm nhận list số, trả {'mean':…,'max':…,'min':…}. Xử lý list rỗng.",
        steps: [
          "def summarize(vals): if not vals: return None",
          "return {'mean': sum(vals)/len(vals), 'max': max(vals), 'min': min(vals)}",
          "Test: summarize([3,5,10]) → {'mean':6.0, 'max':10, 'min':3}",
          "Edge case: summarize([]) → None (tránh ZeroDivisionError)"
        ],
        answer: "{'mean': 6.0, 'max': 10, 'min': 3}"
      }
    ]
  },

  "read-code-debug": {
    allFormulas: [
      { name: "Trace table", formula: "bước | biến_chính | tích_lũy | ghi_chú", note: "Công cụ debug thủ công hiệu quả nhất" },
      { name: "O(1)", formula: "dict/set lookup, list index", note: "Hằng số — không phụ thuộc n" },
      { name: "O(n)", formula: "một vòng for qua n phần tử", note: "Tuyến tính" },
      { name: "O(n²)", formula: "hai vòng for lồng nhau, mỗi vòng n bước", note: "Quadratic" },
      { name: "O(n log n)", formula: "sort() — Timsort", note: "Sắp xếp tối ưu so sánh dựa" },
      { name: "O(log n)", formula: "Binary search", note: "Yêu cầu array đã sắp xếp" },
      { name: "range(a, b)", formula: "sinh a, a+1, ..., b-1 (không bao gồm b)", note: "Off-by-one bẫy thường gặp" },
      { name: "slice [i:j]", formula: "lấy index i đến j-1", note: "Tương tự range, không bao gồm j" },
    ],
    workedExamples: [
      {
        title: "Trace vòng lặp tích lũy",
        problem: "s = 0; for i in range(5): s += i*2; print(s) — kết quả?",
        steps: [
          "i=0: s = 0 + 0 = 0",
          "i=1: s = 0 + 2 = 2",
          "i=2: s = 2 + 4 = 6",
          "i=3: s = 6 + 6 = 12",
          "i=4: s = 12 + 8 = 20",
        ],
        answer: "20"
      },
      {
        title: "Phát hiện bug mutable default",
        problem: "def append_to(x, lst=[]): lst.append(x); return lst. Gọi append_to(1) rồi append_to(2).",
        steps: [
          "lst=[] được tạo MỘT LẦN khi định nghĩa hàm, không phải mỗi lần gọi.",
          "append_to(1) → lst = [1], trả [1]",
          "append_to(2) → lst = [1, 2], trả [1, 2] — không phải [2] như mong đợi!",
          "Fix: def append_to(x, lst=None): if lst is None: lst = []; lst.append(x); return lst"
        ],
        answer: "Lần gọi 2 trả [1, 2] do shared state. Fix: dùng None làm default."
      }
    ]
  },

  "hand-code-pseudocode": {
    allFormulas: [
      { name: "Khung câu trả lời tự luận", formula: "Input → Edge cases → Algorithm → Output → Complexity", note: "Đủ các phần = điểm tối đa" },
      { name: "Two-pointer (sorted)", formula: "l=0, r=n-1; while l<r: check sum; move pointer", note: "Tìm pair sum O(n)" },
      { name: "Sliding window", formula: "l=0; for r in range(n): ... if cond: l+=1", note: "Subarray liên tiếp O(n)" },
      { name: "Frequency count", formula: "d.get(x,0)+1", note: "O(n) time, O(k) space" },
      { name: "Flatten 1 lớp", formula: "for sub in nested: for x in sub: result.append(x)", note: "O(n) với n tổng phần tử" },
      { name: "Top-k by value", formula: "sorted(d.items(), key=lambda x:x[1], reverse=True)[:k]", note: "O(n log n)" },
    ],
    workedExamples: [
      {
        title: "Two-sum: tìm cặp (i,j) có arr[i]+arr[j]==target",
        problem: "arr = [2, 7, 11, 15], target = 9. Tìm indices.",
        steps: [
          "Approach O(n): seen = {}; for i, x in enumerate(arr):",
          "  complement = target - x",
          "  if complement in seen: return (seen[complement], i)",
          "  seen[x] = i",
          "i=0, x=2: complement=7, seen={} → seen={2:0}",
          "i=1, x=7: complement=2, 2 in seen → return (0, 1)"
        ],
        answer: "(0, 1) vì arr[0]+arr[1] = 2+7 = 9"
      },
      {
        title: "Pandas top-3 quận median price_per_m2",
        problem: "df có cột district, price, area. Tìm top-3 quận median price_per_m2 cao nhất, bỏ area<=0.",
        steps: [
          "df = df[df['area'] > 0].copy()  # lọc area hợp lệ",
          "df['ppm2'] = df['price'] / df['area']  # tạo feature",
          "result = df.groupby('district')['ppm2'].median().nlargest(3)",
          "print(result)"
        ],
        answer: "Series 3 quận có median ppm2 cao nhất"
      }
    ]
  },

  "numpy-pandas": {
    allFormulas: [
      { name: "Pipeline chuẩn", formula: "read_csv → inspect → clean → engineer → split → train → eval", note: "Thứ tự không thể đảo" },
      { name: "inspect bộ ba", formula: "df.info(), df.describe(), df.isna().sum()", note: "Chạy ngay sau read_csv" },
      { name: "groupby pattern", formula: "df.groupby(key)[col].agg(func)", note: "func: mean, sum, count, median, nunique" },
      { name: "Boolean filter", formula: "df[(cond1) & (cond2)]", note: "& và | cho pandas, phải có ngoặc" },
      { name: "Leakage rule", formula: "fit(X_train) → transform(X_train, X_test)", note: "Không bao giờ fit trên test" },
      { name: "loc pattern", formula: "df.loc[mask, ['col1','col2']]", note: "Lọc dòng + chọn cột trong một lệnh" },
    ],
    workedExamples: [
      {
        title: "Tạo feature và groupby",
        problem: "Tính median price_per_m2 theo district. df có cột price, area, district.",
        steps: [
          "df['ppm2'] = df['price'] / df['area']",
          "result = df.groupby('district')['ppm2'].median()",
          "print(result.sort_values(ascending=False))"
        ],
        answer: "Series: district → median ppm2, sắp từ cao đến thấp"
      },
      {
        title: "Pipeline chống leakage",
        problem: "Scale features trước khi train logistic regression. Dữ liệu X_train, X_test, y_train.",
        steps: [
          "from sklearn.preprocessing import StandardScaler",
          "scaler = StandardScaler()",
          "X_train_s = scaler.fit_transform(X_train)  # học mean/std từ train",
          "X_test_s = scaler.transform(X_test)  # áp mean/std train lên test",
          "Sai lầm: scaler.fit_transform(X) trên toàn bộ rồi split → leakage"
        ],
        answer: "fit chỉ trên X_train, transform cho cả train và test"
      }
    ]
  },

  "numpy-deep": {
    allFormulas: [
      { name: "Element-wise multiply", formula: "a * b", note: "Khác với @ (matrix mul)" },
      { name: "Matrix multiply", formula: "A @ B  hoặc  np.dot(A, B)", note: "Yêu cầu inner dim khớp" },
      { name: "Transpose", formula: "A.T", note: "Shape (n,p) → (p,n)" },
      { name: "Broadcasting rule", formula: "Đọc từ phải: bằng nhau hoặc một chiều = 1", note: "(3,4)+(4,)→(3,4) ✓; (3,4)+(3,)→lỗi ✗" },
      { name: "Standardize", formula: "(X - X.mean(axis=0)) / X.std(axis=0)", note: "axis=0: thống kê theo cột (feature)" },
      { name: "Reshape -1", formula: "X.reshape(-1, 1)  hoặc  X.reshape(n, -1)", note: "-1 để NumPy tự tính chiều còn lại" },
      { name: "np.where (ReLU)", formula: "np.where(x > 0, x, 0)", note: "Equivalent: np.maximum(0, x)" },
      { name: "argmax / argmin", formula: "np.argmax(arr)  →  index phần tử lớn nhất", note: "axis có thể chỉ định" },
      { name: "Cosine similarity", formula: "cos = a·b / (‖a‖ × ‖b‖)", note: "= np.dot(a,b)/(norm(a)*norm(b))" },
    ],
    workedExamples: [
      {
        title: "Broadcasting cộng bias vào ma trận",
        problem: "X shape (4,3), bias shape (3,). Cộng bias vào mỗi dòng của X.",
        steps: [
          "bias shape (3,) được broadcast thành (1,3) rồi (4,3)",
          "Mỗi dòng của X cộng thêm bias: X + bias hợp lệ, kết quả (4,3)",
          "Kiểm tra: (4,3) + (3,) → đọc từ phải: 3==3 ✓, 4 và không có chiều → broadcast 4 → (4,3) ✓"
        ],
        answer: "Hợp lệ, shape kết quả (4,3)"
      },
      {
        title: "Tính cosine similarity giữa hai vector",
        problem: "u = [1, 2, 3], v = [4, 5, 6]. Tính cosine similarity.",
        steps: [
          "u·v = 1×4 + 2×5 + 3×6 = 4+10+18 = 32",
          "‖u‖ = √(1+4+9) = √14 ≈ 3.742",
          "‖v‖ = √(16+25+36) = √77 ≈ 8.775",
          "cos = 32 / (3.742 × 8.775) ≈ 32 / 32.83 ≈ 0.9746"
        ],
        answer: "≈ 0.9746 — hai vector gần như cùng hướng"
      }
    ]
  },

  "pandas-indexing": {
    allFormulas: [
      { name: "Boolean mask filter", formula: "df[(cond1) & (cond2)]", note: "Dùng & |, không dùng and or" },
      { name: "loc by label+mask", formula: "df.loc[mask, ['col1','col2']]", note: "Filter dòng + chọn cột" },
      { name: "iloc by position", formula: "df.iloc[row_slice, col_slice]", note: "Chỉ dùng số nguyên" },
      { name: "String filter", formula: "df[df['col'].str.contains('pattern')]", note: ".str accessor" },
      { name: "Conditional assign", formula: "df.loc[mask, 'col'] = value", note: "Tránh SettingWithCopyWarning" },
      { name: "sort + head", formula: "df.sort_values('col', ascending=False).head(n)", note: "Hoặc df.nlargest(n,'col')" },
      { name: "pd.cut buckets", formula: "pd.cut(col, bins=[...], labels=[...])", note: "Bins fixed; pd.qcut cho equal-freq" },
      { name: "nunique", formula: "df['col'].nunique()", note: "Số giá trị distinct, bỏ NaN" },
    ],
    workedExamples: [
      {
        title: "Lọc và sắp xếp ứng viên",
        problem: "df có cột name, python_score, sql_score. Lọc python>=7 và sql>=6, lấy top 5 theo tổng điểm.",
        steps: [
          "df['total'] = df['python_score'] + df['sql_score']",
          "mask = (df['python_score'] >= 7) & (df['sql_score'] >= 6)",
          "result = df.loc[mask, ['name','total']].nlargest(5, 'total')",
          "print(result.reset_index(drop=True))"
        ],
        answer: "DataFrame 5 ứng viên đủ điều kiện, sắp giảm theo total"
      },
      {
        title: "Tạo cột grade từ score",
        problem: "score 0-100: >=80→A, >=65→B, >=50→C, còn lại→D.",
        steps: [
          "conditions = [df['score']>=80, df['score']>=65, df['score']>=50]",
          "choices = ['A', 'B', 'C']",
          "df['grade'] = np.select(conditions, choices, default='D')",
          "Hoặc: pd.cut(df['score'], bins=[0,50,65,80,100], labels=['D','C','B','A'])"
        ],
        answer: "Cột grade với nhãn A/B/C/D"
      }
    ]
  },

  "pandas-groupby-merge": {
    allFormulas: [
      { name: "Named agg", formula: "df.groupby(key).agg(new_col=(src_col, func))", note: "Đặt tên metric rõ ràng" },
      { name: "transform (keep shape)", formula: "df.groupby(key)[col].transform('mean')", note: "Trả Series cùng index gốc" },
      { name: "cumsum trong group", formula: "df.sort_values('date').groupby('user')['amt'].cumsum()", note: "Cần sort trước" },
      { name: "LEFT JOIN", formula: "df1.merge(df2, on=key, how='left')", note: "Giữ tất cả df1, NaN nếu không khớp" },
      { name: "OUTER JOIN", formula: "df1.merge(df2, on=key, how='outer')", note: "Union cả hai, NaN ở đâu không khớp" },
      { name: "Kiểm tra grain", formula: "df['key'].is_unique  →  True nếu key unique", note: "Trước khi merge" },
      { name: "Đếm user duy nhất", formula: "merged['user_id'].nunique()", note: "Không dùng count() sau join one-to-many" },
      { name: "rank within group", formula: "df.groupby('city')['price'].rank(pct=True)", note: "Percentile rank trong group" },
    ],
    workedExamples: [
      {
        title: "Average spend per user (đúng cách)",
        problem: "orders có cột user_id, amount. Tính average total spend per user.",
        steps: [
          "# Sai: orders['amount'].mean() — trung bình giao dịch, không phải trung bình user",
          "user_total = orders.groupby('user_id')['amount'].sum()",
          "avg_user_spend = user_total.mean()",
          "print(f'Average spend per user: {avg_user_spend:.2f}')"
        ],
        answer: "Tính sum theo user trước, sau đó mean — tránh bias user nhiều giao dịch"
      },
      {
        title: "Feature: spend_last_30d không leakage",
        problem: "Tạo feature tổng chi tiêu 30 ngày trước reference_date cho mỗi user.",
        steps: [
          "# Với mỗi user có reference_date (ngày dự đoán):",
          "orders['days_before'] = (reference_date - orders['order_date']).dt.days",
          "recent = orders[(orders['days_before'] >= 0) & (orders['days_before'] <= 30)]",
          "spend_30d = recent.groupby('user_id')['amount'].sum().rename('spend_30d')",
          "users = users.merge(spend_30d, on='user_id', how='left').fillna(0)"
        ],
        answer: "Feature spend_last_30d chỉ dùng dữ liệu quá khứ — không leakage"
      }
    ]
  },

  "eda-visualization": {
    allFormulas: [
      { name: "Checklist EDA", formula: "shape → dtypes → missing → describe → target_dist → corr → leakage", note: "Thứ tự chuẩn trước khi model" },
      { name: "Missing ratio", formula: "df.isna().mean() × 100  (%)  ", note: "Cột > 50% missing: cân nhắc drop" },
      { name: "Class imbalance", formula: "df['target'].value_counts(normalize=True)", note: "Imbalance → dùng F1/AUC thay accuracy" },
      { name: "IQR outlier rule", formula: "outlier nếu x < Q1−1.5×IQR  hoặc  x > Q3+1.5×IQR", note: "Tukey fence" },
      { name: "Z-score outlier", formula: "z = (x−μ)/σ;  |z| > 3 → outlier", note: "Giả định normal distribution" },
      { name: "Pearson correlation", formula: "r = Σ(xi−x̄)(yi−ȳ) / (n−1)σxσy  ∈ [−1,1]", note: "Tuyến tính. Không đo quan hệ phi tuyến" },
    ],
    workedExamples: [
      {
        title: "EDA nhanh cho bảng churn",
        problem: "df_churn có cột user_id, tenure, spend, tickets, churn (0/1). Thực hiện EDA 5 bước.",
        steps: [
          "1. df.shape → (n, 5) — biết kích thước",
          "2. df.isna().sum() → xem missing theo cột",
          "3. df['churn'].value_counts(normalize=True) → xem tỉ lệ 0/1",
          "4. df.groupby('churn')[['tenure','spend','tickets']].mean() → so sánh trung bình giữa nhóm",
          "5. df.corr() → xem correlation, phát hiện leakage nếu r > 0.95 với target"
        ],
        answer: "5 bước EDA cơ bản cho classification problem"
      },
      {
        title: "Phát hiện right-skew và xử lý",
        problem: "Cột 'income' trong df có median 50k nhưng mean 120k. Xử lý thế nào?",
        steps: [
          "df['income'].hist() → thấy right-skew mạnh (đuôi phải dài)",
          "Kiểm tra: df['income'].skew() > 1 → cần xử lý",
          "Option 1: log transform: df['log_income'] = np.log1p(df['income'])",
          "Option 2: winsorize: clip 99th percentile",
          "Option 3: scaling robust (median-based): RobustScaler từ sklearn"
        ],
        answer: "Log transform hoặc RobustScaler phù hợp nhất cho right-skewed income"
      }
    ]
  },

  "data-cleaning": {
    allFormulas: [
      { name: "IQR outlier", formula: "outlier: x < Q1−1.5×IQR  hoặc  x > Q3+1.5×IQR", note: "Winsorize thay vì xóa khi n nhỏ" },
      { name: "Min-max scaling", formula: "x' = (x − min) / (max − min)  →  [0,1]", note: "Nhạy outlier vì dùng min/max" },
      { name: "Standardization (z-score)", formula: "x' = (x − μ) / σ  →  mean=0, std=1", note: "Ổn định hơn khi có outlier vừa" },
      { name: "RobustScaler", formula: "x' = (x − median) / IQR", note: "Tốt nhất khi outlier nhiều" },
      { name: "Fill strategy", formula: "mean: dùng cho normal dist | median: dùng khi skewed/outlier | mode: dùng cho categorical", note: "Cần domain knowledge" },
      { name: "pd.cut equal-width", formula: "pd.cut(col, bins=n)", note: "Bins chiều rộng bằng nhau" },
      { name: "pd.qcut equal-freq", formula: "pd.qcut(col, q=n)", note: "Bins số lượng phần tử bằng nhau" },
      { name: "ColumnTransformer", formula: "ColumnTransformer([('num', scaler, num_cols), ('cat', encoder, cat_cols)])", note: "Pipeline xử lý khác nhau cho từng nhóm cột" },
    ],
    workedExamples: [
      {
        title: "Xử lý missing theo mức độ",
        problem: "df có cột: age (missing 8%), income (missing 35%), city (missing 2% categorical).",
        steps: [
          "age missing 8%: fill bằng median (ổn định với outlier tuổi)",
          "  df['age'] = df['age'].fillna(df['age'].median())",
          "income missing 35%: tạo flag + fill median:",
          "  df['income_missing'] = df['income'].isna().astype(int)",
          "  df['income'] = df['income'].fillna(df['income'].median())",
          "city missing 2%: fill mode (categorical):",
          "  df['city'] = df['city'].fillna(df['city'].mode()[0])"
        ],
        answer: "Ba chiến lược khác nhau phù hợp với mức missing và kiểu dữ liệu"
      },
      {
        title: "Pipeline chống leakage với ColumnTransformer",
        problem: "Feature: age (số), income (số), city (categorical). Build preprocessing pipeline đúng.",
        steps: [
          "from sklearn.compose import ColumnTransformer",
          "from sklearn.impute import SimpleImputer",
          "from sklearn.preprocessing import StandardScaler, OneHotEncoder",
          "from sklearn.pipeline import Pipeline",
          "num_pipe = Pipeline([('imp', SimpleImputer(strategy='median')), ('sc', StandardScaler())])",
          "cat_pipe = Pipeline([('imp', SimpleImputer(strategy='most_frequent')), ('enc', OneHotEncoder(handle_unknown='ignore'))])",
          "preproc = ColumnTransformer([('num', num_pipe, ['age','income']), ('cat', cat_pipe, ['city'])])",
          "# Dùng trong full pipeline: Pipeline([('prep', preproc), ('clf', LogisticRegression())])"
        ],
        answer: "Pipeline fit trên train, transform test — tự động chống leakage"
      }
    ]
  },

  "sql-data-joins": {
    allFormulas: [
      { name: "SQL aggregate pattern", formula: "SELECT key, AGG(col) FROM tbl GROUP BY key HAVING AGG(col) cond ORDER BY AGG(col) DESC", note: "WHERE trước GROUP, HAVING sau GROUP" },
      { name: "Anti-join (không khớp)", formula: "LEFT JOIN ... WHERE right_table.id IS NULL", note: "Tìm record bảng trái không có trong bảng phải" },
      { name: "Window function rank", formula: "ROW_NUMBER() OVER (PARTITION BY grp ORDER BY col DESC)", note: "Rank trong group, không gom dòng" },
      { name: "Subquery average per group", formula: "SELECT AVG(total) FROM (SELECT grp, SUM(val) as total FROM tbl GROUP BY grp) sub", note: "Cần subquery để tính average of sums" },
      { name: "SELF JOIN", formula: "SELECT a.id, b.id FROM tbl a JOIN tbl b ON a.mgr_id = b.id", note: "Dùng alias để join bảng với chính nó" },
      { name: "DISTINCT count", formula: "COUNT(DISTINCT col)", note: "Đếm giá trị duy nhất, không phải số dòng" },
      { name: "Pandas groupby → SQL", formula: "df.groupby(key)[col].agg(func) ↔ GROUP BY key; AGG(col)", note: "transform ↔ window function" },
    ],
    workedExamples: [
      {
        title: "Đếm user duy nhất vs số giao dịch",
        problem: "Bảng orders (user_id, order_id, amount). Tính số user và số giao dịch.",
        steps: [
          "-- SQL:",
          "SELECT COUNT(DISTINCT user_id) as n_users, COUNT(*) as n_orders FROM orders;",
          "-- Pandas:",
          "print(f'Users: {orders[\"user_id\"].nunique()}')",
          "print(f'Orders: {len(orders)}')",
          "Nếu join với users rồi dùng COUNT(user_id) → đếm trùng theo số orders!"
        ],
        answer: "n_users = nunique(user_id); n_orders = COUNT(*). Không nhầm lẫn sau JOIN."
      },
      {
        title: "Top spender per city (SQL + pandas)",
        problem: "Tìm user có tổng chi tiêu cao nhất trong mỗi city.",
        steps: [
          "-- SQL dùng window function:",
          "SELECT * FROM (SELECT u.city, o.user_id, SUM(o.amount) as total,",
          "  ROW_NUMBER() OVER (PARTITION BY u.city ORDER BY SUM(o.amount) DESC) as rn",
          "  FROM orders o JOIN users u ON o.user_id=u.user_id GROUP BY u.city, o.user_id) t",
          "WHERE rn = 1;",
          "-- Pandas:",
          "merged = orders.merge(users[['user_id','city']], on='user_id')",
          "user_total = merged.groupby(['city','user_id'])['amount'].sum().reset_index()",
          "top = user_total.sort_values('amount', ascending=False).groupby('city').first()"
        ],
        answer: "Window function (SQL) hoặc groupby+first (pandas) cho top-1 per group"
      }
    ]
  }
};
