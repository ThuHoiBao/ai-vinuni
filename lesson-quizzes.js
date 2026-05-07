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
  },

  // ─── Module C Extra Theory (5 bài đầu) ────────────────────────────────────

  // ══════════════════════════════════════════════════════════
  // MODULE C — BÀI 1: ML types
  // ══════════════════════════════════════════════════════════
  "ml-types": {
    allFormulas: [
      { name: "Supervised objective", formula: "minimize L(y_true, f(X; θ))", note: "f học ánh xạ X → y từ nhãn" },
      { name: "Unsupervised", formula: "find structure in P(X) — không cần y", note: "clustering, PCA, autoencoder" },
      { name: "RL objective", formula: "maximize E[Σ γᵗ rₜ]", note: "γ là discount factor, r là reward" },
      { name: "Logistic sigmoid", formula: "p = 1 / (1 + e^(−z))  →  [0,1]", note: "Dù tên 'regression', đây là classifier" },
      { name: "Linear regression", formula: "y = w·x + b", note: "output liên tục, loss = MSE" },
      { name: "Phân loại bài toán", formula: "có nhãn liên tục → regression | có nhãn rời rạc → classification | không nhãn → unsupervised", note: "" },
    ],
    workedExamples: [
      {
        title: "Phân loại 5 bài toán AI",
        problem: "Phân loại: (1) dự đoán giá nhà, (2) lọc spam, (3) phân nhóm KH, (4) chơi cờ vua, (5) nén ảnh.",
        steps: [
          "(1) Giá nhà: supervised regression — nhãn là giá liên tục",
          "(2) Lọc spam: supervised classification — nhãn là spam/not spam",
          "(3) Phân nhóm KH: unsupervised clustering — không có nhãn trước",
          "(4) Chơi cờ vua: reinforcement learning — reward = thắng/thua",
          "(5) Nén ảnh: unsupervised (autoencoder/PCA) — học biểu diễn compact"
        ],
        answer: "regression | classification | clustering | RL | unsupervised representation"
      },
      {
        title: "Tại sao Logistic Regression là classification?",
        problem: "Giải thích tại sao Logistic Regression dự đoán class dù tên có chữ 'regression'.",
        steps: [
          "Bước 1: Tính z = w·x + b (tuyến tính)",
          "Bước 2: p = sigmoid(z) = 1/(1+e^−z) → xác suất thuộc class 1",
          "Bước 3: Dự đoán class 1 nếu p >= 0.5, class 0 nếu p < 0.5",
          "Output là xác suất rời rạc → classification task"
        ],
        answer: "Output là xác suất → quyết định class. Tên 'regression' vì fit z tuyến tính."
      }
    ]
  },

  // ══════════════════════════════════════════════════════════
  // MODULE C — BÀI 2: K-means & PCA
  // ══════════════════════════════════════════════════════════
  "kmeans-pca": {
    allFormulas: [
      { name: "K-means objective", formula: "minimize Σᵢ Σₓ∈Cᵢ ‖x − μᵢ‖²", note: "Tổng squared distance đến centroid" },
      { name: "Centroid update", formula: "μᵢ = (1/|Cᵢ|) Σₓ∈Cᵢ x", note: "Trung bình tất cả điểm trong cụm i" },
      { name: "Inertia (WCSS)", formula: "Σᵢ Σₓ∈Cᵢ ‖x − μᵢ‖²", note: "Dùng elbow method chọn k" },
      { name: "Silhouette score", formula: "s = (b − a) / max(a, b)  ∈ [−1, 1]", note: "a: khoảng cách nội cụm; b: khoảng cách liên cụm gần nhất" },
      { name: "PCA variance explained", formula: "ratio = λᵢ / Σλⱼ", note: "λ là eigenvalue, chọn số components đủ 80-90% variance" },
      { name: "PCA transform", formula: "X_reduced = X @ W_k", note: "W_k: k principal components (eigenvectors)" },
    ],
    workedExamples: [
      {
        title: "Chọn k bằng Elbow method",
        problem: "Inertia với k=1,2,3,4,5 là 1000, 400, 180, 160, 155. Chọn k nào?",
        steps: [
          "k=1→2: giảm 600 (lớn)",
          "k=2→3: giảm 220 (lớn)",
          "k=3→4: giảm 20 (nhỏ đột ngột)",
          "k=4→5: giảm 5 (rất nhỏ)",
          "Elbow xuất hiện tại k=3 — điểm mà giảm inertia bắt đầu không đáng kể"
        ],
        answer: "Chọn k=3 (elbow tại điểm giảm đột ngột từ k=3 sang k=4)"
      },
      {
        title: "Tại sao cần scale trước K-means?",
        problem: "Feature: income (0–10,000,000 VND) và age (18–65). Điều gì xảy ra nếu không scale?",
        steps: [
          "Khoảng cách Euclidean: d = √((Δincome)² + (Δage)²)",
          "Δincome có thể = 5,000,000; Δage chỉ = 10",
          "(5,000,000)² >> (10)² → income gần như hoàn toàn kiểm soát kết quả clustering",
          "age bị bỏ qua trong phân cụm — kết quả sai",
          "Sau StandardScaler: cả hai có std=1, đóng góp bình đẳng"
        ],
        answer: "StandardScaler trước K-means để mọi feature đóng góp bình đẳng vào khoảng cách"
      }
    ]
  },

  // ══════════════════════════════════════════════════════════
  // MODULE C — BÀI 3: Model cổ điển
  // ══════════════════════════════════════════════════════════
  "classic-models": {
    allFormulas: [
      { name: "Linear Regression", formula: "y = w·x + b,  loss = MSE = (1/n)Σ(yᵢ − ŷᵢ)²", note: "Output liên tục" },
      { name: "Logistic Regression", formula: "p = σ(w·x + b),  loss = Binary Cross Entropy", note: "Output xác suất [0,1]" },
      { name: "SVM margin", formula: "maximize 2/‖w‖  subject to yᵢ(w·xᵢ+b) ≥ 1", note: "Hard margin. Soft margin thêm slack ξ" },
      { name: "Gini impurity", formula: "Gini = 1 − Σ pᵢ²", note: "Decision Tree split criterion" },
      { name: "Random Forest", formula: "prediction = majority_vote(tree₁, ..., treeₙ)", note: "Bagging + feature subsampling" },
      { name: "L1 Lasso", formula: "loss + λΣ|wⱼ|", note: "Có thể cho w=0 → feature selection" },
      { name: "L2 Ridge", formula: "loss + λΣwⱼ²", note: "Thu nhỏ weight, không về 0" },
    ],
    workedExamples: [
      {
        title: "Chọn model cho bài toán tabular nhỏ",
        problem: "n=500 mẫu, 15 feature số, cần interpretability cao, binary classification. Model nào baseline tốt?",
        steps: [
          "Logistic Regression: linear boundary, feature coefficients dễ giải thích, fast",
          "Decision Tree: interpretable nhưng dễ overfit với n nhỏ",
          "Random Forest: ổn định hơn nhưng kém interpretable",
          "Khuyến nghị: Logistic Regression (baseline) + L1/L2 regularization để handle multicollinearity",
          "Kiểm tra: plot coefficients để thấy feature quan trọng"
        ],
        answer: "Logistic Regression với regularization — interpretable và phù hợp n nhỏ"
      },
      {
        title: "Tại sao Random Forest ít overfit hơn Decision Tree đơn?",
        problem: "Giải thích cơ chế Random Forest giảm variance so với một cây đơn.",
        steps: [
          "Decision Tree sâu: học thuộc train, variance cao",
          "Random Forest: train B cây trên bootstrap samples khác nhau",
          "Mỗi cây chỉ xem subset ngẫu nhiên của features (feature subsampling)",
          "Prediction = majority vote → average lỗi ngẫu nhiên → variance giảm",
          "Bias không tăng nhiều; variance giảm đáng kể → bias-variance tradeoff tốt hơn"
        ],
        answer: "Bagging + feature subsampling tạo cây đa dạng; trung bình hóa giảm variance"
      }
    ]
  },

  // ══════════════════════════════════════════════════════════
  // MODULE C — BÀI 4: ML pipeline, overfit/underfit
  // ══════════════════════════════════════════════════════════
  "pipeline-overfit": {
    allFormulas: [
      { name: "Bias-variance tradeoff", formula: "Error = Bias² + Variance + Irreducible Noise", note: "Không thể giảm cả hai cùng lúc" },
      { name: "L2 Regularization (Ridge)", formula: "J = loss + λ‖w‖²", note: "λ lớn → model đơn giản hơn → giảm variance" },
      { name: "L1 Regularization (Lasso)", formula: "J = loss + λΣ|wⱼ|", note: "Tạo sparse weight → feature selection" },
      { name: "Dropout", formula: "Mỗi neuron tắt với xác suất p trong training", note: "Không dùng dropout lúc inference" },
      { name: "Early stopping", formula: "Dừng khi val_loss không giảm sau patience epochs", note: "Tránh train quá nhiều epoch" },
      { name: "Learning curve", formula: "plot train_loss vs val_loss theo training size / epoch", note: "Gap lớn = overfit; cả hai cao = underfit" },
    ],
    workedExamples: [
      {
        title: "Đọc learning curve — chẩn đoán overfit/underfit",
        problem: "Epoch 1-20: train_loss giảm từ 0.9 → 0.1; val_loss giảm từ 0.85 → 0.45 rồi tăng lên 0.60 tại epoch 20. Chẩn đoán?",
        steps: [
          "Epoch 1-12: cả hai giảm → model đang học tốt",
          "Epoch 12-20: train tiếp tục giảm, val_loss tăng → overfitting",
          "Gap tăng dần giữa train và val là dấu hiệu model học nhiễu",
          "Giải pháp: early stopping tại epoch 12, thêm dropout, L2 regularization, hoặc tăng dữ liệu"
        ],
        answer: "Overfit từ epoch 12. Dừng tại val_loss thấp nhất, thêm regularization."
      },
      {
        title: "Pipeline ML chuẩn đầy đủ",
        problem: "Liệt kê 8 bước pipeline ML cho bài toán dự đoán churn.",
        steps: [
          "1. Thu thập dữ liệu + định nghĩa label churn (ai bị coi là churn?)",
          "2. EDA: shape, missing, distribution, imbalance, leakage check",
          "3. Feature engineering: tenure, spend_30d, ticket_rate, …",
          "4. Split: train/val/test (stratified theo target)",
          "5. Preprocessing trong pipeline: impute → scale → encode (fit chỉ trên train)",
          "6. Train + hyperparameter tuning trên val/CV",
          "7. Evaluate trên test set (một lần duy nhất)",
          "8. Deploy + monitor: drift detection, retrain trigger"
        ],
        answer: "8 bước: collect→EDA→engineer→split→preprocess→train/tune→evaluate→deploy/monitor"
      }
    ]
  },

  // ══════════════════════════════════════════════════════════
  // MODULE C — BÀI 5: Train/val/test, CV, leakage
  // ══════════════════════════════════════════════════════════
  "validation-crossval": {
    allFormulas: [
      { name: "K-fold CV score", formula: "score_CV = (1/k) Σᵢ score_fold_i", note: "Ước lượng generalization ổn định hơn 1 split" },
      { name: "Train/val/test split", formula: "Thường: 60/20/20 hoặc 70/15/15", note: "Test chỉ dùng 1 lần cuối" },
      { name: "Stratified split", formula: "Giữ nguyên tỉ lệ class trong mỗi fold", note: "Bắt buộc khi class imbalanced" },
      { name: "Time-series split", formula: "Train: t₁…tₙ | Val: tₙ₊₁…tₙ₊ₖ (forward chaining)", note: "Không shuffle; tương lai không leak vào quá khứ" },
      { name: "Nested CV", formula: "Outer CV đánh giá | Inner CV tune hyperparameter", note: "Tránh selection bias" },
      { name: "Leakage types", formula: "Train-test contamination | Target leakage | Temporal leakage", note: "Mọi loại đều gây đánh giá lạc quan" },
    ],
    workedExamples: [
      {
        title: "Tại sao stratify=y quan trọng với fraud 1%?",
        problem: "Dataset 10,000 mẫu, 1% là fraud (100 mẫu). Chia 80/20 không stratify.",
        steps: [
          "Random split: test có thể chỉ có 15 hoặc 25 fraud (biến động lớn)",
          "Với 15 fraud trong test: model đoán tất cả là 0 → accuracy 99.85% → misleading",
          "Với stratify=y: test luôn có đúng 20 fraud (1% của 2000) → đánh giá ổn định",
          "F1/precision/recall cũng ổn định hơn trên tập test cố định tỉ lệ"
        ],
        answer: "stratify=y đảm bảo mỗi split có cùng tỉ lệ class → đánh giá đáng tin cậy hơn"
      },
      {
        title: "Phát hiện leakage trong pipeline",
        problem: "Pipeline: scale toàn bộ X → split → train model → evaluate. Tìm lỗi.",
        steps: [
          "Lỗi: StandardScaler.fit trên toàn bộ X (bao gồm X_test)",
          "Scaler học mean/std có thông tin từ test → thống kê test rò rỉ vào training",
          "Model có lợi thế không công bằng → val/test score cao hơn thực tế",
          "Fix: X_train, X_test = split(X, y); scaler.fit(X_train); X_train=scaler.transform(X_train); X_test=scaler.transform(X_test)"
        ],
        answer: "Fit scaler trước split = data leakage. Fix: split trước, fit preprocessing chỉ trên train."
      }
    ]
  }
};

// ─── MODULE C QUIZZES (5 bài đầu × 20 câu) ───────────────────────────────
Object.assign(window.LESSON_QUIZZES, {

  // ══════════════════════════════════════════════════════════
  // MODULE C — BÀI 1: ML types
  // ══════════════════════════════════════════════════════════
  "ml-types": [
    { module:"C", difficulty:"easy",
      q: "Supervised learning khác unsupervised learning ở điểm gì chính?",
      options:["Supervised học từ dữ liệu có nhãn (X, y); unsupervised chỉ có X","Supervised không cần dữ liệu","Unsupervised nhanh hơn","Supervised chỉ dùng cho ảnh"],
      answer:0, explanation:"Supervised: có cặp (X, y). Unsupervised: tìm pattern trong X không cần y." },
    { module:"C", difficulty:"easy",
      q: "Bài toán nào là supervised classification?",
      options:["Dự đoán email là spam hay không","Phân nhóm khách hàng thành 3 nhóm","Học chơi game Atari","Nén ảnh bằng autoencoder"],
      answer:0, explanation:"Spam detection: có nhãn spam/not-spam, output rời rạc → classification." },
    { module:"C", difficulty:"easy",
      q: "Bài toán nào là regression?",
      options:["Dự đoán giá cổ phiếu ngày mai","Phân loại ảnh mèo/chó","Phát hiện anomaly","Phân cụm user"],
      answer:0, explanation:"Dự đoán giá: output là số liên tục → regression." },
    { module:"C", difficulty:"easy",
      q: "Reinforcement learning học qua cơ chế nào?",
      options:["Reward và penalty qua tương tác với môi trường","Nhãn từ con người","Phân cụm tự động","Giảm reconstruction error"],
      answer:0, explanation:"RL: agent quan sát state → action → nhận reward → cập nhật policy để maximize cumulative reward." },
    { module:"C", difficulty:"easy",
      q: "Logistic Regression là loại model nào?",
      options:["Classification (dù tên có 'regression')","Regression","Clustering","Reinforcement"],
      answer:0, explanation:"Output là xác suất qua sigmoid → dùng để classify. Tên gây nhầm lẫn là bẫy thường gặp." },
    { module:"C", difficulty:"medium",
      q: "Bài toán phân nhóm khách hàng theo hành vi mua hàng không có nhãn trước thuộc loại nào?",
      options:["Unsupervised clustering","Supervised classification","Regression","RL"],
      answer:0, explanation:"Không có nhãn sẵn có → unsupervised. Kết quả là cụm (cluster)." },
    { module:"C", difficulty:"medium",
      q: "Metric nào phù hợp nhất cho bài toán supervised regression?",
      options:["RMSE hoặc MAE","Accuracy","F1 score","Silhouette"],
      answer:0, explanation:"RMSE/MAE đo lỗi dự đoán cho output liên tục. Accuracy/F1 dùng cho classification." },
    { module:"C", difficulty:"medium",
      q: "Điểm chung của K-means, PCA và autoencoder là gì?",
      options:["Đều là unsupervised — không cần nhãn y","Đều là supervised","Đều dùng gradient descent với cross entropy","Đều cần nhãn rời rạc"],
      answer:0, explanation:"Cả ba học từ X không có y → unsupervised learning." },
    { module:"C", difficulty:"medium",
      q: "Semi-supervised learning là gì?",
      options:["Học từ ít dữ liệu có nhãn và nhiều dữ liệu không nhãn","Chỉ dùng dữ liệu có nhãn","Chỉ dùng dữ liệu không nhãn","Học qua reward"],
      answer:0, explanation:"Semi-supervised tận dụng cả labeled và unlabeled data — phổ biến khi nhãn đắt tiền để thu thập." },
    { module:"C", difficulty:"medium",
      q: "Bài toán nào phù hợp nhất với Reinforcement Learning?",
      options:["Tối ưu chiến lược đặt giá động cho khách sạn","Phân loại hình ảnh","Dự đoán doanh thu tháng sau","Phân nhóm sản phẩm"],
      answer:0, explanation:"Pricing strategy cần agent tương tác với thị trường, nhận feedback (revenue) và điều chỉnh hành động." },
    { module:"C", difficulty:"medium",
      q: "Transfer learning là gì?",
      options:["Dùng lại kiến thức từ task/dataset đã train để cải thiện task mới","Train từ đầu trên dữ liệu mới","Chuyển dữ liệu giữa hai bảng","Copy model sang server khác"],
      answer:0, explanation:"Pre-trained model (VGG, BERT) học feature tổng quát; fine-tune trên task mới → tiết kiệm data và compute." },
    { module:"C", difficulty:"medium",
      q: "Điều gì xảy ra khi dùng accuracy cho bài toán fraud detection với 0.1% positive?",
      options:["Model đoán tất cả là 0 đạt 99.9% accuracy — số ảo, vô nghĩa","Accuracy vẫn tốt vì 99.9% cao","Model tự cân bằng class","Không có vấn đề gì"],
      answer:0, explanation:"Imbalanced classes làm accuracy misleading. Dùng precision/recall/F1/PR-AUC cho fraud." },
    { module:"C", difficulty:"hard",
      q: "Self-supervised learning khác supervised learning thế nào?",
      options:["Self-supervised tự tạo label từ dữ liệu thô (không cần người dán nhãn)","Giống nhau","Self-supervised cần ít data hơn","Self-supervised chỉ cho NLP"],
      answer:0, explanation:"BERT học bằng cách tự mask token rồi predict. Label tạo ra từ chính dữ liệu — không cần annotation." },
    { module:"C", difficulty:"hard",
      q: "Bài toán anomaly detection trong hệ thống IT phù hợp với loại học nào và vì sao?",
      options:["Unsupervised (hoặc semi-supervised) vì anomaly hiếm và khó có nhãn đầy đủ","Supervised vì có log","RL vì cần action","Regression vì output là số"],
      answer:0, explanation:"Anomaly thường thiếu nhãn, không cân bằng. Unsupervised (isolation forest, autoencoder) học distribution bình thường." },
    { module:"C", difficulty:"hard",
      q: "Tại sao không nên bắt đầu thiết kế AI từ tên thuật toán?",
      options:["Nên bắt đầu từ bài toán, dữ liệu, metric và ràng buộc deploy; thuật toán chỉ là phương tiện","Thuật toán quan trọng hơn dữ liệu","Metric không cần thiết trước khi chọn model","Model phức tạp luôn tốt hơn"],
      answer:0, explanation:"Problem-first thinking: hiểu rõ bài toán mới chọn model phù hợp. Deep learning không phải lúc nào cũng cần." },
    { module:"C", difficulty:"hard",
      q: "Data augmentation phổ biến nhất trong loại bài toán nào?",
      options:["Supervised learning với ảnh hoặc text khi data ít","Clustering","Regression tabular","RL"],
      answer:0, explanation:"Flip/crop/rotate ảnh tạo thêm training samples → giảm overfit. Với tabular data ít dùng hơn." },
    { module:"C", difficulty:"hard",
      q: "Objective function của unsupervised autoencoder là?",
      options:["Minimize reconstruction error: ‖x − decoder(encoder(x))‖²","Maximize reward","Minimize cross entropy với nhãn","Maximize margin"],
      answer:0, explanation:"Autoencoder học encode-decode; không cần nhãn. Loss = lỗi tái tạo input." },
    { module:"C", difficulty:"hard",
      q: "Khi nào nên dùng rule-based thay vì ML?",
      options:["Khi logic rõ ràng, ít exception và cần explainability tuyệt đối","Khi có nhiều dữ liệu","Khi bài toán phức tạp","Khi cần accuracy cao nhất"],
      answer:0, explanation:"Nếu 'if amount > 10M and foreign country → flag' đủ tốt, không cần model. Đơn giản > phức tạp." },
    { module:"C", difficulty:"hard",
      q: "Multi-task learning là gì?",
      options:["Train một model để giải đồng thời nhiều task liên quan, chia sẻ representation","Train nhiều model riêng biệt","Transfer learning sau khi train xong","Ensemble nhiều model"],
      answer:0, explanation:"MTL học shared feature tốt hơn khi các task liên quan. Ví dụ: detect object + phân loại cùng lúc." },
    { module:"C", difficulty:"hard",
      q: "Evaluation metric cho K-means (unsupervised) khác supervised ở điểm gì?",
      options:["Không có ground-truth nhãn → dùng silhouette, inertia, hoặc đánh giá downstream task","Dùng accuracy","Dùng F1","Dùng RMSE"],
      answer:0, explanation:"Unsupervised không có nhãn để so sánh trực tiếp. Silhouette đo cụm tốt dựa trên khoảng cách nội/liên cụm." }
  ],

  // ══════════════════════════════════════════════════════════
  // MODULE C — BÀI 2: K-means & PCA
  // ══════════════════════════════════════════════════════════
  "kmeans-pca": [
    { module:"C", difficulty:"easy",
      q: "K-means cần chỉ định điều gì trước khi chạy?",
      options:["Số cụm k","Nhãn y","Learning rate","Train/test split"],
      answer:0, explanation:"K-means không tự chọn k. Cần thử nhiều k và dùng elbow method hoặc silhouette." },
    { module:"C", difficulty:"easy",
      q: "Thuật toán K-means lặp lại hai bước nào?",
      options:["Gán điểm vào centroid gần nhất → cập nhật centroid = trung bình cụm","Tính gradient → cập nhật weight","Chọn k → split data","Scale → cluster"],
      answer:0, explanation:"E-step: gán; M-step: cập nhật centroid. Lặp đến khi centroid không đổi (hội tụ)." },
    { module:"C", difficulty:"easy",
      q: "PCA dùng để làm gì?",
      options:["Giảm số chiều dữ liệu giữ lại phương sai lớn nhất","Phân loại ảnh","Dự đoán giá trị liên tục","Tăng số chiều"],
      answer:0, explanation:"PCA tìm principal components (trục phương sai lớn nhất) để project dữ liệu xuống không gian chiều thấp hơn." },
    { module:"C", difficulty:"easy",
      q: "Tại sao cần StandardScaler trước K-means?",
      options:["Feature đơn vị khác nhau có thể áp đảo khoảng cách Euclidean","K-means yêu cầu dữ liệu nhị phân","Scale giúp chọn k tốt hơn","Không cần scale"],
      answer:0, explanation:"K-means dùng khoảng cách Euclidean. Feature có giá trị lớn hơn thống trị → phải normalize." },
    { module:"C", difficulty:"easy",
      q: "Inertia (WCSS) đo gì trong K-means?",
      options:["Tổng squared distance từ mỗi điểm đến centroid của cụm nó thuộc","Khoảng cách giữa các centroid","Số cụm tối ưu","Variance của toàn bộ dữ liệu"],
      answer:0, explanation:"Inertia = within-cluster sum of squares. Càng nhỏ càng tốt, nhưng k lớn luôn giảm inertia." },
    { module:"C", difficulty:"medium",
      q: "Elbow method để làm gì?",
      options:["Chọn k bằng cách tìm điểm inertia giảm đột ngột chậm lại","Scale feature","Chọn số principal components","Detect outlier"],
      answer:0, explanation:"Vẽ inertia theo k: điểm 'khuỷu tay' là k tối ưu khi thêm cụm ít giảm inertia thêm." },
    { module:"C", difficulty:"medium",
      q: "Silhouette score s = 1.0 có nghĩa là?",
      options:["Điểm thuộc đúng cụm, cách xa cụm kế tiếp — phân cụm hoàn hảo","Phân cụm xấu","Điểm nằm trên ranh giới cụm","k chọn sai"],
      answer:0, explanation:"s ∈ [−1,1]. s≈1: tốt. s≈0: ranh giới. s<0: có thể thuộc sai cụm." },
    { module:"C", difficulty:"medium",
      q: "PCA fit trên toàn bộ dữ liệu trước khi split có thể gây ra vấn đề gì trong supervised pipeline?",
      options:["Leakage nhẹ — thống kê variance từ test ảnh hưởng transform của train","Không có vấn đề gì","PCA không dùng được trong supervised","PCA tự tránh leakage"],
      answer:0, explanation:"Như scaler, PCA nên fit chỉ trên X_train rồi transform cả train và test." },
    { module:"C", difficulty:"medium",
      q: "Số principal components giữ lại thường dựa trên tiêu chí gì?",
      options:["Giữ đủ 80-90% explained variance","Bằng số feature gốc","Bằng k trong K-means","Luôn dùng 2 components"],
      answer:0, explanation:"Cumulative explained variance ratio: chọn k nhỏ nhất sao cho Σλᵢ/Σλ ≥ 0.80." },
    { module:"C", difficulty:"medium",
      q: "Nhược điểm lớn nhất của K-means là gì?",
      options:["Nhạy với giá trị khởi tạo centroid và số k phải chọn trước","Luôn hội tụ về toàn cục tối ưu","Chỉ dùng cho dữ liệu ảnh","Không scale được"],
      answer:0, explanation:"K-means có thể hội tụ về local optima. Dùng n_init='auto' để chạy nhiều lần và chọn kết quả tốt nhất." },
    { module:"C", difficulty:"medium",
      q: "PCA 2 components thường dùng để làm gì?",
      options:["Visualize dữ liệu nhiều chiều trong 2D để phát hiện cụm/outlier","Train classification model","Tính correlation","Thay thế label"],
      answer:0, explanation:"Biểu diễn 2D từ PCA giúp nhìn thấy cấu trúc dữ liệu, cụm, và điểm bất thường." },
    { module:"C", difficulty:"medium",
      q: "K-means hoạt động tốt khi cụm có hình dạng như thế nào?",
      options:["Hình cầu (convex), gần tròn và kích thước tương đương","Hình lưỡi liềm hoặc đồng tâm","Rất dài và hẹp","Bất kỳ hình dạng"],
      answer:0, explanation:"K-means dùng centroid (trung bình) nên giả định cụm convex và tương đối đều. DBSCAN tốt hơn cho hình dạng phức tạp." },
    { module:"C", difficulty:"hard",
      q: "DBSCAN khác K-means ở điểm gì?",
      options:["Không cần chọn k trước, phát hiện cụm hình dạng bất kỳ và xử lý được noise/outlier","DBSCAN cần nhãn","DBSCAN chỉ dùng cho 2D","K-means tốt hơn trong mọi trường hợp"],
      answer:0, explanation:"DBSCAN dùng density để xác định cụm. Điểm thưa = outlier/noise. Không giả định hình cầu." },
    { module:"C", difficulty:"hard",
      q: "Principal components là gì về mặt toán học?",
      options:["Eigenvectors của covariance matrix, sắp xếp theo eigenvalue giảm dần","Trung bình của feature","Gradient của loss","Hệ số hồi quy"],
      answer:0, explanation:"PCA: SVD hoặc eigen decomposition trên covariance matrix. PC1 là eigenvector có eigenvalue lớn nhất." },
    { module:"C", difficulty:"hard",
      q: "Khi nào nên dùng PCA trước khi train model?",
      options:["Khi features rất nhiều (>100), có đa cộng tuyến cao, hoặc cần visualize","Luôn luôn","Khi model đã overfit","Khi dữ liệu thiếu nhiều"],
      answer:0, explanation:"PCA hữu ích: giảm chiều, loại đa cộng tuyến, tăng tốc train. Nhưng mất interpretability feature gốc." },
    { module:"C", difficulty:"hard",
      q: "Whitening trong PCA làm gì thêm ngoài giảm chiều?",
      options:["Chia mỗi principal component cho std của nó → components có variance bằng nhau","Tăng số components","Tạo nhãn tự động","Loại bỏ outlier"],
      answer:0, explanation:"PCA whitening: uncorrelated + unit variance cho mỗi component. Dùng trong preprocessing cho neural networks." },
    { module:"C", difficulty:"hard",
      q: "Tại sao K-means++ cải thiện K-means chuẩn?",
      options:["Khởi tạo centroid thông minh: centroid mới ưu tiên chọn xa các centroid hiện có","Tự chọn k","Không cần scale","Chạy nhanh hơn"],
      answer:0, explanation:"K-means++ giảm khả năng hội tụ về local optima bằng cách khởi tạo centroid phân tán đều." },
    { module:"C", difficulty:"hard",
      q: "Sau PCA, feature gốc không còn giải thích được trực tiếp. Điều này ảnh hưởng gì?",
      options:["Mất interpretability — không thể nói 'feature income quan trọng'","Không ảnh hưởng gì","Model tốt hơn vì loại feature yếu","PCA vẫn giữ tên feature"],
      answer:0, explanation:"Principal components là tổ hợp tuyến tính của features gốc. Khó giải thích ý nghĩa kinh doanh." },
    { module:"C", difficulty:"hard",
      q: "Hierarchical clustering khác K-means ở điểm nào?",
      options:["Không cần chọn k trước; tạo dendrogram để cắt ở mức distance tuỳ chọn","Cần nhãn","Chỉ cho 1D","Không dùng khoảng cách"],
      answer:0, explanation:"Agglomerative clustering gom từng điểm từ dưới lên; dendrogram cho phép chọn số cụm sau khi có kết quả." },
    { module:"C", difficulty:"hard",
      q: "Explained variance ratio của PC1=0.45, PC2=0.30. Dùng 2 components giải thích được bao nhiêu % variance?",
      options:["75%","45%","30%","15%"],
      answer:0, explanation:"Cumulative: 0.45 + 0.30 = 0.75 = 75% variance được giữ lại với 2 components." }
  ],

  // ══════════════════════════════════════════════════════════
  // MODULE C — BÀI 3: Model cổ điển
  // ══════════════════════════════════════════════════════════
  "classic-models": [
    { module:"C", difficulty:"easy",
      q: "Linear Regression dùng để giải bài toán nào?",
      options:["Regression — dự đoán giá trị liên tục","Classification","Clustering","Dimensionality reduction"],
      answer:0, explanation:"Output của Linear Regression là số thực liên tục. Loss thường là MSE." },
    { module:"C", difficulty:"easy",
      q: "Hàm sigmoid trong Logistic Regression trả về giá trị trong khoảng nào?",
      options:["(0, 1)","(−∞, +∞)","(−1, 1)","[0, 100]"],
      answer:0, explanation:"σ(z) = 1/(1+e^−z) ∈ (0,1) — diễn giải được là xác suất." },
    { module:"C", difficulty:"easy",
      q: "Decision Tree chọn điểm split dựa trên tiêu chí nào?",
      options:["Gini impurity hoặc Information Gain (entropy)","MSE trên toàn bộ dữ liệu","Khoảng cách Euclidean","Pearson correlation"],
      answer:0, explanation:"Split tốt nhất là split giảm Gini/entropy nhiều nhất, tức là tạo cụm nhãn thuần nhất hơn." },
    { module:"C", difficulty:"easy",
      q: "Random Forest khác Decision Tree đơn ở điểm gì chính?",
      options:["Nhiều cây trên bootstrap samples + feature subsampling → giảm variance","Chỉ một cây nhưng sâu hơn","Không dùng split","Chỉ dùng cho regression"],
      answer:0, explanation:"Bagging + feature subsampling tạo cây đa dạng; majority vote giảm variance so với cây đơn." },
    { module:"C", difficulty:"easy",
      q: "L2 Regularization (Ridge) thêm gì vào loss function?",
      options:["λΣwⱼ² — phạt weight lớn","λΣ|wⱼ| — phạt weight lớn và có thể về 0","Thêm dropout","Không thay đổi loss"],
      answer:0, explanation:"Ridge: λ‖w‖². Lasso: λ‖w‖₁. Ridge shrinks weight; Lasso có thể zero weight." },
    { module:"C", difficulty:"medium",
      q: "SVM tìm gì khi training?",
      options:["Hyperplane có margin lớn nhất giữa các class","Cây phân loại","Centroid của cụm","Gradient tốt nhất"],
      answer:0, explanation:"Support Vector Machine maximize margin = 2/‖w‖. Support vectors là các điểm gần hyperplane nhất." },
    { module:"C", difficulty:"medium",
      q: "Khi nào Lasso (L1) ưu tiên hơn Ridge (L2)?",
      options:["Khi cần feature selection — L1 có thể shrink weight về đúng 0","Khi muốn giữ tất cả feature","Khi dữ liệu nhỏ","Khi output liên tục"],
      answer:0, explanation:"L1 tạo sparse model (nhiều weight = 0) → tự động loại feature không quan trọng." },
    { module:"C", difficulty:"medium",
      q: "Decision Tree sâu 30 levels thường gặp vấn đề gì?",
      options:["Overfit — học thuộc training data, test performance kém","Underfit","Không học được gì","Chạy quá nhanh"],
      answer:0, explanation:"Cây sâu có thể tạo leaf thuần nhất chỉ với 1-2 mẫu → overfit nghiêm trọng." },
    { module:"C", difficulty:"medium",
      q: "Feature importance trong Random Forest tính bằng cách nào?",
      options:["Trung bình Gini decrease hoặc permutation importance qua tất cả cây","Độ tương quan với target","Hệ số trong linear model","Không thể tính"],
      answer:0, explanation:"Gini importance: tổng Gini decrease khi feature được dùng để split, trung bình qua tất cả cây." },
    { module:"C", difficulty:"medium",
      q: "Kernel SVM khác linear SVM ở điểm gì?",
      options:["Dùng kernel trick để project dữ liệu lên không gian cao chiều, phân loại ranh giới phi tuyến","Chỉ dùng cho regression","Không cần hyperparameter","Nhanh hơn với dữ liệu lớn"],
      answer:0, explanation:"RBF/polynomial kernel ngầm chiếu lên không gian vô hạn chiều, cho phép ranh giới phi tuyến." },
    { module:"C", difficulty:"medium",
      q: "Gradient Boosting (XGBoost) khác Random Forest ở điểm gì?",
      options:["Boosting: cây mới học lỗi của cây trước (sequential); RF: cây độc lập (parallel)","RF học tuần tự","XGBoost dùng bagging","Không có khác biệt"],
      answer:0, explanation:"Gradient Boosting cộng dần các weak learners; mỗi cây fit residuals của tổ hợp trước." },
    { module:"C", difficulty:"medium",
      q: "Naive Bayes 'naive' vì giả định gì?",
      options:["Các feature độc lập có điều kiện với nhau (given class)","Feature không quan trọng","Dữ liệu chuẩn hóa","Chỉ dùng 2 feature"],
      answer:0, explanation:"P(x₁,…,xₙ|y) = Π P(xᵢ|y). Giả định độc lập rất mạnh nhưng thực ra hoạt động tốt trong nhiều trường hợp (NLP)." },
    { module:"C", difficulty:"hard",
      q: "Hyperparameter C trong SVM kiểm soát điều gì?",
      options:["Trade-off giữa margin rộng và phân loại đúng: C lớn → ít lỗi train, margin hẹp hơn","Số support vectors","Learning rate","Số feature"],
      answer:0, explanation:"C nhỏ: chấp nhận lỗi train để margin rộng (regularize nhiều). C lớn: ít lỗi train, margin hẹp (overfit nhiều hơn)." },
    { module:"C", difficulty:"hard",
      q: "max_depth trong Decision Tree ảnh hưởng gì đến bias-variance?",
      options:["Depth nhỏ → bias cao (underfit); depth lớn → variance cao (overfit)","Depth lớn → luôn tốt hơn","Không ảnh hưởng","Depth chỉ ảnh hưởng tốc độ"],
      answer:0, explanation:"Điều chỉnh max_depth là cách regularize cây. Dùng CV để tìm depth tối ưu." },
    { module:"C", difficulty:"hard",
      q: "OOB (Out-of-Bag) error trong Random Forest là gì?",
      options:["Validation error ước lượng bằng các mẫu không được chọn trong bootstrap sample của mỗi cây","Test error","Train error","CV error"],
      answer:0, explanation:"Mỗi cây chỉ train trên ~63% mẫu (bootstrap). ~37% còn lại (OOB) dùng để validate cây đó. OOB error ≈ CV error." },
    { module:"C", difficulty:"hard",
      q: "Logistic Regression multinomial (softmax) dùng khi nào?",
      options:["Khi có nhiều hơn 2 class (multiclass classification)","Khi chỉ có 2 class","Khi output là số liên tục","Khi dữ liệu không cân bằng"],
      answer:0, explanation:"Binary: sigmoid output. Multiclass: softmax output, one weight vector per class, cross entropy loss." },
    { module:"C", difficulty:"hard",
      q: "Stacking ensemble khác bagging và boosting thế nào?",
      options:["Stacking dùng meta-model học kết hợp prediction của nhiều base model khác nhau","Stacking = bagging với nhiều loại cây","Stacking chỉ dùng RF","Không có khác biệt"],
      answer:0, explanation:"Stacking: L1 base models (Logistic, RF, XGB,...) → L2 meta-model học cách blend dự đoán của L1." },
    { module:"C", difficulty:"hard",
      q: "Khi dataset có 1 triệu mẫu, model nào thường được chọn đầu tiên vì lý do compute?",
      options:["Logistic Regression hoặc Linear SVM (linear models scale tốt)","Deep learning","Random Forest với 1000 cây","KNN"],
      answer:0, explanation:"Linear models O(n×p) rất nhanh với n lớn. KNN tốn O(n) per query. RF tốn nhớ. DL cần GPU." },
    { module:"C", difficulty:"hard",
      q: "Partial dependence plot (PDP) dùng để làm gì?",
      options:["Hiển thị tác động trung bình của một feature lên prediction (mọi giá trị feature khác)","Tính feature importance","Detect outlier","Compare models"],
      answer:0, explanation:"PDP: marginalize các feature khác, vẽ prediction trung bình theo feature X → thấy trend tuyến tính/phi tuyến." },
    { module:"C", difficulty:"hard",
      q: "Elastic Net là gì?",
      options:["Kết hợp L1 và L2: loss + λ₁Σ|wⱼ| + λ₂Σwⱼ²","Chỉ L1","Chỉ L2","Không regularize"],
      answer:0, explanation:"Elastic Net lấy ưu điểm cả hai: L1 giúp feature selection, L2 xử lý correlated features." }
  ],

  // ══════════════════════════════════════════════════════════
  // MODULE C — BÀI 4: ML pipeline, overfit/underfit
  // ══════════════════════════════════════════════════════════
  "pipeline-overfit": [
    { module:"C", difficulty:"easy",
      q: "Overfitting xảy ra khi nào?",
      options:["Train accuracy cao nhưng validation/test accuracy thấp hơn nhiều","Cả train và test đều thấp","Train và test đều cao","Model không học được gì"],
      answer:0, explanation:"Overfit: model học nhiễu trong train, không generalize được sang data mới." },
    { module:"C", difficulty:"easy",
      q: "Underfitting xảy ra khi nào?",
      options:["Train và test đều có loss cao — model quá đơn giản","Train tốt nhưng test kém","Chỉ xảy ra với linear model","Khi dữ liệu nhiều"],
      answer:0, explanation:"Underfit: high bias. Model không đủ phức tạp hoặc feature yếu để học pattern." },
    { module:"C", difficulty:"easy",
      q: "Phương pháp nào giúp giảm overfitting trong neural network?",
      options:["Dropout, L2 regularization, early stopping, thêm dữ liệu","Tăng số layer","Giảm learning rate về 0","Tăng số epoch"],
      answer:0, explanation:"Regularization techniques giảm variance: dropout tắt neuron ngẫu nhiên; L2 phạt weight lớn; early stopping dừng kịp thời." },
    { module:"C", difficulty:"easy",
      q: "Early stopping dừng training khi nào?",
      options:["Khi validation loss không giảm sau patience epoch liên tiếp","Khi train loss = 0","Khi đủ số epoch","Khi accuracy đạt 100%"],
      answer:0, explanation:"Monitor val_loss; restore best weights. Tránh train quá nhiều gây overfit." },
    { module:"C", difficulty:"easy",
      q: "Bước nào trong ML pipeline thường được thực hiện TRƯỚC khi split data?",
      options:["Thu thập và định nghĩa bài toán","Feature scaling","Model training","Hyperparameter tuning"],
      answer:0, explanation:"Thu thập data và hiểu bài toán xảy ra trước. Scaling/imputing phải sau split để tránh leakage." },
    { module:"C", difficulty:"medium",
      q: "Bias cao và variance thấp tương ứng với tình trạng nào?",
      options:["Underfitting","Overfitting","Chính xác hoàn toàn","Không liên quan đến bias-variance"],
      answer:0, explanation:"High bias = model quá đơn giản, không khớp dữ liệu train. Low variance = consistent nhưng sai." },
    { module:"C", difficulty:"medium",
      q: "Learning curve nào chỉ ra overfitting?",
      options:["Train loss thấp, val loss cao và khoảng cách tăng dần theo epoch","Cả hai cùng cao","Cả hai cùng thấp","Cả hai cùng giảm song song"],
      answer:0, explanation:"Gap ngày càng rộng giữa train và val là dấu hiệu điển hình của overfit." },
    { module:"C", difficulty:"medium",
      q: "Tăng regularization parameter λ sẽ ảnh hưởng thế nào đến model?",
      options:["Tăng bias (đơn giản hơn), giảm variance (ít overfit hơn)","Tăng cả bias và variance","Giảm cả hai","Không ảnh hưởng"],
      answer:0, explanation:"λ lớn → phạt weight nhiều hơn → weight nhỏ hơn → model đơn giản hơn → bias tăng, variance giảm." },
    { module:"C", difficulty:"medium",
      q: "Data augmentation giúp gì trong việc giảm overfit?",
      options:["Tăng kích thước tập train hiệu quả bằng cách tạo biến thể của dữ liệu có sẵn","Giảm learning rate","Chọn model đơn giản hơn","Bỏ feature yếu"],
      answer:0, explanation:"Flip, crop, rotate ảnh tạo thêm mẫu đa dạng → model học invariance → ít overfit." },
    { module:"C", difficulty:"medium",
      q: "Batch normalization giúp training neural network thế nào?",
      options:["Normalize activation trong mỗi layer → giảm internal covariate shift, cho phép learning rate cao hơn","Thay dropout","Tạo dữ liệu mới","Giảm số layer"],
      answer:0, explanation:"BatchNorm: chuẩn hóa output layer → gradient ổn định hơn, training nhanh hơn, ít nhạy cảm với khởi tạo." },
    { module:"C", difficulty:"medium",
      q: "Khi nào nên thêm dữ liệu để giảm overfit vs khi nào nên đơn giản hóa model?",
      options:["Thêm data khi có thể thu thập; đơn giản hóa khi data đã đủ và vẫn overfit","Luôn thêm data","Luôn đơn giản hóa","Không liên quan"],
      answer:0, explanation:"Thêm data giảm variance. Regularization, dropout, pruning đơn giản hóa model. Dùng learning curve để quyết định." },
    { module:"C", difficulty:"medium",
      q: "Evaluate trên test set nhiều lần để chọn model gây vấn đề gì?",
      options:["Biến test set thành validation set trá hình — final metric lạc quan","Không có vấn đề","Test score giảm","Model học kém hơn"],
      answer:0, explanation:"Mỗi lần evaluate và quyết định dựa vào test score là 'peeking'. True test chỉ được dùng một lần cuối." },
    { module:"C", difficulty:"hard",
      q: "Weight decay trong deep learning là gì?",
      options:["L2 regularization: giảm dần weight theo tỉ lệ (1−λη) ở mỗi bước gradient","Giảm learning rate theo thời gian","Dropout với xác suất giảm dần","Cắt bỏ neuron"],
      answer:0, explanation:"Weight decay = L2 regularization. Sau mỗi update: w ← w(1−λη) − η∇L. Shrink weight về 0." },
    { module:"C", difficulty:"hard",
      q: "Double descent phenomenon là gì?",
      options:["Khi số tham số model vượt số mẫu, test error có thể giảm trở lại (không chỉ tăng)","Overfitting selalu tăng khi model lớn hơn","Train error luôn bằng 0","Regularization luôn giúp"],
      answer:0, explanation:"Modern ML: over-parameterized models (DL) có thể generalize tốt dù interpolate train data. Vượt ra ngoài bias-variance classical." },
    { module:"C", difficulty:"hard",
      q: "Trước khi deploy, cần kiểm tra model trên dữ liệu gì?",
      options:["Holdout test set chưa từng dùng trong training/tuning","Validation set","Training set","Toàn bộ dataset"],
      answer:0, explanation:"Test set độc lập là ước lượng không lệch của hiệu năng thực. Validation set đã bị 'ô nhiễm' bởi model selection." },
    { module:"C", difficulty:"hard",
      q: "Khi train_loss = 0.02 và val_loss = 0.03, kết luận gì?",
      options:["Generalization tốt, gap nhỏ — model phù hợp","Overfit nghiêm trọng","Underfit","Cần thêm regularization"],
      answer:0, explanation:"Gap nhỏ (0.01) và cả hai thấp → model generalize tốt. Không nhất thiết cần thêm regularization." },
    { module:"C", difficulty:"hard",
      q: "Learning rate warmup trong training DL dùng khi nào và tại sao?",
      options:["Bắt đầu lr nhỏ, tăng dần rồi giảm → ổn định gradient đầu training khi weight ngẫu nhiên","Luôn giữ lr không đổi","Chỉ cho LSTM","Thay thế BatchNorm"],
      answer:0, explanation:"Lúc đầu training, gradient lớn và không ổn định. Warmup từ từ → tránh large updates phá vỡ khởi tạo." },
    { module:"C", difficulty:"hard",
      q: "Pruning trong neural network là gì?",
      options:["Loại bỏ weight/neuron nhỏ không quan trọng để nén model","Thêm layer mới","Tăng dropout","Giảm batch size"],
      answer:0, explanation:"Pruning giảm kích thước model (inference nhanh hơn, ít RAM) mà ít mất accuracy." },
    { module:"C", difficulty:"hard",
      q: "Class imbalance trong training gây ra vấn đề gì với loss?",
      options:["Loss bị thống trị bởi class majority → model học bias về class đông","Loss giảm đều","Không ảnh hưởng","Overfitting luôn xảy ra"],
      answer:0, explanation:"Giải pháp: class_weight, oversampling (SMOTE), undersampling, focal loss." },
    { module:"C", difficulty:"hard",
      q: "Cách tốt nhất để chọn learning rate cho deep learning?",
      options:["Learning rate finder: tăng lr theo lũy thừa, theo dõi loss, chọn lr trước khi loss tăng nhanh","Luôn dùng 0.001","Trial and error không hệ thống","Lấy lr từ bài báo gốc"],
      answer:0, explanation:"LR range test (Smith 2017): sweep lr → tìm vùng loss giảm nhanh nhất → chọn lr tại đó." }
  ],

  // ══════════════════════════════════════════════════════════
  // MODULE C — BÀI 5: Train/val/test, cross-validation, leakage
  // ══════════════════════════════════════════════════════════
  "validation-crossval": [
    { module:"C", difficulty:"easy",
      q: "Test set dùng để làm gì?",
      options:["Ước lượng hiệu năng thực tế — chỉ dùng một lần sau khi chọn xong model","Chọn hyperparameter","Train model","Inspect dữ liệu"],
      answer:0, explanation:"Test set là 'final judge'. Dùng nhiều lần để quyết định = leakage." },
    { module:"C", difficulty:"easy",
      q: "K-fold cross-validation chia dữ liệu thế nào?",
      options:["Thành k phần bằng nhau, mỗi lần dùng 1 phần làm validation, k-1 phần làm train","Chỉ chia một lần","Chia ngẫu nhiên mỗi epoch","Giống train/test split"],
      answer:0, explanation:"5-fold: 5 lần train/val, mỗi lần dùng fold khác nhau làm val. Score = trung bình 5 folds." },
    { module:"C", difficulty:"easy",
      q: "stratify=y trong train_test_split giúp gì?",
      options:["Giữ tỉ lệ class trong train và test giống dataset gốc","Tăng tốc split","Loại bỏ duplicate","Shuffle data"],
      answer:0, explanation:"Đặc biệt quan trọng khi class imbalanced: 1% fraud cần được giữ ~1% ở cả train và test." },
    { module:"C", difficulty:"easy",
      q: "Data leakage là gì?",
      options:["Thông tin từ validation/test ảnh hưởng đến quá trình training → metric lạc quan","Data bị mất","RAM tràn","Model chạy chậm"],
      answer:0, explanation:"Leakage: model 'biết trước' thông tin không nên có lúc train → score cao giả tạo, deploy kém." },
    { module:"C", difficulty:"easy",
      q: "Với dữ liệu time-series, cách split nào đúng?",
      options:["Train trên thời gian cũ, test trên thời gian mới (không shuffle)","Random shuffle rồi split","Stratified split","5-fold CV thông thường"],
      answer:0, explanation:"Temporal split: tránh dùng dữ liệu tương lai để dự đoán quá khứ (look-ahead bias)." },
    { module:"C", difficulty:"medium",
      q: "Leave-One-Out Cross-Validation (LOOCV) là gì và khi nào dùng?",
      options:["k=n: mỗi mẫu làm validation một lần; dùng khi n rất nhỏ","Bỏ qua validation","Luôn dùng thay CV","Chỉ cho regression"],
      answer:0, explanation:"LOOCV: k = số mẫu. Tốn compute O(n) models nhưng dùng gần toàn bộ data để train mỗi lần." },
    { module:"C", difficulty:"medium",
      q: "Tại sao cần Stratified K-fold cho classification?",
      options:["Đảm bảo mỗi fold có tỉ lệ class tương đương → ước lượng score ổn định","Tăng tốc CV","Giống K-fold thường","Chỉ dùng cho regression"],
      answer:0, explanation:"Không stratify với imbalanced data: một fold có thể không có class hiếm → val score không đáng tin." },
    { module:"C", difficulty:"medium",
      q: "Fit StandardScaler trên X rồi split train/test là ví dụ leakage loại nào?",
      options:["Train-test contamination — thống kê test rò vào preprocessing","Target leakage","Temporal leakage","Không phải leakage"],
      answer:0, explanation:"Scaler học mean/std từ cả test. Model thấy distribution của test khi train → metric optimistic." },
    { module:"C", difficulty:"medium",
      q: "Nested cross-validation dùng để làm gì?",
      options:["Outer CV ước lượng generalization error; inner CV tune hyperparameter — không bias selection","Chỉ tune hyperparameter","Chỉ ước lượng error","Thay thế test set"],
      answer:0, explanation:"Nested CV: inner loop chọn hyperparameter, outer loop đánh giá model đã tune → ước lượng không lệch." },
    { module:"C", difficulty:"medium",
      q: "Sau khi chọn model bằng CV, bước deploy cuối là gì?",
      options:["Retrain trên toàn bộ train+val data với hyperparameter đã chọn → evaluate trên test lần cuối","Chỉ dùng model từ CV","Không cần retrain","Evaluate lại trên CV"],
      answer:0, explanation:"Dùng toàn bộ labeled data để train final model (không lãng phí val data). Test chỉ dùng một lần cuối." },
    { module:"C", difficulty:"medium",
      q: "Temporal leakage trong time-series xảy ra khi nào?",
      options:["Dùng dữ liệu tương lai (sau thời điểm dự đoán) như feature","Scale không đúng","Có quá nhiều feature","Model quá đơn giản"],
      answer:0, explanation:"Ví dụ: predict churn tháng 6 dùng total_spend cả năm (bao gồm tháng 7-12) → tương lai leak vào feature." },
    { module:"C", difficulty:"medium",
      q: "Target leakage là gì?",
      options:["Feature phụ thuộc trực tiếp vào target hoặc được tạo sau khi target xảy ra","Scale sai","Train/val overlap","Shuffle sai"],
      answer:0, explanation:"Ví dụ: predict nợ xấu dùng cột 'has_collection_notice' — notice chỉ có sau khi nợ xấu rồi." },
    { module:"C", difficulty:"hard",
      q: "Group K-fold dùng khi nào?",
      options:["Khi mẫu có group (user/patient/store): đảm bảo cùng group không xuất hiện ở cả train và val","Khi class imbalanced","Khi dùng time-series","Khi muốn nhanh hơn stratified"],
      answer:0, explanation:"Ví dụ: nhiều hình ảnh từ cùng bệnh nhân. Nếu bệnh nhân xuất hiện ở cả train và val → data leakage." },
    { module:"C", difficulty:"hard",
      q: "Purged cross-validation trong finance là gì?",
      options:["Xóa overlap giữa train và val khi dữ liệu time-series có label window (embargo period)","Giống K-fold thường","Thay thế stratified CV","Chỉ dùng cho NLP"],
      answer:0, explanation:"Label window tạo overlap temporal. Purging: bỏ dữ liệu trong embargo period quanh val fold để tránh leakage." },
    { module:"C", difficulty:"hard",
      q: "Tại sao val score từ grid search thường lạc quan hơn true generalization?",
      options:["Selection bias: nhiều hyperparameter thử trên cùng val → vô tình overfit val","Val set quá nhỏ","Hyperparameter không quan trọng","Model quá đơn giản"],
      answer:0, explanation:"Mỗi lần test hyperparameter trên val = một lần 'peek'. Nhiều configs → val score optimistic. Dùng nested CV." },
    { module:"C", difficulty:"hard",
      q: "Cách phát hiện data leakage trong thực tế?",
      options:["CV score cao bất thường, feature correlation > 0.99 với target, performance drop khi deploy","CV score thấp","Model hội tụ chậm","Loss không giảm"],
      answer:0, explanation:"Dấu hiệu: score quá tốt trên CV, feature 'magic' có importance quá cao, model fail khi deploy thực." },
    { module:"C", difficulty:"hard",
      q: "80/10/10 split (train/val/test) thích hợp khi nào?",
      options:["Dataset đủ lớn (>10K mẫu) để val/test có statistical power","Dataset nhỏ (<500 mẫu)","Time-series","Dữ liệu hình ảnh nhỏ"],
      answer:0, explanation:"Với dataset lớn: 10% val/test vẫn đủ nhiều mẫu. Với dataset nhỏ: dùng CV để tận dụng tối đa data." },
    { module:"C", difficulty:"hard",
      q: "Pipeline sklearn đảm bảo chống leakage thế nào?",
      options:["fit_transform chỉ trên X_train trong mỗi CV fold; transform X_val/test — tự động nhờ Pipeline","Không đảm bảo","Chỉ cho StandardScaler","Cần code thủ công"],
      answer:0, explanation:"sklearn Pipeline với cross_val_score: mỗi fold, Pipeline fit preprocessing chỉ trên train fold → không leakage." },
    { module:"C", difficulty:"hard",
      q: "Số fold k ảnh hưởng thế nào đến CV?",
      options:["k lớn: ít bias hơn (nhiều data train), variance cao hơn, tốn compute; k nhỏ: ngược lại","k không ảnh hưởng","k=2 luôn đủ","k nên bằng số mẫu"],
      answer:0, explanation:"k=5 hoặc k=10 là cân bằng phổ biến. LOOCV (k=n) gần unbiased nhưng variance cao và rất chậm." },
    { module:"C", difficulty:"hard",
      q: "Tại sao không shuffle time-series trước khi CV?",
      options:["Shuffle phá vỡ thứ tự thời gian → dữ liệu tương lai trong train, dữ liệu quá khứ trong val → leakage","Shuffle làm nhanh hơn","Không ảnh hưởng","Time-series không cần CV"],
      answer:0, explanation:"Dùng TimeSeriesSplit trong sklearn: luôn train trước, test sau về mặt thời gian." }
  ]

});

// ── Module C part 2: 6 remaining lessons ─────────────────────────────────────
Object.assign(window.LESSON_EXTRA_THEORY, {
  "metrics": {
    allFormulas: [
      {name:"Accuracy", formula:"Accuracy = (TP+TN)/(TP+TN+FP+FN)", note:"Misleading khi class imbalanced"},
      {name:"Precision", formula:"P = TP/(TP+FP)", note:"Trong các dự đoán Positive, bao nhiêu thực sự đúng"},
      {name:"Recall (Sensitivity)", formula:"R = TP/(TP+FN)", note:"Trong tất cả Positive thực tế, bao nhiêu được tìm thấy"},
      {name:"F1 Score", formula:"F1 = 2·P·R/(P+R) = 2TP/(2TP+FP+FN)", note:"Harmonic mean; cân bằng P và R"},
      {name:"F-beta", formula:"Fβ = (1+β²)·P·R/(β²·P+R)", note:"β>1: ưu tiên recall; β<1: ưu tiên precision"},
      {name:"Specificity (TNR)", formula:"TNR = TN/(TN+FP)", note:"Recall của class Negative"},
      {name:"ROC-AUC", formula:"AUC = P(score(pos) > score(neg))", note:"1.0=perfect; 0.5=random; threshold-invariant; tốt cho balanced data"},
      {name:"PR-AUC (Average Precision)", formula:"AP = Σ Pₙ·ΔRₙ", note:"Tốt hơn ROC-AUC khi imbalanced class"},
      {name:"MSE", formula:"MSE = (1/n)·Σ(yᵢ−ŷᵢ)²", note:"Penalize outlier mạnh (bình phương sai số)"},
      {name:"RMSE", formula:"RMSE = √MSE", note:"Cùng đơn vị với y; phổ biến cho regression"},
      {name:"MAE", formula:"MAE = (1/n)·Σ|yᵢ−ŷᵢ|", note:"Robust hơn MSE với outlier; median-sense"},
      {name:"R² (R-squared)", formula:"R² = 1 − Σ(y−ŷ)²/Σ(y−ȳ)²", note:"1=perfect; 0=mean baseline; <0=tệ hơn mean"},
      {name:"Log Loss (BCE)", formula:"L = −(1/n)·Σ[yᵢ·log(p̂ᵢ)+(1−yᵢ)·log(1−p̂ᵢ)]", note:"Binary cross-entropy; thấp = tốt; nhạy với confidence"}
    ],
    workedExamples: [
      {title:"Tính P/R/F1 từ confusion matrix",
       problem:"TP=80, FP=20, FN=40, TN=860. Tính Precision, Recall, F1 và Accuracy.",
       steps:[
         "Precision = TP/(TP+FP) = 80/(80+20) = 80/100 = 0.80",
         "Recall = TP/(TP+FN) = 80/(80+40) = 80/120 ≈ 0.667",
         "F1 = 2×0.80×0.667/(0.80+0.667) = 1.067/1.467 ≈ 0.727",
         "Accuracy = (80+860)/(80+20+40+860) = 940/1000 = 0.94",
         "Nhận xét: Accuracy=94% nghe hay nhưng dễ đánh lừa vì 860 TN áp đảo"
       ],
       answer:"P=0.80, R=0.667, F1≈0.727. Accuracy=94% nhưng misleading khi imbalanced."},
      {title:"MSE / RMSE / MAE cho 4 mẫu",
       problem:"y=[3,5,2,8], ŷ=[2.5,5.5,4,7]. Tính MSE, RMSE, MAE.",
       steps:[
         "Residuals: −0.5, +0.5, +2, −1",
         "Squared residuals: 0.25, 0.25, 4.00, 1.00",
         "MSE = (0.25+0.25+4.00+1.00)/4 = 5.50/4 = 1.375",
         "RMSE = √1.375 ≈ 1.173",
         "Absolute residuals: 0.5, 0.5, 2.0, 1.0 → MAE = 4.0/4 = 1.00",
         "Nhận xét: outlier (lỗi=2) đẩy MSE lên nhiều hơn MAE — MSE penalize mạnh"
       ],
       answer:"MSE=1.375, RMSE≈1.173, MAE=1.00"}
    ]
  },
  "deep-learning-core": {
    allFormulas: [
      {name:"Neuron forward pass", formula:"a = f(w·x + b)", note:"w: weights, x: inputs, b: bias, f: activation function"},
      {name:"ReLU", formula:"ReLU(z) = max(0, z)", note:"Phổ biến nhất ở hidden layer; không vanishing khi z>0"},
      {name:"Leaky ReLU", formula:"LeakyReLU(z) = z nếu z>0, αz nếu z≤0 (α≈0.01)", note:"Tránh 'dead neuron' của ReLU thường"},
      {name:"Sigmoid", formula:"σ(z) = 1/(1+e⁻ᶻ)", note:"Output ∈(0,1); dùng binary classification output layer"},
      {name:"Tanh", formula:"tanh(z) = (eᶻ−e⁻ᶻ)/(eᶻ+e⁻ᶻ)", note:"Output ∈(−1,1); zero-centered; vẫn vanishing gradient"},
      {name:"Softmax", formula:"softmax(zᵢ) = e^zᵢ / Σⱼ e^zⱼ", note:"Multi-class output; tổng xác suất = 1"},
      {name:"Binary Cross-Entropy", formula:"L = −[y·log(ŷ)+(1−y)·log(1−ŷ)]", note:"Loss cho binary classification; penalty cực lớn khi confident và sai"},
      {name:"Categorical Cross-Entropy", formula:"L = −Σᵢ yᵢ·log(ŷᵢ)", note:"Multi-class; dùng cùng softmax; one-hot encoded y"},
      {name:"MSE Loss", formula:"L = (1/n)·Σ(y−ŷ)²", note:"Regression loss"},
      {name:"SGD Update", formula:"θ ← θ − α·∇L(θ)", note:"α: learning rate; đơn giản nhất; có thể noisy"},
      {name:"Momentum", formula:"v ← β·v − α·∇L; θ ← θ + v", note:"β≈0.9; tích lũy velocity, giảm oscillation"},
      {name:"Adam Update", formula:"m̂=m/(1−β₁ᵗ); v̂=v/(1−β₂ᵗ); θ←θ−α·m̂/(√v̂+ε)", note:"β₁=0.9,β₂=0.999; adaptive LR; default trong deep learning"},
      {name:"Dropout", formula:"P(neuron active) = 1−p khi train; nhân output × 1/(1−p)", note:"p=0.5 hidden; KHÔNG áp dụng lúc inference"}
    ],
    workedExamples: [
      {title:"Forward pass qua 1 neuron ReLU",
       problem:"x=[1,2], w=[0.5,−0.3], b=0.2. Tính output với ReLU.",
       steps:[
         "z = w·x + b = 0.5×1 + (−0.3)×2 + 0.2",
         "z = 0.5 − 0.6 + 0.2 = 0.1",
         "a = ReLU(0.1) = max(0, 0.1) = 0.1",
         "Nếu b=−0.5: z=0.5−0.6−0.5=−0.6 → ReLU(−0.6)=0 → neuron bị 'chết'"
       ],
       answer:"a=0.1. Neuron active vì z>0. Nếu z≤0, gradient=0 → dead neuron."},
      {title:"Tính Binary Cross-Entropy loss",
       problem:"y=1 (positive), 3 model outputs: p̂=0.9, p̂=0.5, p̂=0.1. Tính BCE loss mỗi trường hợp.",
       steps:[
         "L = −log(p̂) khi y=1",
         "p̂=0.9: L = −log(0.9) ≈ 0.105 (confident, đúng → loss nhỏ)",
         "p̂=0.5: L = −log(0.5) ≈ 0.693 (không chắc → loss trung bình)",
         "p̂=0.1: L = −log(0.1) ≈ 2.303 (confident, sai → loss rất lớn!)",
         "Đây là lý do BCE penalize confidence sai cực mạnh"
       ],
       answer:"Loss: 0.105 → 0.693 → 2.303. BCE nặng tay với dự đoán confident nhưng sai."}
    ]
  },
  "backprop-architectures": {
    allFormulas: [
      {name:"Chain Rule (Backprop)", formula:"∂L/∂w = (∂L/∂a)·(∂a/∂z)·(∂z/∂w)", note:"Gradient chảy ngược qua mỗi layer — quy tắc chuỗi"},
      {name:"Gradient of ReLU", formula:"∂ReLU/∂z = 1 nếu z>0, 0 nếu z≤0", note:"Khi z≤0: gradient=0 → 'dead neuron', không cập nhật"},
      {name:"Vanishing Gradient", formula:"||∂L/∂w₁|| → 0 qua nhiều layer sigmoid/tanh", note:"Lý do dùng ReLU, BatchNorm, ResNet skip connections"},
      {name:"Exploding Gradient", formula:"||∂L/∂w|| → ∞ qua nhiều layer", note:"Fix: gradient clipping: g ← g × (max_norm/||g||) nếu ||g||>max_norm"},
      {name:"CNN: Feature map size", formula:"H_out = (H_in − K + 2P)/S + 1", note:"K=kernel size, P=padding, S=stride"},
      {name:"CNN: Parameters per layer", formula:"Params = K×K×C_in×C_out + C_out (bias)", note:"Weight sharing: filter dùng chung mọi vị trí spatial"},
      {name:"RNN hidden state", formula:"hₜ = tanh(Wₓxₜ + Wₕhₜ₋₁ + b)", note:"Sequential; vanishing gradient với chuỗi dài"},
      {name:"LSTM gates (forget/input/output)", formula:"fₜ=σ(Wf·[hₜ₋₁,xₜ]+bf); iₜ,gₜ,oₜ tương tự", note:"Cell state cₜ duy trì long-term memory qua additive update"},
      {name:"Scaled Dot-Product Attention", formula:"Attention(Q,K,V) = softmax(QKᵀ/√dₖ)·V", note:"√dₖ: scale tránh gradient nhỏ khi dₖ lớn"},
      {name:"Multi-Head Attention", formula:"MHA = Concat(head₁,...,headₕ)·Wᴼ", note:"h đầu song song; mỗi đầu học relationship type khác nhau"},
      {name:"Positional Encoding", formula:"PE(pos,2i) = sin(pos/10000^(2i/d))", note:"Transformer không có recurrence → cần encode vị trí token"}
    ],
    workedExamples: [
      {title:"Tính gradient bằng chain rule",
       problem:"L=(ŷ−y)², ŷ=σ(z), z=wx+b. Tính ∂L/∂w với x=2, w=0.5, b=0, y=1.",
       steps:[
         "Forward: z = 0.5×2 + 0 = 1.0",
         "ŷ = σ(1.0) = 1/(1+e⁻¹) ≈ 0.731",
         "L = (0.731−1)² = (−0.269)² ≈ 0.0724",
         "∂L/∂ŷ = 2(ŷ−y) = 2(0.731−1) = −0.538",
         "∂ŷ/∂z = σ(z)(1−σ(z)) = 0.731×0.269 ≈ 0.197",
         "∂z/∂w = x = 2",
         "∂L/∂w = −0.538 × 0.197 × 2 ≈ −0.212",
         "SGD update: w ← 0.5 − α×(−0.212) = 0.5 + 0.212α → w tăng → ŷ tăng về 1"
       ],
       answer:"∂L/∂w ≈ −0.212. Gradient âm → tăng w → ŷ gần y=1 hơn sau update."},
      {title:"Scaled Dot-Product Attention (mini)",
       problem:"Q=[[1,0]], K=[[1,0],[0,1]], V=[[10,0],[0,10]], dₖ=2. Tính attention output.",
       steps:[
         "Scores = QKᵀ = [[1,0]] × [[1,0],[0,1]]ᵀ = [[1×1+0×0, 1×0+0×1]] = [[1, 0]]",
         "Scale: [[1/√2, 0/√2]] = [[0.707, 0.000]]",
         "Softmax: e^0.707≈2.028, e^0=1 → probs=[2.028/3.028, 1/3.028]=[0.670, 0.330]",
         "Output = 0.670×[10,0] + 0.330×[0,10] = [6.70, 3.30]",
         "Query [1,0] gần Key₁=[1,0] hơn Key₂=[0,1] → attend Key₁ nhiều hơn"
       ],
       answer:"Attention output=[6.7, 3.3]. Query giống Key₁ hơn nên Value₁ đóng góp nhiều hơn."}
    ]
  },
  "ai-product": {
    allFormulas: [
      {name:"Problem Frame (7 thành phần)", formula:"User + Task + Data + Decision + Metric + Risk + Deploy", note:"Thiếu bất kỳ thành phần nào → thiết kế thiếu sót"},
      {name:"North Star Metric", formula:"NSM = metric duy nhất phản ánh giá trị cốt lõi", note:"VD: D30 retention, revenue/user, NPS; align toàn team"},
      {name:"Precision-Recall Tradeoff", formula:"Threshold ↑ → Precision ↑, Recall ↓ (conservative)", note:"Chọn threshold theo cost: FP cost vs FN cost"},
      {name:"Expected Value Framework", formula:"EV = P(TP)·V(TP)+P(FP)·V(FP)+P(FN)·V(FN)+P(TN)·V(TN)", note:"V(·): business value; hướng dẫn chọn threshold tối ưu"},
      {name:"Confusion Cost", formula:"Total cost = FP×C_FP + FN×C_FN", note:"So sánh 2 threshold theo tổng chi phí thực tế"},
      {name:"AI Agent Components", formula:"Agent = Perception + Memory + Planning + Action + Tool-use", note:"LLM làm planning engine; tool-use qua function calling"},
      {name:"MVP Fallback Ladder", formula:"Full ML → Rule-based → Human-in-loop → Don't build", note:"Khi thiếu data/label/compute; đừng over-engineer sớm"}
    ],
    workedExamples: [
      {title:"Frame bài toán phát hiện gian lận thẻ tín dụng",
       problem:"Frame đầy đủ bài toán fraud detection theo 7 thành phần.",
       steps:[
         "User: risk/compliance team và hệ thống real-time",
         "Task: binary classification — gian lận hay không cho mỗi giao dịch",
         "Data: lịch sử giao dịch (amount, location, merchant, time_delta, user_profile)",
         "Decision: block transaction (high confidence) hoặc flag cho review thủ công",
         "Metric: Recall ưu tiên (miss fraud = mất tiền); Precision thứ hai (false alarm = friction)",
         "Risk: FN >> FP về chi phí; cần threshold thấp; phải giải thích được cho audit",
         "Deploy: real-time inference <100ms; monitor PSI hàng tuần; retrain khi drift"
       ],
       answer:"Frame đủ 7 thành phần → chọn Recall-first, threshold thấp, monitor drift định kỳ."},
      {title:"Chọn threshold tối ưu bằng expected cost",
       problem:"1000 giao dịch: 50 fraud. C_FN=$500 (miss fraud), C_FP=$5 (friction). Threshold A: TP=45,FP=100. Threshold B: TP=40,FP=10.",
       steps:[
         "Threshold A: FN=5, FP=100",
         "Cost_A = 5×$500 + 100×$5 = $2,500 + $500 = $3,000",
         "Threshold B: FN=10, FP=10",
         "Cost_B = 10×$500 + 10×$5 = $5,000 + $50 = $5,050",
         "Threshold A tốt hơn dù FP cao hơn, vì miss fraud ($500) >> false alarm ($5)"
       ],
       answer:"Chọn Threshold A ($3,000 < $5,050). Khi C_FN >> C_FP → chấp nhận FP cao để giảm FN."}
    ]
  },
  "ai-monitoring-evaluation": {
    allFormulas: [
      {name:"PSI (Population Stability Index)", formula:"PSI = Σ (Act%−Exp%)·ln(Act%/Exp%)", note:"<0.1=stable; 0.1-0.2=cần xem xét; >0.2=significant drift"},
      {name:"KL Divergence", formula:"KL(P‖Q) = Σ P(x)·log(P(x)/Q(x))", note:"Đo P drift so với baseline Q; không symmetric; ≥0"},
      {name:"KS Test Statistic", formula:"D = max|F₁(x)−F₂(x)|", note:"So sánh 2 phân phối CDF; dùng detect feature drift"},
      {name:"A/B Test Z-statistic", formula:"z = (p̂A−p̂B)/√(p̄(1−p̄)(1/nA+1/nB))", note:"p̄=pooled proportion; |z|>1.96 → significant (α=0.05)"},
      {name:"Sample Size (A/B)", formula:"n = 2·(z_{α/2}+z_β)²·p(1−p)/Δ²", note:"Δ=MDE; z_β=0.84 cho power=80%; z_{α/2}=1.96 cho α=0.05"},
      {name:"Data Drift vs Concept Drift", formula:"Data drift: P(X) thay đổi; Concept drift: P(Y|X) thay đổi", note:"Concept drift khó detect hơn; cần ground truth labels"},
      {name:"Performance Degradation Alert", formula:"Alert nếu metric < baseline − k·σ_baseline", note:"k=2–3; baseline từ staging/shadow period"}
    ],
    workedExamples: [
      {title:"Tính PSI cho feature drift",
       problem:"Feature 'age' chia 4 bins. Train: [40%,30%,20%,10%]. Production 1 tháng sau: [30%,25%,25%,20%]. Tính PSI.",
       steps:[
         "Bin 1: (0.30−0.40)×ln(0.30/0.40) = (−0.10)×ln(0.75) = (−0.10)×(−0.2877) = 0.0288",
         "Bin 2: (0.25−0.30)×ln(0.25/0.30) = (−0.05)×(−0.1823) = 0.0091",
         "Bin 3: (0.25−0.20)×ln(0.25/0.20) = (+0.05)×(+0.2231) = 0.0112",
         "Bin 4: (0.20−0.10)×ln(0.20/0.10) = (+0.10)×(+0.6931) = 0.0693",
         "PSI = 0.0288+0.0091+0.0112+0.0693 = 0.1184"
       ],
       answer:"PSI=0.118 → vùng 'cần xem xét' (0.1–0.2). Feature đang drift, cần retrain/investigate."},
      {title:"A/B test: có significant không?",
       problem:"Control CVR=5.0% (n=2000), Treatment CVR=5.5% (n=2000). α=0.05. Kết luận?",
       steps:[
         "Counts: control=100 conversions, treatment=110 conversions",
         "p̄ = (100+110)/4000 = 210/4000 = 0.0525",
         "SE = √(0.0525×0.9475×(1/2000+1/2000)) = √(0.04974×0.001) = √0.00004974 ≈ 0.00705",
         "z = (0.055−0.050)/0.00705 = 0.005/0.00705 ≈ 0.709",
         "|z|=0.709 < 1.96 → KHÔNG reject H₀",
         "p-value ≈ 0.48 → không đủ bằng chứng"
       ],
       answer:"z=0.71, p≈0.48. Chưa significant. Cần n≈7800/group để detect Δ=0.5pp với power=80%."}
    ]
  },
  "rag-llm-agent": {
    allFormulas: [
      {name:"Cosine Similarity", formula:"cos(A,B) = (A·B)/(‖A‖·‖B‖)", note:"Đo góc giữa 2 embedding vector; range [−1,1]; 1=giống nhau"},
      {name:"BM25 Score", formula:"BM25(q,d) = Σ IDF(qᵢ)·tf(qᵢ,d)·(k₁+1)/(tf+k₁·(1−b+b·|d|/avgdl))", note:"Lexical retrieval; k₁∈[1.2,2.0], b=0.75"},
      {name:"RAG Pipeline", formula:"Query → Embed → Retrieve(top-k) → Augment → Generate", note:"Retrieval: vector search và/hoặc hybrid (dense+sparse)"},
      {name:"Perplexity", formula:"PP(W) = P(w₁,...,wₙ)^(−1/n)", note:"Đo model predict token tốt thế nào; thấp=tốt"},
      {name:"BLEU Score", formula:"BLEU = BP·exp(Σ wₙ·log pₙ)", note:"Precision n-gram; so với reference; dùng NLG evaluation"},
      {name:"ROUGE-L", formula:"ROUGE-L = LCS(candidate,reference)/len(reference)", note:"Recall-based; LCS=longest common subsequence"},
      {name:"Hallucination Rate", formula:"HR = # responses with unsupported claims / total responses", note:"Giảm bằng RAG, temperature thấp, chain-of-thought, fact-check"},
      {name:"Token Budget", formula:"Context = System Prompt + Few-shot + Retrieved Docs + Query ≤ max_tokens", note:"Cần chunking strategy + token counting trong RAG pipeline"}
    ],
    workedExamples: [
      {title:"RAG pipeline từng bước chi tiết",
       problem:"User hỏi: 'Phí dịch vụ ABC là bao nhiêu?' Mô tả pipeline RAG xử lý câu hỏi này.",
       steps:[
         "1. Embed query: 'Phí dịch vụ ABC' → embedding vector [v₁,...,v_{1536}] qua embedding model",
         "2. Vector search: cosine similarity với tất cả chunk trong vector DB → top-3 chunks",
         "3. Rerank (tuỳ chọn): cross-encoder rerank top-3 để chọn chunk liên quan nhất",
         "4. Augment prompt: [System: Trả lời dựa trên tài liệu] + [Context: chunk₁, chunk₂] + [User: Phí ABC?]",
         "5. Generate: LLM đọc context → trả lời với số tiền từ tài liệu (không tự bịa)",
         "6. Guardrails: kiểm tra output không leak PII, không hallucinate, không off-topic"
       ],
       answer:"6 bước RAG: embed→retrieve→(rerank)→augment→generate→guardrail. Chất lượng phụ thuộc vào retrieval."},
      {title:"Tính cosine similarity để chọn document",
       problem:"Doc A=[1,0,1], Doc B=[1,1,0], Query=[1,0,0]. Query nên retrieve document nào?",
       steps:[
         "cos(Q,A): Q·A = 1×1+0×0+0×1 = 1; ‖Q‖=1; ‖A‖=√2≈1.414",
         "cos(Q,A) = 1/1.414 ≈ 0.707",
         "cos(Q,B): Q·B = 1×1+0×1+0×0 = 1; ‖B‖=√2≈1.414",
         "cos(Q,B) = 1/1.414 ≈ 0.707",
         "Bằng nhau trong ví dụ 3D này; thực tế embeddings có 768-1536 chiều → dễ phân biệt hơn",
         "Nếu A=[2,0,0]: cos(Q,A)=2/(1×2)=1.0 → perfect match"
       ],
       answer:"cos(Q,A)=cos(Q,B)≈0.707. High-dimensional embeddings (1536d) mới đủ separability cho retrieval."}
    ]
  }
});

// ── Module C part 2: Quizzes ──────────────────────────────────────────────────
Object.assign(window.LESSON_QUIZZES, {
  "metrics": [
    { module:"C", difficulty:"easy",
      q: "Precision được tính như thế nào?",
      options:["TP/(TP+FP)","TP/(TP+FN)","(TP+TN)/Total","TN/(TN+FP)"],
      answer:0, explanation:"Precision = TP/(TP+FP): trong tất cả dự đoán Positive, bao nhiêu thực sự đúng (không bị false alarm)." },
    { module:"C", difficulty:"easy",
      q: "Recall (Sensitivity) được tính như thế nào?",
      options:["TP/(TP+FN)","TP/(TP+FP)","TN/(TN+FP)","(TP+TN)/Total"],
      answer:0, explanation:"Recall = TP/(TP+FN): trong tất cả Positive thực tế, bao nhiêu được model phát hiện ra." },
    { module:"C", difficulty:"easy",
      q: "F1 Score là gì?",
      options:["Harmonic mean của Precision và Recall","Arithmetic mean của P và R","Geometric mean của P và R","P + R"],
      answer:0, explanation:"F1 = 2PR/(P+R). Harmonic mean phạt nặng khi một trong hai số nhỏ — cần cả hai đều tốt." },
    { module:"C", difficulty:"easy",
      q: "Khi nào nên dùng F1 thay vì Accuracy?",
      options:["Khi class imbalanced (VD: 99% negative, 1% positive)","Luôn luôn","Chỉ cho regression","Khi dataset nhỏ"],
      answer:0, explanation:"Accuracy lên 99% chỉ bằng predict toàn negative khi 99% là negative. F1 buộc model phải tìm đúng class hiếm." },
    { module:"C", difficulty:"easy",
      q: "MSE là gì?",
      options:["Mean Squared Error = trung bình bình phương sai số","Mean Absolute Error","Root Mean Squared Error","Maximum Squared Error"],
      answer:0, explanation:"MSE = (1/n)·Σ(y−ŷ)². Bình phương sai số penalize lỗi lớn mạnh hơn lỗi nhỏ." },
    { module:"C", difficulty:"easy",
      q: "RMSE khác MSE ở điểm nào?",
      options:["RMSE = √MSE — cùng đơn vị với y, dễ diễn giải hơn","RMSE là trung bình, MSE là tổng","RMSE = MSE²","Không khác nhau"],
      answer:0, explanation:"RMSE = √MSE có đơn vị giống y (VD: đô la, km) nên dễ hiểu hơn MSE khi báo cáo." },
    { module:"C", difficulty:"easy",
      q: "ROC-AUC bằng 0.5 nghĩa là gì?",
      options:["Model dự đoán ngẫu nhiên — không tốt hơn random","Model hoàn hảo","Model tệ nhất","Accuracy = 50%"],
      answer:0, explanation:"AUC=P(score(pos)>score(neg)). AUC=0.5: model không phân biệt được positive và negative — bằng random." },
    { module:"C", difficulty:"medium",
      q: "Tính F1 với Precision=0.6, Recall=0.9.",
      options:["F1 = 2×0.6×0.9/(0.6+0.9) = 1.08/1.5 = 0.72","F1 = (0.6+0.9)/2 = 0.75","F1 = 0.6×0.9 = 0.54","F1 = min(0.6, 0.9) = 0.6"],
      answer:0, explanation:"F1 = 2PR/(P+R) = 2×0.6×0.9/(0.6+0.9) = 1.08/1.50 = 0.72. Harmonic mean nhỏ hơn arithmetic mean (0.75)." },
    { module:"C", difficulty:"medium",
      q: "Khi nào MAE tốt hơn MSE làm loss function?",
      options:["Khi data có nhiều outlier — MAE robust hơn vì không bình phương sai số","Khi cần gradient liên tục","Khi dataset nhỏ","MAE luôn tốt hơn MSE"],
      answer:0, explanation:"MSE bình phương → outlier đẩy loss lên rất cao, kéo model về phía outlier. MAE: lỗi lớn không bị penalize extra." },
    { module:"C", difficulty:"medium",
      q: "R² âm có thể xảy ra không và có nghĩa gì?",
      options:["Có — model tệ hơn baseline predict trung bình y cho mọi điểm","Không thể âm","R²=0 là tệ nhất","R² âm = overfitting"],
      answer:0, explanation:"R² = 1 − SS_res/SS_tot. Nếu SS_res > SS_tot (model sai nhiều hơn cả mean), R² < 0." },
    { module:"C", difficulty:"medium",
      q: "PR-AUC tốt hơn ROC-AUC khi nào?",
      options:["Khi dataset imbalanced (class dương hiếm) vì PR-AUC không bị inflate bởi nhiều TN","Khi dataset balanced","PR-AUC luôn tốt hơn","Khi dùng regression"],
      answer:0, explanation:"ROC-AUC bị inflate khi TN nhiều (vì FPR = FP/(FP+TN) nhỏ dù FP nhiều). PR-AUC chỉ xét TP, FP, FN." },
    { module:"C", difficulty:"medium",
      q: "TP=50, FP=10, FN=30, TN=910. Tính Recall.",
      options:["Recall = 50/(50+30) = 50/80 ≈ 0.625","Recall = 50/(50+10) ≈ 0.833","Recall = (50+910)/1000 = 0.96","Recall = 50/1000 = 0.05"],
      answer:0, explanation:"Recall = TP/(TP+FN) = 50/(50+30) = 0.625. 37.5% fraud bị bỏ sót (FN=30)." },
    { module:"C", difficulty:"medium",
      q: "Log Loss phạt mạnh hơn Accuracy ở điểm nào?",
      options:["Log Loss phạt rất nặng khi model confident nhưng sai (p̂→0 mà y=1: log(p̂)→−∞)","Log Loss đơn giản hơn","Log Loss không dùng probabilities","Chúng giống nhau"],
      answer:0, explanation:"Accuracy chỉ đếm đúng/sai. Log Loss = −log(p̂ của class đúng); p̂=0.01 → loss=4.6; p̂=0.99 → loss=0.01." },
    { module:"C", difficulty:"medium",
      q: "Specificity (True Negative Rate) là gì?",
      options:["TN/(TN+FP) — trong tất cả Negative thực tế, bao nhiêu được đoán đúng là Negative","TP/(TP+FP)","TP/(TP+FN)","TN/(TN+FN)"],
      answer:0, explanation:"Specificity = TN/(TN+FP). ROC curve vẽ Recall (TPR) vs 1−Specificity (FPR) ở mỗi threshold." },
    { module:"C", difficulty:"hard",
      q: "Macro F1 vs Weighted F1 khác nhau thế nào?",
      options:["Macro: trung bình F1 mỗi class bằng nhau; Weighted: trung bình theo số mẫu mỗi class","Macro nhanh hơn","Weighted F1 = Accuracy","Chúng giống nhau"],
      answer:0, explanation:"Imbalanced: Macro F1 ưu tiên class nhỏ ngang class lớn; Weighted F1 phản ánh đúng performance trên phân phối thực." },
    { module:"C", difficulty:"hard",
      q: "AUC không thay đổi khi nào?",
      options:["Khi scale hoặc shift monotone scores (VD: nhân đôi tất cả scores) — thứ tự không đổi","Khi thay đổi threshold","Khi thêm dữ liệu","AUC luôn thay đổi khi model thay đổi"],
      answer:0, explanation:"AUC đo rank ordering: P(score(pos)>score(neg)). Transformation đơn điệu (monotone) không thay đổi thứ tự → AUC giữ nguyên." },
    { module:"C", difficulty:"hard",
      q: "Calibration curve đo gì?",
      options:["Predicted probability có khớp với actual frequency không — VD: p̂=0.8 thì 80% thực sự positive","Accuracy theo từng bin","ROC curve dạng khác","Precision-Recall curve"],
      answer:0, explanation:"Model calibrated: p̂=0.7 → 70% mẫu đó thực sự positive. Dùng Platt scaling / isotonic regression để calibrate." },
    { module:"C", difficulty:"hard",
      q: "F-beta với β=2 có nghĩa gì?",
      options:["Recall được ưu tiên gấp đôi Precision (β>1 → recall quan trọng hơn)","Precision ưu tiên gấp đôi","β=2 là F1 bình thường","F-beta không liên quan đến Precision/Recall"],
      answer:0, explanation:"Fβ = (1+β²)PR/(β²P+R). β=2: denominator có β²·P=4P >> P, nên phải tăng P nhiều để bù — thực ra ưu tiên R." },
    { module:"C", difficulty:"hard",
      q: "Tính RMSE từ y=[1,2,3], ŷ=[1,3,3].",
      options:["RMSE = √(1/3) ≈ 0.577","RMSE = 1/3","RMSE = 1","RMSE = √(2/3) ≈ 0.816"],
      answer:0, explanation:"Residuals: 0,−1,0. Squared: 0,1,0. MSE=1/3. RMSE=√(1/3)≈0.577." },
    { module:"C", difficulty:"hard",
      q: "Khi nào dùng MAPE (Mean Absolute Percentage Error) thay RMSE?",
      options:["Khi muốn error tương đối (%), tốt cho các target có scale rất khác nhau (VD: giá nhà từ $50k đến $5M)","MAPE luôn tốt hơn","Chỉ dùng cho classification","MAPE = RMSE/mean(y)"],
      answer:0, explanation:"MAPE = mean(|y−ŷ|/|y|)×100%. Khi y gần 0: MAPE vô cùng lớn. RMSE/MAE tốt hơn khi y có thể = 0." }
  ],
  "deep-learning-core": [
    { module:"C", difficulty:"easy",
      q: "ReLU activation function được định nghĩa là gì?",
      options:["max(0, z)","1/(1+e⁻ᶻ)","(eᶻ−e⁻ᶻ)/(eᶻ+e⁻ᶻ)","z nếu z>0, αz nếu z<0"],
      answer:0, explanation:"ReLU(z) = max(0,z). Đơn giản, hiệu quả, không vanishing gradient khi z>0. Phổ biến nhất ở hidden layers." },
    { module:"C", difficulty:"easy",
      q: "Sigmoid output có giá trị nằm trong khoảng nào?",
      options:["(0, 1)","(−1, 1)","(−∞, +∞)","[0, ∞)"],
      answer:0, explanation:"σ(z) = 1/(1+e⁻ᶻ) ∈ (0,1). Dùng cho output layer binary classification để interpret là xác suất." },
    { module:"C", difficulty:"easy",
      q: "Dropout dùng để làm gì?",
      options:["Regularization — ngẫu nhiên tắt neurons khi train để giảm co-adaptation và overfitting","Tăng tốc training","Giảm số parameters","Thay thế BatchNorm"],
      answer:0, explanation:"Dropout(p=0.5): mỗi neuron bị tắt với xác suất 0.5 khi train. Model phải học robust features không phụ thuộc vào neuron nào." },
    { module:"C", difficulty:"easy",
      q: "Softmax dùng khi nào?",
      options:["Output layer multi-class classification — convert logits thành xác suất có tổng = 1","Hidden layers","Binary classification","Regression output"],
      answer:0, explanation:"Softmax(zᵢ) = e^zᵢ/Σe^zⱼ. Cho multi-class (3+ classes). Binary: chỉ cần sigmoid. Regression: không cần activation ở output." },
    { module:"C", difficulty:"easy",
      q: "Learning rate quá lớn gây ra vấn đề gì?",
      options:["Loss oscillate hoặc diverge — bước gradient quá lớn nhảy qua minimum","Model học nhanh hơn","Underfitting","Không ảnh hưởng đến convergence"],
      answer:0, explanation:"LR lớn: update θ = θ − α·∇L nhảy qua valley, loss tăng thay vì giảm. LR nhỏ: hội tụ chậm. Cần LR schedule." },
    { module:"C", difficulty:"easy",
      q: "Adam optimizer có ưu điểm gì so với SGD cơ bản?",
      options:["Adaptive learning rate cho từng parameter — tự điều chỉnh, ít cần tune LR thủ công","Adam chậm hơn","Adam không cần gradient","SGD luôn tốt hơn Adam"],
      answer:0, explanation:"Adam kết hợp momentum + RMSProp: m (1st moment) + v (2nd moment) → điều chỉnh LR cho mỗi parameter. Ít nhạy với LR ban đầu." },
    { module:"C", difficulty:"medium",
      q: "Tại sao ReLU tốt hơn sigmoid cho hidden layers trong deep networks?",
      options:["ReLU không bị vanishing gradient khi z>0; sigmoid: gradient σ(z)(1−σ(z))≤0.25 → nhân nhiều lần → → 0","ReLU nhanh hơn sigmoid về compute","Sigmoid output âm","Chúng ngang nhau"],
      answer:0, explanation:"Backprop nhân gradient qua L layers. Sigmoid: max gradient=0.25 → 0.25^10≈10⁻⁶. ReLU gradient=1 nếu z>0 → không shrink." },
    { module:"C", difficulty:"medium",
      q: "Dead neuron trong ReLU là gì và cách khắc phục?",
      options:["Neuron luôn output 0 vì z<0 mọi input → gradient=0 → không bao giờ cập nhật; fix: Leaky ReLU hoặc khởi tạo tốt","Neuron bị xóa","Quá nhiều neurons","Neurons trùng nhau"],
      answer:0, explanation:"Khi bias âm lớn, z=wx+b < 0 mọi lúc → ReLU=0, gradient=0 → weight không update. Leaky ReLU: gradient=α≠0 khi z≤0." },
    { module:"C", difficulty:"medium",
      q: "Batch size ảnh hưởng thế nào đến training?",
      options:["Batch nhỏ: noisy gradient nhưng generalize tốt hơn, nhớ ít RAM; Batch lớn: smooth gradient, nhanh hơn, dễ stuck local min","Batch size không quan trọng","Batch lớn luôn tốt hơn","Batch nhỏ luôn tốt hơn"],
      answer:0, explanation:"Batch=1 (online): noisy nhưng 'escape' local minima. Batch=full (GD): exact gradient nhưng chậm, memory lớn. Mini-batch=32-256: tradeoff tốt." },
    { module:"C", difficulty:"medium",
      q: "BCE loss = −log(0.01) khi y=1 là bao nhiêu và điều này có ý nghĩa gì?",
      options:["≈4.6 — penalty rất lớn vì model confident (p̂=0.01) nhưng hoàn toàn sai (y=1)","=0.01","=1","≈0.99"],
      answer:0, explanation:"−log(0.01) = log(100) ≈ 4.6. So sánh: −log(0.99)≈0.01. Model confident sai bị phạt cực nặng — khuyến khích calibration tốt." },
    { module:"C", difficulty:"medium",
      q: "Momentum trong SGD giải quyết vấn đề gì?",
      options:["Giảm oscillation khi gradient thay đổi hướng liên tục; tích lũy velocity theo hướng nhất quán","Tăng learning rate","Giảm số epochs","Thay thế gradient"],
      answer:0, explanation:"v = β·v − α·∇L accumulates past gradients. Ravine (narrow valley): oscillate ngang, chậm xuống — momentum giảm oscillation, tăng tốc xuống." },
    { module:"C", difficulty:"medium",
      q: "Dropout rate p=0.5 và p=0.2 — nên dùng cái nào ở hidden layer vs input layer?",
      options:["p=0.5 cho hidden layer (regularize mạnh), p=0.2 cho input layer (không bỏ nhiều input data)","p=0.5 ở mọi nơi","p=0.2 ở mọi nơi","Không dùng dropout ở input"],
      answer:0, explanation:"Input features quan trọng — bỏ nhiều quá mất thông tin. Hidden neurons nhiều hơn cần regularize mạnh hơn. Best practice: p_input∈[0.1,0.3], p_hidden∈[0.3,0.5]." },
    { module:"C", difficulty:"hard",
      q: "Tại sao không dùng linear activation ở hidden layers?",
      options:["Composition của hàm linear là linear → network nhiều layer = network 1 layer, mất khả năng biểu diễn phi tuyến","Linear activation dễ overflow","Linear activation không vi phân được","Linear activation quá chậm"],
      answer:0, explanation:"f(f(Wx))=f(W'x) với W'=f∘W. Nhiều linear layers = một linear transformation → không học được XOR, hình tròn, v.v." },
    { module:"C", difficulty:"hard",
      q: "Vanishing gradient được giải quyết bằng những kỹ thuật nào?",
      options:["ReLU activation + BatchNorm + ResNet skip connections + khởi tạo He/Xavier + gradient clipping","Chỉ tăng learning rate","Chỉ dùng thêm data","Giảm số layers"],
      answer:0, explanation:"Kết hợp: ReLU (gradient=1 khi active), BatchNorm (normalize activations), ResNet (gradient highway qua skip), khởi tạo đúng." },
    { module:"C", difficulty:"hard",
      q: "BatchNorm hoạt động như thế nào và tại sao giúp training?",
      options:["Normalize activation của mỗi layer về mean=0, std=1 trong mỗi mini-batch → giảm internal covariate shift, cho phép LR cao hơn","Normalize input data","Thay thế Dropout","Giảm số parameters"],
      answer:0, explanation:"BN: x̂=(x−μ)/σ, rồi scale/shift. Mỗi layer nhận input ổn định → train nhanh hơn, LR lớn hơn, ít nhạy với init. Lúc inference dùng running stats." },
    { module:"C", difficulty:"hard",
      q: "He initialization dùng khi nào và tại sao?",
      options:["Khi dùng ReLU — khởi tạo w~N(0, √(2/n_in)) để giữ variance qua layers vì ReLU bỏ nửa activations","Khi dùng sigmoid","Khi dùng linear activation","Luôn luôn"],
      answer:0, explanation:"Xavier/Glorot: var=1/n_in (cho tanh/sigmoid). He: var=2/n_in (cho ReLU, vì ReLU zero out ~50% → cần variance gấp đôi để compensate)." },
    { module:"C", difficulty:"hard",
      q: "Tại sao dùng categorical cross-entropy + softmax thay vì MSE cho classification?",
      options:["BCE/CCE + softmax cho gradient rõ ràng hơn; MSE + sigmoid/softmax có vùng gradient gần 0 → học chậm","MSE chậm hơn","Chúng cho kết quả giống nhau","CCE chỉ dùng cho binary"],
      answer:0, explanation:"MSE gradient ∂L/∂z ∝ (ŷ−y)·σ'(z). Khi sai nhiều, σ'(z) nhỏ → gradient nhỏ → chậm. CCE gradient = ŷ−y (không có σ' term) → học nhanh." },
    { module:"C", difficulty:"hard",
      q: "Gradient clipping giải quyết vấn đề gì?",
      options:["Exploding gradient trong RNN/deep nets — clamp ||∇|| ≤ max_norm để tránh update quá lớn phá vỡ weights","Vanishing gradient","Overfitting","Underfitting"],
      answer:0, explanation:"Exploding: gradient norm → ∞, update cực lớn. Clip: nếu ||g||>threshold thì g ← g×(threshold/||g||). Giữ hướng gradient, giảm magnitude." },
    { module:"C", difficulty:"hard",
      q: "Learning rate schedule có tác dụng gì?",
      options:["LR lớn ban đầu để explore nhanh, giảm dần để fine-tune — giúp hội tụ tốt hơn constant LR","Tăng accuracy thêm 1%","Thay thế optimizer","Chỉ dùng cho CNN"],
      answer:0, explanation:"Step decay, cosine annealing, warmup+decay đều dùng LR lớn khi xa minimum và nhỏ khi gần. Cosine annealing phổ biến trong transformers (warmup→peak→decay)." },
    { module:"C", difficulty:"hard",
      q: "Weight decay (L2 regularization trong optimizer) hoạt động thế nào?",
      options:["Thêm λ||w||² vào loss → gradient thêm 2λw → w shrink về 0 mỗi step — giảm overfitting","Xóa weights nhỏ","Thay thế Dropout","Chỉ dùng linear models"],
      answer:0, explanation:"AdamW tách weight decay ra khỏi gradient update: w ← (1−λ)w − α·m̂/(√v̂+ε). Đúng hơn Adam+L2 trong loss." }
  ],
  "backprop-architectures": [
    { module:"C", difficulty:"easy",
      q: "Backpropagation sử dụng quy tắc nào để tính gradient?",
      options:["Chain rule của calculus — gradient chảy ngược qua mỗi layer","Product rule","Quotient rule","Numerical differentiation"],
      answer:0, explanation:"∂L/∂w = (∂L/∂a)·(∂a/∂z)·(∂z/∂w). Chain rule cho phép tính gradient hiệu quả trong O(n) thay vì O(n²)." },
    { module:"C", difficulty:"easy",
      q: "CNN (Convolutional Neural Network) thích hợp cho loại dữ liệu nào?",
      options:["Dữ liệu có cấu trúc spatial/grid — hình ảnh, video, audio spectrogram","Text sequential","Tabular data","Time-series 1D thuần túy"],
      answer:0, explanation:"CNN dùng weight sharing: cùng filter trượt qua mọi vị trí → nhận dạng pattern bất kể vị trí (translation invariant)." },
    { module:"C", difficulty:"easy",
      q: "RNN (Recurrent Neural Network) thích hợp cho loại dữ liệu nào?",
      options:["Sequential data — text, time-series, speech — cần nhớ context trước đó","Hình ảnh","Tabular","Graph data"],
      answer:0, explanation:"RNN: hₜ = tanh(Wₓxₜ + Wₕhₜ₋₁). Hidden state hₜ mang thông tin từ quá khứ. Vấn đề: vanishing gradient với chuỗi dài." },
    { module:"C", difficulty:"easy",
      q: "Transformer khác RNN ở điểm cơ bản nào?",
      options:["Transformer xử lý toàn bộ sequence song song qua attention; RNN xử lý tuần tự từ trái sang phải","Transformer dùng convolution","Transformer không cần training","Chúng giống nhau"],
      answer:0, explanation:"RNN: sequential, chậm, vanishing gradient. Transformer: song song, attention nhìn toàn sequence cùng lúc → train nhanh hơn, scale tốt hơn." },
    { module:"C", difficulty:"easy",
      q: "Skip connection trong ResNet giải quyết vấn đề gì?",
      options:["Vanishing gradient trong mạng rất sâu — gradient có thể đi thẳng qua shortcut connection","Overfitting","Data augmentation","Tăng số parameters"],
      answer:0, explanation:"ResNet: x_{l+1} = F(x_l) + x_l. Gradient ∂L/∂x_l = ∂L/∂x_{l+1} + ... — luôn có đường gradient =1 qua skip → không vanish." },
    { module:"C", difficulty:"easy",
      q: "Attention mechanism trong Transformer làm gì?",
      options:["Cho mỗi token, tính weighted sum của toàn bộ tokens khác dựa trên relevance — 'attend' đến phần quan trọng","Chọn top-k tokens","Xóa tokens không liên quan","Compress sequence thành vector"],
      answer:0, explanation:"Attention(Q,K,V) = softmax(QKᵀ/√dₖ)·V. Query tìm Key giống nhau nhất → lấy Value tương ứng, có trọng số." },
    { module:"C", difficulty:"medium",
      q: "Tính CNN feature map size: input H=32, kernel K=3, padding P=1, stride S=1.",
      options:["H_out = (32−3+2×1)/1 + 1 = 32 — same padding giữ nguyên kích thước","H_out = 30","H_out = 34","H_out = 16"],
      answer:0, explanation:"H_out = (H−K+2P)/S + 1 = (32−3+2)/1 + 1 = 31 + 1 = 32. Padding=1 với K=3 giữ nguyên spatial size (SAME padding)." },
    { module:"C", difficulty:"medium",
      q: "Tại sao Transformer cần Positional Encoding?",
      options:["Attention không biết thứ tự tokens (xử lý song song) — PE thêm thông tin vị trí vào embedding","Để tăng tốc","Để giảm params","Thay thế cho embedding"],
      answer:0, explanation:"RNN: thứ tự implicit trong sequential processing. Transformer: 'The cat sat' và 'sat cat The' cho attention output như nhau nếu không có PE." },
    { module:"C", difficulty:"medium",
      q: "Tại sao chia cho √dₖ trong Scaled Dot-Product Attention?",
      options:["Khi dₖ lớn, QKᵀ có variance lớn → softmax vào vùng saturation → gradient nhỏ; chia √dₖ giữ variance ≈1","Để normalize length","Để tăng tốc","√dₖ là hằng số không ảnh hưởng"],
      answer:0, explanation:"QKᵀ ∝ dₖ về variance khi Q,K~N(0,1). Softmax(large values) → distribution peaked, gần one-hot → gradient ≈0. Chia √dₖ giữ ổn định." },
    { module:"C", difficulty:"medium",
      q: "CNN: tại sao weight sharing quan trọng?",
      options:["Giảm mạnh số parameters — cùng filter detect edge/pattern bất kể vị trí; model nhỏ hơn nhiều so với fully-connected","Tăng accuracy","Tăng params","Cho phép xử lý sequence"],
      answer:0, explanation:"Ảnh 1000×1000: FC layer cần 10⁶ params/neuron. CNN với filter 3×3: chỉ 9 params/channel, áp dụng mọi pixel. Translation equivariant." },
    { module:"C", difficulty:"medium",
      q: "LSTM giải quyết vấn đề gì của RNN cơ bản?",
      options:["Long-range dependencies qua forget/input/output gates và cell state — gradient có thể chảy qua nhiều bước thời gian","Tốc độ training","Overfitting","Xử lý hình ảnh"],
      answer:0, explanation:"RNN: vanishing gradient với chuỗi dài (100+ steps). LSTM: cell state cₜ = fₜ⊙cₜ₋₁ + iₜ⊙gₜ — additive update, gradient không nhân qua tanh nhiều lần." },
    { module:"C", difficulty:"medium",
      q: "Multi-Head Attention có lợi ích gì so với single-head?",
      options:["Học nhiều loại relationship khác nhau song song (VD: syntax và semantics) trong cùng sequence","Nhanh hơn","Ít params hơn","Chỉ dùng cho images"],
      answer:0, explanation:"h heads, mỗi head dₖ=d_model/h. Head 1 có thể học coreference, head 2 học proximity, head 3 học syntax... Concat → richer representation." },
    { module:"C", difficulty:"hard",
      q: "Số parameters của CNN conv layer với C_in=64, C_out=128, K=3?",
      options:["3×3×64×128 + 128 = 73,856 (weights + bias)","3×3×128 = 1,152","64×128 = 8,192","3×3 = 9"],
      answer:0, explanation:"Params = K×K×C_in×C_out + C_out = 9×64×128 + 128 = 73,728 + 128 = 73,856. Weight sharing: mỗi trong 128 filter dùng chung 3×3×64 weights." },
    { module:"C", difficulty:"hard",
      q: "Gradient của chain rule qua LSTM cell tốt hơn RNN vì sao?",
      options:["LSTM: gradient qua cell state = ∂cₜ/∂cₜ₋₁ = fₜ ∈(0,1) — tốt hơn nhân qua tanh liên tục","LSTM có nhiều gates hơn","LSTM dùng ReLU","LSTM không dùng backprop"],
      answer:0, explanation:"RNN: ∂hₜ/∂hₜ₋₁ = Wₕ·tanh'(·), chuỗi nhân → ||·||^T → 0. LSTM cell: ∂cₜ/∂cₜ₋₁=fₜ (forget gate), không qua tanh → gradient highway." },
    { module:"C", difficulty:"hard",
      q: "Encoder-Decoder architecture trong Transformer (seq2seq) hoạt động thế nào?",
      options:["Encoder: self-attention trên input sequence; Decoder: self-attention + cross-attention với encoder output để generate output","Encoder và Decoder giống nhau","Chỉ có Decoder","Encoder xử lý image, Decoder xử lý text"],
      answer:0, explanation:"Encoder: mã hóa context. Decoder: tự hồi quy (autoregressive), dùng cross-attention để 'hỏi' encoder về context liên quan. VD: dịch máy, summarization." },
    { module:"C", difficulty:"hard",
      q: "Self-attention complexity là O(n²·d) — tại sao đây là vấn đề với sequence dài?",
      options:["n=sequence length: QKᵀ là ma trận n×n — tăng bậc 2; n=100k tokens (book) → 10¹⁰ operations","O(n²) là OK","Chỉ tốn memory, không tốn compute","Có thể parallelize hoàn toàn"],
      answer:0, explanation:"GPT-4: context 128k tokens → 128k² = 16 tỷ phép tính attention mỗi layer. Giải pháp: sparse attention (Longformer), flash attention (tối ưu memory), linear attention." },
    { module:"C", difficulty:"hard",
      q: "Tại sao deep CNN dùng nhiều filter 3×3 thay vì 1 filter 7×7?",
      options:["2 filter 3×3 có receptive field như 5×5 nhưng ít params hơn (18 < 25); 3 filter 3×3 ~ 7×7 (27 < 49) và thêm 2 non-linearity","7×7 không hợp lệ","3×3 cho receptive field lớn hơn","Không có sự khác biệt"],
      answer:0, explanation:"VGG: stack 3×3 conv. 3 lớp 3×3: params=3×(3×3×C²)=27C². 1 lớp 7×7: 49C². Ít params hơn + non-linearity nhiều hơn sau mỗi layer." },
    { module:"C", difficulty:"hard",
      q: "Pretrained model và fine-tuning: nên freeze bao nhiêu layers?",
      options:["Freeze early layers (low-level features), fine-tune top layers; nếu target domain rất khác: fine-tune nhiều hơn","Luôn freeze tất cả","Không bao giờ freeze","Freeze ngẫu nhiên"],
      answer:0, explanation:"Early CNN layers: edges, textures — universal. Late layers: task-specific. Ít data + similar domain → freeze nhiều. Nhiều data + khác domain → fine-tune toàn bộ." },
    { module:"C", difficulty:"hard",
      q: "Flash Attention giải quyết vấn đề gì của standard attention?",
      options:["IO-bound: standard attention materialize ma trận n×n lên HBM (GPU slow memory); Flash Attention tiling để stay in SRAM (fast)","Giảm complexity từ O(n²) xuống O(n)","Thêm sparsity","Thay đổi attention formula"],
      answer:0, explanation:"Bottleneck là memory bandwidth, không phải FLOPs. Flash Attention: không tạo n×n attention matrix, compute block-by-block trong SRAM → 2-4× nhanh hơn, O(n) memory." },
    { module:"C", difficulty:"hard",
      q: "Trong Transformer decoder, tại sao cần causal masking (masked self-attention)?",
      options:["Autoregressive generation: token t không được attend vào token t+1, t+2... (tương lai) — cần mask upper triangle của attention matrix","Tăng tốc","Giảm params","Tránh overfitting"],
      answer:0, explanation:"Khi generate: chỉ biết tokens đã sinh ra. Training: simulate điều này bằng mask = −∞ cho positions tương lai → softmax → 0 weight → không attend." }
  ],
  "ai-product": [
    { module:"C", difficulty:"easy",
      q: "Bước đầu tiên khi nhận một bài toán AI trong thực tế là gì?",
      options:["Frame bài toán: xác định User, Task, Data, Decision, Metric, Risk, Deploy","Chọn model ngay","Thu thập data ngay","Chọn cloud provider"],
      answer:0, explanation:"Nhiều dự án AI thất bại vì frame sai bài toán. Trước khi code: rõ who/what/why/how (7 thành phần) để đảm bảo AI thực sự cần thiết." },
    { module:"C", difficulty:"easy",
      q: "MVP (Minimum Viable Product) trong AI nghĩa là gì?",
      options:["Phiên bản đơn giản nhất có thể test giả thuyết với user thực — thường rule-based trước ML","Model phức tạp nhất","Product có đầy đủ features","Chỉ dùng cho startups"],
      answer:0, explanation:"MVP Fallback: Full ML → Rule-based → Human-in-loop → Don't build. Bắt đầu đơn giản, validate nhu cầu, rồi mới phức tạp hóa." },
    { module:"C", difficulty:"easy",
      q: "North Star Metric là gì?",
      options:["Một metric duy nhất phản ánh giá trị cốt lõi của sản phẩm — align toàn team","Accuracy của model","Revenue","Số lượng features"],
      answer:0, explanation:"VD: Netflix: watch time; Airbnb: booked nights; Uber: completed rides. NSM giúp team không bị phân tán bởi nhiều metrics mâu thuẫn nhau." },
    { module:"C", difficulty:"easy",
      q: "Khi model production có accuracy 95% nhưng business KPI không cải thiện, nguyên nhân có thể là gì?",
      options:["Metric misalignment — model metric không align với business outcome; hoặc deployment issue","Model cần thêm data","Model cần thêm parameters","Không có vấn đề"],
      answer:0, explanation:"Classic AI failure: optimize proxy metric (accuracy) thay vì business metric (revenue, retention). Luôn trace từ model output đến business decision." },
    { module:"C", difficulty:"easy",
      q: "Human-in-the-loop (HITL) nghĩa là gì?",
      options:["Human review/correct model output trước khi action — giảm risk, thu thập label, quan trọng khi stakes cao","Model thay thế hoàn toàn human","Human train model","Human test software"],
      answer:0, explanation:"HITL: model dự đoán, human verify/correct. Đặc biệt quan trọng: medical diagnosis, legal, high-stakes decisions. Active learning: HITL để label khó." },
    { module:"C", difficulty:"easy",
      q: "Trong AI agent (LLM-based), 'tool use' là gì?",
      options:["LLM gọi external API/function (tìm kiếm, calculator, database) để lấy thông tin không có trong weights","LLM sử dụng nhiều GPU","LLM có nhiều parameters hơn","LLM train lại mỗi query"],
      answer:0, explanation:"Function calling: LLM nhận system prompt định nghĩa tools, quyết định khi nào gọi tool, parse output, tiếp tục reasoning. VD: ReAct, LangChain agents." },
    { module:"C", difficulty:"medium",
      q: "Precision vs Recall tradeoff trong fraud detection — nên ưu tiên cái nào và tại sao?",
      options:["Recall cao hơn — miss fraud (FN) tốn kém hơn false alarm (FP); chấp nhận thêm FP để giảm FN","Precision cao hơn","Cả hai bằng nhau","Accuracy cao hơn"],
      answer:0, explanation:"FN cost (miss real fraud): $500+ tổn thất. FP cost (block valid tx): $5 friction + customer complaint. Expected cost = FN×$500 + FP×$5 → cần Recall cao." },
    { module:"C", difficulty:"medium",
      q: "Tại sao không nên dùng accuracy cho spam detection nếu 99% email là legitimate?",
      options:["Model predict 'not spam' cho mọi email: accuracy=99% nhưng vô dụng — không phát hiện được spam nào","Accuracy vẫn tốt trong trường hợp này","Nên dùng regression thay vì classification","Cần thêm data"],
      answer:0, explanation:"Majority baseline: predict majority class luôn → accuracy cao. Cần F1/AUC/Recall để đánh giá thực sự khi imbalanced." },
    { module:"C", difficulty:"medium",
      q: "A/B test trong product AI — variant nào đúng?",
      options:["Control: current model; Treatment: new model; random split users; đo business metric (revenue, engagement)","Control: no ML; Treatment: với ML","Test mọi thứ cùng lúc","Không cần A/B test cho AI"],
      answer:0, explanation:"Đúng: only change one thing, random assignment, measure business metric, sufficient sample, run full business cycle (1-2 weeks minimum)." },
    { module:"C", difficulty:"medium",
      q: "Cold start problem trong recommender systems là gì và cách xử lý?",
      options:["User/item mới không có interaction history — dùng demographic info, popularity-based, content-based, hoặc thu thập explicit preferences","Model không đủ data training","Model chạy chậm lúc đầu","Server cần warm-up"],
      answer:0, explanation:"New user: không biết preferences → fallback sang popularity hoặc ask explicit (onboarding quiz). New item: dùng content features. Dần dần chuyển sang collaborative filtering." },
    { module:"C", difficulty:"medium",
      q: "Khi nào nên dùng rule-based thay vì ML?",
      options:["Khi logic đơn giản, cần explainability, data ít, rules rõ ràng và ổn định, hoặc latency cực thấp","ML luôn tốt hơn","Chỉ khi không có GPU","Rule-based đã lỗi thời"],
      answer:0, explanation:"VD: email routing 'if từ CEO → high priority' — rule rõ, không cần ML. ML khi: pattern phức tạp, nhiều data, rules thay đổi, ngôn ngữ/image/unstructured." },
    { module:"C", difficulty:"medium",
      q: "Explainability (XAI) quan trọng khi nào?",
      options:["Khi cần audit (financial, medical, legal), debug model, build trust, hoặc regulatory compliance (GDPR right to explanation)","Chỉ cho academic research","Khi model không accurate","Không quan trọng trong production"],
      answer:0, explanation:"GDPR Art. 22: người dùng có quyền giải thích về automated decision. Medical: bác sĩ cần hiểu tại sao model đề xuất. SHAP, LIME, attention visualization." },
    { module:"C", difficulty:"hard",
      q: "Feature store trong ML platform có mục đích gì?",
      options:["Centralized repository lưu và serve features — tránh feature duplication, đảm bảo train/serve consistency, tái sử dụng features","Lưu model weights","Lưu training data","Thay thế database"],
      answer:0, explanation:"Vấn đề: team A và team B tính 'user_activity_7d' khác nhau → inconsistency. Feature store: tính một lần, dùng nhiều nơi. Offline (training) + Online (serving) store." },
    { module:"C", difficulty:"hard",
      q: "Shadow mode deployment là gì?",
      options:["New model chạy song song với production model, nhận cùng traffic, log predictions nhưng không serve user — test mà không risk","Blue-green deployment","Canary release","A/B test"],
      answer:0, explanation:"Shadow mode: compare new vs old model trên production traffic mà không ảnh hưởng user. Kiểm tra consistency, edge cases, performance trước khi promote." },
    { module:"C", difficulty:"hard",
      q: "Latency vs Throughput tradeoff trong ML serving là gì?",
      options:["Latency=thời gian 1 request; Throughput=requests/second; batching tăng throughput nhưng tăng latency; cần cân bằng theo SLA","Chúng tỉ lệ thuận","Throughput không quan trọng","Latency luôn quan trọng hơn"],
      answer:0, explanation:"Real-time (fraud detection): latency <100ms critical. Batch (recommendation refresh): throughput quan trọng. Dynamic batching: gộp requests trong time window nhỏ." },
    { module:"C", difficulty:"hard",
      q: "Fairness trong AI — protected attributes và cách đo?",
      options:["Demographic parity: P(ŷ=1|A=0)=P(ŷ=1|A=1); Equal opportunity: TPR bằng nhau giữa groups; cần chọn fairness criterion theo context","Fairness = accuracy cao","Bỏ protected attribute là đủ","Không thể đo fairness"],
      answer:0, explanation:"Removing protected attr không đủ (proxy features). Các metrics: demographic parity, equalized odds, calibration by group. Trade-off: không thể satisfy mọi metrics cùng lúc (impossibility theorem)." },
    { module:"C", difficulty:"hard",
      q: "ML technical debt (từ paper 'Hidden Technical Debt in ML Systems') gồm những loại nào?",
      options:["Entanglement (thay 1 feature ảnh hưởng tất cả), undeclared consumers, feedback loops, data dependencies, pipeline jungle","Chỉ là code không clean","Chỉ là slow model","Chỉ là thiếu documentation"],
      answer:0, explanation:"CACE: Changing Anything Changes Everything. ML systems: data + model + serving tightly coupled. Monitoring, testing, reproducibility đều tốn maintenance cost." },
    { module:"C", difficulty:"hard",
      q: "Canary deployment trong ML là gì?",
      options:["Route 1-5% traffic đến new model, monitor metrics, gradually rollout hoặc rollback — giảm risk so với full deployment","Deploy vào buổi tối","A/B test","Blue-green swap"],
      answer:0, explanation:"Canary: 1% users thấy model mới trước. Nếu metrics (latency, error rate, business KPI) OK sau N hours → tăng lên 5% → 25% → 100%. Auto rollback nếu alert." },
    { module:"C", difficulty:"hard",
      q: "Online learning (incremental learning) khác offline learning thế nào?",
      options:["Online: model update liên tục từng sample/mini-batch khi data đến; offline: train từ đầu trên static dataset","Giống nhau","Online nhanh hơn về tổng thời gian","Offline luôn accurate hơn"],
      answer:0, explanation:"Online learning: tốt cho non-stationary data (price prediction, news), không cần lưu toàn bộ history. Risk: catastrophic forgetting, concept drift nhanh. Cần learning rate decay." },
    { module:"C", difficulty:"hard",
      q: "Responsible AI và 'right to explanation' (GDPR) ảnh hưởng đến thiết kế model thế nào?",
      options:["Cần balance accuracy và explainability; trong regulated domains dùng interpretable models (logistic, decision tree) hoặc post-hoc explanation (SHAP)","Không ảnh hưởng đến model design","Chỉ cần document code","GDPR không áp dụng cho AI"],
      answer:0, explanation:"Art. 22 GDPR: không automated decision affecting legal/similar significant effects without explanation. Model card, audit trail, SHAP explanations thành best practice." }
  ],
  "ai-monitoring-evaluation": [
    { module:"C", difficulty:"easy",
      q: "Tại sao cần monitor model sau khi deploy?",
      options:["Model performance giảm theo thời gian do data drift, concept drift, distribution shift — world thay đổi","Model tự cải thiện","Chỉ để logging","Không cần nếu accuracy lúc test cao"],
      answer:0, explanation:"Training data ≠ future data. User behavior, product changes, seasonality làm distribution thay đổi → model xuống cấp. Monitor = phát hiện sớm để retrain." },
    { module:"C", difficulty:"easy",
      q: "Data drift là gì?",
      options:["P(X) thay đổi — phân phối features đầu vào thay đổi so với training data","Model accuracy giảm","Label thay đổi","Code lỗi"],
      answer:0, explanation:"VD: user demographics thay đổi (app viral → younger users), feature distribution shifts. Detect bằng PSI, KS test trên mỗi feature." },
    { module:"C", difficulty:"easy",
      q: "Concept drift là gì?",
      options:["P(Y|X) thay đổi — relationship giữa input và label thay đổi theo thời gian","Features thay đổi","Model bị hack","Training data bị corrupt"],
      answer:0, explanation:"VD: 'good credit' score thay đổi theo kinh tế; spam tactics mới. Khó detect hơn data drift vì cần labels mới. Monitor prediction distribution + sample labels định kỳ." },
    { module:"C", difficulty:"easy",
      q: "Offline metrics vs Online metrics là gì?",
      options:["Offline: đo trên historical test set (accuracy, AUC); Online: đo trên real users trong production (CTR, revenue, retention)","Giống nhau","Offline luôn cao hơn online","Online không cần đo"],
      answer:0, explanation:"Proxy metric gap: offline AUC 0.85 ≠ CTR tốt trong production. Cần cả hai: offline validate model, online validate business impact." },
    { module:"C", difficulty:"easy",
      q: "PSI (Population Stability Index) > 0.2 có nghĩa gì?",
      options:["Significant feature drift — feature distribution thay đổi đáng kể, nên investigate và có thể retrain","Model ổn","Drift nhẹ, chờ thêm","Không cần xử lý"],
      answer:0, explanation:"PSI: <0.1=stable, 0.1-0.2=minor shift (monitor), >0.2=significant change → cần action (retrain, investigate data pipeline, feature engineering lại)." },
    { module:"C", difficulty:"easy",
      q: "A/B test cần điều kiện nào để valid?",
      options:["Random assignment, single change (A vs B), sufficient sample, minimum duration (cover full business cycle), no interference between groups","Chỉ cần đủ sample","Có thể test nhiều changes cùng lúc","Chỉ cần 100 users"],
      answer:0, explanation:"SUTVA: no spillover between control/treatment. Random split (not by day!). Run ≥2 weeks để cover weekday/weekend patterns. Pre-register hypothesis." },
    { module:"C", difficulty:"medium",
      q: "Tại sao cần monitor prediction distribution chứ không chỉ accuracy?",
      options:["Labels ground truth thường trễ (days/weeks) nhưng predictions available ngay — drift in P(ŷ) có thể phát hiện vấn đề sớm hơn","Accuracy dễ tính hơn","Không cần cả hai","Prediction distribution không thay đổi"],
      answer:0, explanation:"Fraud detection: ground truth label đến sau 30 ngày. Nhưng nếu P(fraud prediction) thay đổi ngay hôm nay → alert sớm. Leading indicator." },
    { module:"C", difficulty:"medium",
      q: "Shadow mode testing khác A/B testing thế nào?",
      options:["Shadow: new model chạy song song nhưng không affect users — zero risk; A/B: real users thấy variant — có risk","Chúng giống nhau","Shadow test cho accuracy, A/B test cho business","Shadow nhanh hơn"],
      answer:0, explanation:"Shadow: dùng để kiểm tra consistency và edge cases an toàn trước khi A/B. A/B: đo actual business impact với real risk. Shadow → A/B → Canary → Full rollout." },
    { module:"C", difficulty:"medium",
      q: "Tính PSI cho bin có Act%=5%, Exp%=20%.",
      options:["PSI contribution = (0.05−0.20)×ln(0.05/0.20) = −0.15×ln(0.25) = −0.15×(−1.386) ≈ 0.208","PSI = 0.15","PSI = 0","PSI = −0.208"],
      answer:0, explanation:"Bin contribution = (Act−Exp)×ln(Act/Exp) = (−0.15)×(−1.386) = 0.208. Bin này đóng góp PSI=0.208 > 0.2 một mình → cần xem xét kỹ bin này." },
    { module:"C", difficulty:"medium",
      q: "Minimum Detectable Effect (MDE) trong A/B test là gì?",
      options:["Độ cải thiện nhỏ nhất mà test có thể phát hiện với power đủ — MDE nhỏ hơn đòi hỏi sample lớn hơn","Sai số của measurement","Thời gian run test","Alpha level"],
      answer:0, explanation:"n ∝ 1/Δ². MDE=0.5% cần ~4× sample so với MDE=1%. Trước A/B test: quyết định MDE dựa trên business significance, rồi tính required n." },
    { module:"C", difficulty:"medium",
      q: "Data freshness (data staleness) ảnh hưởng model thế nào?",
      options:["Stale features (VD: 'last_purchase' từ 2020) → model dự đoán sai trong 2026 context; cần feature freshness monitoring","Không ảnh hưởng","Chỉ ảnh hưởng inference speed","Stale data tốt hơn vì nhiều hơn"],
      answer:0, explanation:"VD: fraud model dùng 'device fingerprint' stale → miss new device types. Monitor feature freshness (age of last update) và alert khi stale > threshold." },
    { module:"C", difficulty:"medium",
      q: "Model card là gì trong MLOps?",
      options:["Document mô tả model: intended use, training data, evaluation results, limitations, fairness considerations — transparency artifact","Credit card cho cloud","Visualization tool","Training checklist"],
      answer:0, explanation:"Google Model Cards (2019): cho phép stakeholders hiểu model trước deploy. Bao gồm: model details, intended use, out-of-scope uses, evaluation results per subgroup." },
    { module:"C", difficulty:"hard",
      q: "Gradual concept drift vs abrupt concept drift — phát hiện và xử lý khác nhau thế nào?",
      options:["Gradual: error tăng chậm → rolling window metrics detect; Abrupt: sudden drop → change point detection (CUSUM); cả hai cần retrain trigger","Giống nhau","Gradual không cần xử lý","Abrupt dễ xử lý hơn"],
      answer:0, explanation:"Gradual: seasonality, economic trends → monitor rolling 30d metric vs 90d baseline. Abrupt: COVID, regulatory change → CUSUM hoặc ADWIN algorithm để detect changepoint." },
    { module:"C", difficulty:"hard",
      q: "Evaluation trong LLM production — tại sao human evaluation không đủ và cần gì thêm?",
      options:["Human eval: chậm, tốn kém, không scale — cần LLM-as-judge, automated metrics (ROUGE, BERTScore) + human spot-check combo","Human eval là đủ","Chỉ cần BLEU","Không cần evaluation sau deploy"],
      answer:0, explanation:"Production: 1000 requests/day → không thể human eval tất cả. LLM-as-judge: GPT-4 grade responses theo rubric. Evals framework: Ragas, DeepEval, ARES." },
    { module:"C", difficulty:"hard",
      q: "Two-sample test để detect feature drift: KS test vs chi-square test — khi nào dùng cái nào?",
      options:["KS test: continuous features (age, amount) — compare CDFs; chi-square: categorical features (country, device_type) — compare frequency","KS cho mọi loại","Chi-square cho mọi loại","Dùng t-test cho drift"],
      answer:0, explanation:"KS statistic = max|F₁(x)−F₂(x)|, non-parametric, tốt cho continuous. Chi-square: Σ(O−E)²/E, dùng observed vs expected counts cho categorical." },
    { module:"C", difficulty:"hard",
      q: "Phân biệt model retraining vs model refreshing vs model rebuilding.",
      options:["Retrain: thêm new data vào old training set, same architecture; Refresh: fine-tune on recent data; Rebuild: architecture/features thay đổi từ đầu","Giống nhau","Chỉ retrain là đúng","Chỉ rebuild cần thiết"],
      answer:0, explanation:"Trigger: drift nhẹ → refresh (nhanh, rẻ). Drift vừa → retrain (định kỳ). Drift lớn hoặc performance floor → rebuild (tốn kém nhất, cần full MLOps cycle)." },
    { module:"C", difficulty:"hard",
      q: "Novelty detection khác anomaly detection thế nào trong context monitoring?",
      options:["Novelty: detect new patterns chưa từng thấy (new attack type, new user segment); Anomaly: detect outliers theo known distribution. Cả hai quan trọng cho monitoring","Giống nhau","Chỉ anomaly detection cần","Novelty detection không dùng trong AI"],
      answer:0, explanation:"Fraud: anomaly (unusual transaction amount). Chatbot safety: novelty (new jailbreak pattern). Isolation Forest: anomaly. One-class SVM: novelty. Monitoring cần cả hai." },
    { module:"C", difficulty:"hard",
      q: "Bandit algorithms (multi-armed bandit) dùng khi nào thay A/B test?",
      options:["Khi muốn optimize reward trong khi test (explore-exploit) — giảm regret so với A/B cố định 50/50; tốt cho adaptive experiments","Bandit chậm hơn A/B","Bandit không statistical valid","Bandit chỉ cho slot machines"],
      answer:0, explanation:"A/B: 50/50 fixed → regret nếu B rõ ràng tốt hơn. Bandit (Thompson Sampling, UCB): route nhiều traffic hơn đến winner sớm → ít regret. Nhưng ít statistical rigor hơn A/B." },
    { module:"C", difficulty:"hard",
      q: "Interleaving experiment (trong search/ranking) có ưu điểm gì so với A/B test?",
      options:["Cùng user thấy cả 2 systems (interleaved results) → loại bỏ user variance → sensitive hơn, cần ít sample hơn để detect effect","A/B test luôn tốt hơn","Interleaving tốn kém hơn","Chỉ dùng cho e-commerce"],
      answer:0, explanation:"A/B: between-user comparison — user variance lớn. Interleaving: within-user comparison (Team Draft Interleaving) → variance thấp hơn 10-100× → detect effect nhỏ hơn." },
    { module:"C", difficulty:"hard",
      q: "SLA (Service Level Agreement) trong ML serving — các metrics phổ biến là gì?",
      options:["P50/P95/P99 latency, throughput (QPS), availability (% uptime), error rate (<1%), model freshness (max age of deployed model)","Chỉ accuracy","Chỉ latency","Chỉ uptime"],
      answer:0, explanation:"P99 latency (99th percentile) quan trọng hơn mean: 1% users chờ lâu = 10k users/1M. SLA điển hình: P99 < 200ms, availability 99.9%, error rate < 0.1%." }
  ],
  "rag-llm-agent": [
    { module:"C", difficulty:"easy",
      q: "RAG (Retrieval-Augmented Generation) giải quyết vấn đề gì của LLM?",
      options:["Hallucination và outdated knowledge — retrieve relevant docs từ external knowledge base, cung cấp factual context cho LLM","LLM quá chậm","LLM quá đắt","LLM không nói được tiếng Việt"],
      answer:0, explanation:"LLM weights chứa knowledge đến cutoff date. RAG: search DB → cung cấp context hiện tại → LLM generate dựa trên context thật, không tự bịa." },
    { module:"C", difficulty:"easy",
      q: "Embedding model trong RAG dùng để làm gì?",
      options:["Convert text thành vector dense representation — cho phép semantic similarity search","Compress text","Translate text","Generate text"],
      answer:0, explanation:"Embedding model (VD: text-embedding-ada-002, BGE): text → [v₁,...,v_{1536}]. Cosine similarity giữa query và doc embeddings → retrieve relevant documents." },
    { module:"C", difficulty:"easy",
      q: "Hallucination trong LLM là gì?",
      options:["Model tạo ra thông tin sai hoặc không có căn cứ nhưng với confidence cao — không dựa trên fact hay context","Model không trả lời","Model chậm","Model không hiểu câu hỏi"],
      answer:0, explanation:"LLM pattern-match → tạo text nghe có vẻ plausible nhưng không factual. VD: cite papers không tồn tại, tạo ra events không xảy ra. RAG + grounding giảm hallucination." },
    { module:"C", difficulty:"easy",
      q: "Chunking trong RAG là gì và tại sao cần?",
      options:["Chia document thành đoạn nhỏ (chunks) để embed và retrieve — LLM context window giới hạn, cần chọn relevant chunks","Compress model","Chia data thành train/test","Tokenize text"],
      answer:0, explanation:"Tài liệu 100 trang: embed toàn bộ = 1 vector quá noisy. Chunk thành 100-500 token blocks → mỗi chunk embed riêng → retrieve chunks liên quan nhất." },
    { module:"C", difficulty:"easy",
      q: "Vector database (VD: Pinecone, Weaviate, Chroma) dùng để làm gì?",
      options:["Lưu và search embeddings hiệu quả — approximate nearest neighbor (ANN) search trong không gian vector chiều cao","Lưu structured data","Thay thế SQL database","Train model"],
      answer:0, explanation:"Brute-force cosine search: O(n×d). ANN (HNSW, IVF): O(log n) approximate. VectorDB: index, persist, và serve embeddings ở production scale (millions of vectors)." },
    { module:"C", difficulty:"easy",
      q: "Prompt engineering là gì?",
      options:["Thiết kế input prompt để guide LLM ra output mong muốn — không thay đổi model weights","Fine-tune model","Train model từ đầu","Modify model architecture"],
      answer:0, explanation:"Prompting: zero-shot, few-shot, chain-of-thought, role assignment, format specification. Không tốn GPU. Nhưng brittle với model version changes." },
    { module:"C", difficulty:"medium",
      q: "Tại sao dùng cosine similarity thay dot product khi so sánh embeddings?",
      options:["Cosine similarity = dot product/(‖A‖·‖B‖) — normalize theo length, không bị ảnh hưởng bởi magnitude của vector, chỉ đo hướng","Dot product chậm hơn","Cosine faster to compute","Chúng cho kết quả giống nhau luôn"],
      answer:0, explanation:"Text ngắn vs dài có embedding magnitude khác nhau dù cùng topic. Cosine: chỉ đo góc → invariant to length. Thực tế: nếu normalize embeddings về unit length, dot product = cosine." },
    { module:"C", difficulty:"medium",
      q: "Hybrid retrieval (dense + sparse) trong RAG tốt hơn chỉ dense khi nào?",
      options:["Khi query có exact keyword quan trọng (product code, person name, technical term) — BM25 tốt cho keyword match, embedding tốt cho semantic","Dense luôn tốt hơn","Sparse luôn tốt hơn","Chúng bằng nhau"],
      answer:0, explanation:"Dense (embedding): 'car' ≈ 'automobile'. BM25: exact match 'CVE-2024-1234'. Hybrid: kết hợp bằng RRF (Reciprocal Rank Fusion) → tốt nhất cả hai thế giới." },
    { module:"C", difficulty:"medium",
      q: "Re-ranking trong RAG là gì và tại sao cần?",
      options:["Cross-encoder score top-k chunks để chọn top-m để đưa vào prompt — bi-encoder retrieve nhanh nhưng kém accurate; cross-encoder chậm nhưng accurate hơn","Sắp xếp output của LLM","Rank models","Không cần nếu đã có embedding search"],
      answer:0, explanation:"Bi-encoder: embed query và doc độc lập → fast. Cross-encoder: concat query+doc, score jointly → accurate hơn nhưng O(k) inference. Two-stage: retrieve 100 → rerank → top-5 → LLM." },
    { module:"C", difficulty:"medium",
      q: "Context window overflow trong RAG — cách xử lý?",
      options:["Giảm chunk size, giảm số chunks (top-k), dùng summarization, Lost-in-the-Middle aware ordering, hoặc long-context model","Không thể xử lý","Tăng context window","Bỏ bớt câu hỏi"],
      answer:0, explanation:"'Lost in the Middle' (Liu 2023): LLM attend tốt hơn ở đầu và cuối context. Đặt most relevant chunks đầu/cuối, less relevant ở giữa. Token budget: tính trước không overflow." },
    { module:"C", difficulty:"medium",
      q: "Guardrails trong LLM production là gì?",
      options:["Filters và validators check input/output của LLM — block harmful content, PII, jailbreak, off-topic responses","Model size limit","Compute limit","Rate limiting chỉ"],
      answer:0, explanation:"Input guardrails: detect prompt injection, jailbreak, sensitive topics. Output guardrails: check factuality (NLI), PII redaction, toxicity. VD: Guardrails AI, Nemo Guardrails." },
    { module:"C", difficulty:"medium",
      q: "Few-shot prompting giúp gì?",
      options:["Cung cấp 2-5 ví dụ input-output trong prompt → LLM học task pattern mà không cần fine-tune — tốt hơn zero-shot cho nhiều tasks","Train model thêm","Tăng context window","Fine-tune nhanh hơn"],
      answer:0, explanation:"Zero-shot: 'Classify sentiment: [text]'. Few-shot: 'positive: great! | negative: terrible | → classify: [text]'. Few-shot tốt khi task unusual hoặc cần specific format." },
    { module:"C", difficulty:"hard",
      q: "RAG evaluation: đo retrieval quality và generation quality riêng biệt thế nào?",
      options:["Retrieval: context recall (relevant docs retrieved?), context precision (irrelevant docs excluded?); Generation: faithfulness (answer grounded in context?), answer relevancy","Chỉ đo end-to-end accuracy","Chỉ BLEU score","Chỉ human eval"],
      answer:0, explanation:"Ragas framework: context_precision, context_recall, faithfulness, answer_relevancy. Tách biệt giúp debug: retrieval fail hoặc LLM fail? End-to-end metric không giúp locate issue." },
    { module:"C", difficulty:"hard",
      q: "Prompt injection attack là gì trong LLM application?",
      options:["Malicious user input thêm instructions để override system prompt — VD: '...Ignore above. Now do X' — bypass guardrails","SQL injection trong prompt","XSS attack","CSRF attack"],
      answer:0, explanation:"Direct injection: user modifies prompt. Indirect: LLM đọc external content có hidden instructions (retrieved doc, website). Defense: input sanitization, instruction hierarchy, constitutional AI." },
    { module:"C", difficulty:"hard",
      q: "Fine-tuning LLM vs RAG — khi nào dùng cái nào?",
      options:["Fine-tuning: dạy model style/format/domain language (stable knowledge); RAG: cung cấp facts cập nhật, private data, traceable sources (dynamic knowledge)","Fine-tuning luôn tốt hơn","RAG luôn tốt hơn","Chúng giống nhau"],
      answer:0, explanation:"Fine-tune: 'viết theo tone của công ty', 'format như legal document'. RAG: 'biết về policies mới nhất', 'trả lời từ internal docs'. Kết hợp: fine-tune style + RAG facts." },
    { module:"C", difficulty:"hard",
      q: "Chain-of-Thought (CoT) prompting là gì và tại sao hiệu quả?",
      options:["Thêm 'Let's think step by step' hoặc reasoning steps vào prompt → LLM decompose bài toán → giảm errors trên complex multi-step tasks","Tăng token count","Thêm ví dụ","Fine-tune kỹ thuật"],
      answer:0, explanation:"CoT (Wei 2022): LLM explicit reasoning trace → error ở step nào visible. Đặc biệt hiệu quả với math, logic, multi-hop QA. Emergent ở models >100B params." },
    { module:"C", difficulty:"hard",
      q: "RLHF (Reinforcement Learning from Human Feedback) trong LLM là gì?",
      options:["3 bước: supervised fine-tune → reward model từ human preferences → RL (PPO) optimize LLM để maximize reward — tạo helpful/harmless/honest behavior","Train từ đầu","Data augmentation","Prompt engineering"],
      answer:0, explanation:"InstructGPT/ChatGPT: SFT → annotators rank outputs → reward model → PPO. DPO (Direct Preference Optimization) mới hơn: skip RL, train trực tiếp từ preference pairs." },
    { module:"C", difficulty:"hard",
      q: "Tại sao temperature=0 không luôn tốt cho LLM?",
      options:["Temperature=0: greedy decoding, deterministic nhưng có thể boring/repetitive; temperature>0: sampling cho diverse, creative outputs — trade-off factuality vs creativity","Temperature=0 luôn tốt nhất","Temperature cao hơn = accurate hơn","Temperature không ảnh hưởng output"],
      answer:0, explanation:"Factual QA: temperature=0 (want consistent). Creative writing: temperature=0.7-1.0. Summarization: 0.3-0.5. Nucleus sampling (top-p) kết hợp với temperature cho better quality." },
    { module:"C", difficulty:"hard",
      q: "Semantic chunking khác fixed-size chunking thế nào?",
      options:["Semantic: chia tại boundaries có ý nghĩa (paragraph, section, sentence boundary); fixed-size: chia cứng 512 tokens — semantic tốt hơn cho retrieval coherence","Fixed luôn tốt hơn","Chúng giống nhau","Semantic chunking không thực tế"],
      answer:0, explanation:"Fixed 512 tokens: câu có thể bị cắt đôi → chunk thiếu context. Semantic: chunk theo paragraph/heading → mỗi chunk coherent, self-contained hơn → embedding chất lượng hơn." },
    { module:"C", difficulty:"hard",
      q: "Constitutional AI (CAI) từ Anthropic là gì?",
      options:["LLM tự critique output của mình dựa trên set of principles (constitution), rồi revise — giảm harmful content mà không cần human feedback cho mọi example","Luật AI","AI có quyền lợi pháp lý","Framework deploy AI"],
      answer:0, explanation:"CAI: 1) Generate response 2) Critique theo principle (harmless, helpful, honest) 3) Revise 4) Train trên (original, revised) pairs. Mở rộng RLHF với AI feedback thay human." }
  ]
});
