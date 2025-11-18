 const jobsData = {
      "نائب مسؤول إدارة عائلة قمم"  /////////// ok
     : {
        family : 'شواغر عائلة قمم ',
        title: 'نائب مسؤول إدارة عائلة قمم',
        questions: [
            {
                id: 'vice_family_deputy',
                label: 'كيف تقيم قدرتك على تمثيل المسؤول عند غيابه؟',
                type: 'radio',
                Options: ['ضعيف','متوسط','جيد','ممتاز'],
                required: true
            },
            {
                id: "vice_family_first_step_on_directive",
                label: 'إذا تلقيت توجيهات جديدة من المسؤول، ما هي الخطوة الأولى التي ستقوم بها لضمان التنفيذ السلس لها؟ ',
                type: 'textarea',
                required: true
            },
            {
                id: "vice_family_meeting",
                label: 'كيف يمكنك التأكد من أن جميع المشاركين يحضرون الاجتماعات المقررة؟',
                type: 'radio',
                Options: [' إرسال دعوات عبر البريد','التأكيد المباشر مع الأعضاء',' اعتماد جدول زمني محدد',' جميع ما سبق'],
                required: true
            },
            {
                id: "vice_family_meeting_minutes_focus",
                label: 'ما هي العناصر الأساسية التي تركز عليها عند كتابة محاضر الاجتماعات؟  ',
                type: 'textarea',
                required: true
            },
            {
                id: "vice_family_task_followup",
                label: 'كيف تقوم بمتابعة تنفيذ المهام الموزعة على مسؤولي الأقسام؟',
                type: 'text',
                required: true
            },
            {
                id: "vice_family_file_management_method",
                label: 'ما الطريقة التي تستخدمها لتنظيم الملفات والمستندات المهمة إلكترونيا؟',
                type: 'text',
                required: true
            },
            {
                id: "vice_family_deadline",
                label: 'ما هي الطريقة التي تفضلها لضمان استلام التقارير في مواعيدها؟',
                type: 'radio',
                Options: ['إرسال تذكيرات',' تحديد مواعيد نهائية صارمة','التواصل المباشر مع الأعضاء',' جميع ما سبق'],
                required: true
            },
            {
                id: "vice_family_handling_complaints",
                label: 'كيف تستقبل شكاوى الأعضاء وكيف تتعامل معها؟  ',
                type: 'textarea',
                required: true
            },
            {
                id: "vice_family_dispute_resolution",
                label: 'كيف تقوم على حل النزاعات الإدارية بين الأعضاء؟',
                type: 'text',
                required: true
            },
            {
                id: "vice_family_writing_skills",
                label: 'كيف تصف مستوى مهاراتك في الكتابة باللغة العربية والإنجليزية؟',
                type: 'text',
                required: true
            },
            {
                id: "vice_family_member_motivation",
                label: 'كيف تعمل على تحفيز الأعضاء وتشجيعهم على العمل؟',
                type: 'text',
                required: true
            },
            {
                id: "vice_family_additional_comment",
                label: 'إضافه او تعليق',
                type: 'text',
                required: false
            },



        ]

    },
    
      "مسؤول/ نائب مسؤول قسم القيم والثقافة"     //////////// ok
     : {
        family : 'شواغر عائلة قمم ',
        title : ' مسؤول / نائب مسؤول قسم القيم والثقافة',
        questions : [
            {
                id: "values_planning",
                label: 'كيف تصف مهاراتك في التخطيط والتنظيم؟',
                type: 'text',
                required: true
            },
            {
                id: "values_team_management_experience",
                label: 'ما هي تجربتك السابقة في إدارة الفرق أو الأقسام؟',
                type: 'textarea',
                required: true
            },
            {
                id: "values_emergency_handling",
                label: 'كيف تتعامل مع المشكلات الطارئة؟',
                type: 'text',
                required: true
            },
            {
                id: "values_important_values",
                label: 'ما هي القيم التي تعتقد أنها مهمة لتحقيق رؤية قمم؟',
                type: 'textarea',
                required: true
            },
            {
                id: "values_monthly",
                label: 'اختر القيمة الشهرية التي تعتقد أنها الأكثر تأثيراً في بيئة العمل:',
                type: 'radio',
                Options: ['التعاون','الابتكار','المسؤولية','الاحترام'],
                required: true
            },
            {
                id: "values_store_coordination",
                label: 'كيف تقيم قدرتك على التنسيق مع المتاجر لجوائز الفائزين؟',
                type: 'radio',
                Options: ['ضعيف','متوسط','جيد','ممتاز'],
                required: true
            },
            {
                id: "values_award_delivery_approval",
                label:  'كيف يمكنك ضمان تسليم الجوائز في الوقت المحدد؟',
                type: 'textarea',
                required: true
            },
             {
                id: "values_content_writing",
                label: 'كيف تقيم مهاراتك في هذا مجال كتابة المحتوى؟',
                 type: 'radio',
                Options: ['ضعيف','متوسط','جيد','ممتاز'],
                required: true
            },
             {
                id: "values_content_examples",
                label: 'هل لديك أمثلة على محتوى قمت بكتابته في السابق؟',
                type: 'textarea',
                required: true
            },
             {
                id: "values_event_organization_steps",
                label: 'كيف ستقوم بتنظيم فعالية معينة من البداية حتى النهاية وماهي خطواتك لضمان نجاح الفعالية من حيث التحضير والتنظيم؟',
                type: 'textarea',
                required: true
            },
             {
                id: "values_additional_comment",
                label: 'إضافة أو تعليق',
                type: 'text',
                required: false
            },
        ]
    },

          "عضو قسم القيم والثقافة"        ///////////////// ok
      : {
        family : 'شواغر عائلة قمم ',
        title : ' عضو قسم القيم والثقافة',
        questions : [
             {
                id: "member_content_writing",
                label: 'كيف تقيم مهاراتك في كتابة المحتوى؟',
                type: 'radio',
                Options: ['ضعيف','متوسط','جيد','ممتاز'],
                required: true
            },
            {
                id: "member_values_content_experience",
                label: 'هل لديك تجارب سابقة في كتابة محتوى للقيم أو المواضيع الثقافية؟',
                type: 'textarea',
                required: true
            },
            {
                id: "member_topic",
                label: 'اختر الموضوع الذي تعتقد أنك تستطيع الكتابة عنه بشكل جيد:',
                type: 'radio',
                Options: ['القيم الإسلامية','بناء الفرق','التحفيز الشخصي','فنون الحياة'],
                required: true
            },
            {
                id: "member_event_organization_steps",
                label: 'كيف ستقوم بتنظيم فعالية معينة من البداية حتى النهاية وماهي خطواتك لضمان نجاح الفعالية من حيث التحضير والتنظيم؟',
                type: 'textarea',
                 required: true
            },
            {
                id: "member_event_experience",
                label: 'هل لديك خبرة سابقة في تنظيم الفعاليات؟',
                type: 'radio', 
                Options: ['نعم','لا'],
                required: true
            },
            {
                id: "member_file_tools",
                label: 'كيف تقيم معرفتك أدوات إدارة الملفات مثل Google Drive؟',
                type: 'radio',
                Options: ['ضعيف','متوسط','جيد','ممتاز'],
                required: true
            },
            {
                id: "member_file_method",
                label: 'ما هي الطريقة التي تتبعها لضمان تنظيم الملفات بشكل فعال؟',
                type: 'radio',
                Options: ['استخدام مجلدات ومجموعات','تسمية الملفات بطريقة واضحة','رفع الملفات بشكل دوري','خيارات أخرى (يرجى التوضيح)'],
                required: true
            },
            {
                id: "s",
                label:'في حالة اختيارك لخيارات اخرئ قم بتوضيحها هنا',
                type: 'text',
                required: false
            },
            {
                id: "q",
                label: 'ما هي الطريقة التي تتبعها لتحديد فكرة مناسبة لمسابقة جديدة؟',
                type: 'textarea',
                required: true
            },
            {
                id: "member_competition",
                label: 'كيف يمكنك تعزيز مشاركة الأعضاء في المسابقات؟',
                type: 'radio',
                Options: ['تقديم جوائز','تنظيم حملات ترويجية','تطوير محتوى جذاب','خيارات أخرى (يرجى التوضيح)'],
                required: true
            },
            {
                id: "l",
                label:'في حالة اختيارك لخيارات اخرئ قم بتوضيحها هنا',
                type: 'text',
                required: false
            },
             {
                id: "member_additional_comment",
                label: 'إضافة أو تعليق',
                type: 'text',
                required: false
            },
        ]
    },

      "عضو قسم شؤون سواعد قمم"      ///////////// ok
     : {
        family: 'شواغر عائلة قمم ',
        title: 'عضو قسم شؤون سواعد قمم',
        questions: [
            {
                id: "sawaid_data_org",
                label: 'كيف تقيم مهاراتك في تنظيم البيانات وأرشفتها؟',
                type: 'radio',
                Options: [' ضعيف', ' متوسط', ' جيد', ' ممتاز'],
                required: true
            },
            {
                id: "sawaid_tools",
                label: 'ما هي الأدوات التي تستخدمها لإدارة البيانات؟',
                type: 'radio',
                Options: ['Google Drive', 'Microsoft Excel', 'أدوات أخرى (يرجى التوضيح)'],
                required: true
            },
            {
                id: "v",
                label:'في حالة اختيارك لخيارات اخرئ قم بتوضيحها هنا',
                type: 'text',
                required: false
            },
            {
                id: "sawaid_update_followup_files",
                label: 'كيف تضمن تحديث ملفات المتابعة والتقييم بشكل دوري؟',
                type: 'textarea',
                required: true
            },
            {
                id: "sawaid_query",
                label: 'كيف ستتعامل مع استفسارات الأعضاء لضمان حلها بسرعة؟',
                type: 'radio',
                Options: [
                'الرد الفوري',
                'توجيههم إلى الشخص المعني',
                'توفير معلومات مفيدة مسبقاً',
                'خيارات أخرى (يرجى التوضيح)'
                ],
                required: true
            },
            {
                id: "n",
                label:'في حالة اختيارك لخيارات اخرئ قم بتوضيحها هنا',
                type: 'text',
                required: false
            },
            {
                id: "sawaid_team_experience",
                label: 'هل لديك خبرة سابقة في العمل ضمن فريق؟',
                type: 'radio',
                Options: ['نعم', 'لا'],
                required: true
            },
            {
                id: "sawaid_process",
                label: 'كيف تتعامل مع اللوائح التنظيمية في بيئة العمل؟',
                type: 'radio',
                Options: [
                'أتبع التعليمات بدقة',
                'أعمل مع الفريق لضمان الالتزام',
                'أبحث عن طرق لتحسين العمليات',
                'خيارات أخرى (يرجى التوضيح)'
                ],
                required: true
            },
            {
                id: "m",
                label:'في حالة اختيارك لخيارات اخرئ قم بتوضيحها هنا',
                type: 'text',
                required: false
            },
            {
                id: "sawaid_cert",
                label: 'اختر الطريقة التي تفضل استخدامها لإعداد الشهادات الرسمية:',
                type: 'radio',
                Options: [
                'استخدام قوالب جاهزة',
                'تصميم الشهادات من الصفر',
                'الاشتراك في برنامج تصميم',
                'خيارات أخرى (يرجى التوضيح)'
                ],
                required: true
            },
            {
                id: "o",
                label:'في حالة اختيارك لخيارات اخرئ قم بتوضيحها هنا',
                type: 'text',
                required: false
            },
            {
                id: "sawaid_contribute_event_design",
                label: 'كيف تساهم في تصميم وتنفيذ فعالية مجتمعية؟',
                type: 'textarea',
                required: true
            },
            {
                id: "sawaid_event",
                label: 'ما هي الخطوات التي ستتبعها لتوثيق وتقييم الفعاليات بعد تنفيذها؟',
                type: 'radio',
                Options: [
                'جمع الملاحظات من المشاركين',
                'إعداد تقارير مفصلة',
                'تنظيم اجتماع لمناقشة النتائج',
                'خيارات أخرى (يرجى التوضيح)'
                ],
                required: true
            },
            {
                id: "u",
                label:'في حالة اختيارك لخيارات اخرئ قم بتوضيحها هنا',
                type: 'text',
                required: false
            },
            {
                id: "sawaid_additional_comment",
                label: 'إضافة أو تعليق',
                type: 'text',
                required: false
            }
        ]
    },

      "منسق عام في قسم التدريب والتطوير"      /////////// ok
     : {
        family: 'شواغر عائلة قمم ',
        title: 'منسق عام في قسم التدريب والتطوير',
        questions: [
            {
                id: "training_communication",
                label: 'كيف تقيم مهاراتك في التواصل مع الآخرين؟',
                type: 'radio',
                Options: [' ضعيف', ' متوسط', ' جيد', ' ممتاز'],
                required: true
            },
            {
                id: "training_understand",
                label: 'ما هي الطريقة التي تتبعها للتأكد من فهم احتياجات المدرب قبل بدء الورشة؟',
                type: 'radio',
                Options: [
                'إجراء مقابلة مباشرة',
                'إرسال استبيان',
                'التواصل عبر البريد الإلكتروني',
                'خيارات أخرى (يرجى التوضيح)'
                ],
                required: true
            },
             {
                id: "y",
                label:'في حالة اختيارك لخيارات اخرئ قم بتوضيحها هنا',
                type: 'text',
                required: false
            },
            {
                id: "training_coordinator_experience",
                label: 'هل لديك تجربة سابقة في التنسيق مع المدربين؟',
                type: 'radio',
                Options: ['نعم', 'لا'],
                required: true
            },
            {
                id: "training_ensure_schedule",
                label: 'ما هي الخطوات التي تتبعها لضمان سير الورشة أو الفعالية وفق الجدول الزمني المحدد؟',
                type: 'textarea',
                required: true
            },
            {
                id: "training_handle_challenges",
                label: 'كيف تتعامل مع التحديات أو التأخيرات التي قد تحدث أثناء الفعالية؟',
                type: 'textarea',
                required: true
            },
            {
                id: "training_activity_evaluation",
                label: 'كيف تقوم بتقييم الأنشطة بعد انتهاء الفعالية؟',
                type: 'textarea',
                required: true
            },
            {
                id: "training_report_writing",
                label: 'كيف تقوم بكتابة التقارير؟',
                type: 'textarea',
                required: true
            },
            {
                id: "training_support_team",
                label: 'كيف تساعد أعضاء الفريق عند الحاجة في تنفيذ المهام؟',
                type: 'textarea',
                required: true
            },
            {
                id: "training_coordinator_qualities",
                label: 'ما هي الصفات التي تعتقد أنها مهمة لمنسق في قسم التدريب والتطوير؟',
                type: 'textarea',
                required: true
            },
            {
                id: "training_initiative",
                label: 'كيف ستظهر روح المبادرة في عملك كمنسق؟',
                type: 'textarea',
                required: true
            },
            {
                id: "training_additional_comment",
                label: 'إضافة أو تعليق',
                type: 'text',
                required: false
            }
        ]
    },


    //////////////////////  2 //////////////

      "عضو الإشراف" ///////// ok
     : {
    title: 'عضو الإشراف',
    department: "قسم الإشراف",
    questions: [
      {
        id: 'task_organization_steps',
        label: "ما الخطوات التي تتبعها عادةً لتنظيم ومتابعة المهام بين الأقسام المختلفة؟",
        type: "textarea",
        required: true
      },
      {
        id: 'file_access_and_security',
        label: "كيف تضمن سهولة الوصول إلى الملفات من قبل الفريق مع الحفاظ على الأمان والسرية؟",
        type: "textarea",
        required: true
      },
      {
        id: 'file_loss_or_duplication_handling',
        label: "هل واجهت من قبل مشكلة في فقدان أو تكرار ملفات؟ كيف تعاملت معها؟",
        type: "textarea",
                required: true

      },
      {
        id: 'report_essential_elements',
        label: "عند إعداد تقرير دوري للإدارة، ما العناصر الأساسية التي تحرص على تضمينها؟",
        type: "textarea",
                required: true

      },
      {
        id: 'low_performance_handling_steps',
        label: "إذا لاحظت انخفاضًا في أداء أحد الأقسام، ما الخطوات التي ستتخذها قبل رفع التقرير؟",
        type: "textarea",
                required: true

      },
      {
        id: 'error_prevention_procedures',
        label: "ما الإجراءات التي تتبعها لتفادي الأخطاء عند إدخال أو أرشفة المعلومات؟",
        type: "textarea",
                required: true

      },
      {
        id: 'time_management',
        label: "إدارة الوقت",
        type: "radio",
        Options: ["ضعيف", "مقبول", "جيد", "جيد جداً", "ممتاز"],
                required: true

      },
      {
        id: 'problem_solving',
        label: "حل المشكلات والأزمات",
        type: "radio",
        Options: ["ضعيف", "مقبول", "جيد", "جيد جداً", "ممتاز"],
                required: true

      },
      {
        id: 'teamwork',
        label: "العمل الجماعي",
        type: "radio",
        Options: ["ضعيف", "مقبول", "جيد", "جيد جداً", "ممتاز"],
                required: true

      },
      {
        id: 'error_analysis',
        label: "التحليل واكتشاف الأخطاء",
        type: "radio",
        Options: ["ضعيف", "مقبول", "جيد", "جيد جداً", "ممتاز"],
                required: true

      },
      {
        id: 'improvement_skills',
        label: "التطوير والتحسين",
        type: "radio",
        Options: ["ضعيف", "مقبول", "جيد", "جيد جداً", "ممتاز"],
                required: true

      },
      {
        id: 'microsoft_office',
        label: "Microsoft Office",
        type: "radio",
        Options: ["ضعيف", "مقبول", "جيد", "جيد جداً", "ممتاز"],
                required: true

      },
      {
        id: 'google_workspace',
        label: "Google Workspace",
        type: "radio",
        Options: ["ضعيف", "مقبول", "جيد", "جيد جداً", "ممتاز"],
                required: true

      }
    ]
  },

      "مسؤول قسم المحتوى الأكاديمي"  /////////////// ok
  : {
    title: "مسؤول قسم المحتوى الأكاديمي",
    department: "قسم المحتوى الأكاديمي",
    questions: [
      {
        id: 'academic_content_experience',
        label: "هل لديك خبرة في الإشراف أو إنتاج محتوى أكاديمي؟ إذا كانت الإجابة نعم الرجاء ذكر تجربتك وطبيعة عملك",
        type: "textarea",
                    required: true
      },
      {
        id: 'content_quality_strategy',
        label: "اقترح إستراتيجية لتطوير جودة المحتوى الأكاديمي داخل المنصة",
        type: "textarea",
                    required: true
      },
      {
        id: 'sudanese_curriculum_experience',
        label: "هل لديك تجربة في التعامل مع المنهج السوداني للمرحلة الثانوية؟",
        type: "textarea",
                    required: true
      },
      {
        id: 'curriculum_alignment_check',
        label: "كيف تتأكد من موافقة المحتوى مع المنهج السوداني؟",
        type: "textarea",
                    required: true
      },
      {
        id: 'content_review',
        label: "مراجعة وضبط المحتوى الأكاديمي",
        type: "radio",
        Options: ["ضعيف", "مقبول", "جيد", "جيد جداً", "ممتاز"],
                    required: true
      },
      {
        id: 'report_and_plan_preparation',
        label: "إعداد التقارير والخطط التشغيلية",
        type: "radio",
        Options: ["ضعيف", "مقبول", "جيد", "جيد جداً", "ممتاز"],
                    required: true
      },
      {
        id: 'team_management',
        label: "المهارات الإدارية ومتابعة الفريق",
        type: "radio",
        Options: ["ضعيف", "مقبول", "جيد", "جيد جداً", "ممتاز"],
                    required: true
      },
      {
        id: 'digital_tools',
        label: "Google Workspace or Microsoft Office",
        type: "radio",
        Options: ["ضعيف", "مقبول", "جيد", "جيد جداً", "ممتاز"],
                    required: true
      },
      {
        id: 'sudanese_curriculum_role',
        label: "تعاملك مع المنهج السوداني",
        type: "radio",
        Options: ["طالب", "مدرس"],
                    required: true
      }
    ]
  },

      "مسؤول قواعد البيانات"    //////////////// ok
  : {
    title: 'مسؤول قواعد البيانات:',
    department: "قسم المحتوى الأكاديمي",
    questions: [
      {
        id: 'data_analysis_experience_duration',
        label: " هل لديك خبرة في تنظيم أو إدارة قاعدة بيانات؟ الرجاء ذكرها بالسنوات أو الشهور؟ اذا كانت الاجابة نعم صف تجربتك وما الادوات التي استخدمتها",
        type: "textarea",
                    required: true
      },
      {
        id: 'data_analysis_experience_description',
        label: "إذا كانت الإجابة نعم صف تجربتك وما الأدوات التي استخدمتها",
        type: "textarea",
        required: true
      },
      {
        id: 'data_accuracy_maintenance',
        label: "كيف تضمن دقة البيانات عند إدخال أو تحديث معلومات كبيرة؟",
        type: "textarea",
        required: true
      },
      {
        id: 'database_issue_resolution',
        label: "صِف موقفًا واجهت فيه خطأ أو مشكلة في قاعدة بيانات وكيف قمت بحلها",
        type: "textarea",
        required: true
      },
      {
        id: 'data_analysis_for_kpis',
        label: "كيف تقوم بتحليل بيانات الطلاب أو المحتوى لاستخراج مؤشرات الأداء التي تساعد الفرق الأخرى على اتخاذ القرار؟",
        type: "textarea",
        required: true
      },
      {
        id: 'database_improvement_suggestion',
        label: "اقترح طريقة لتحسين تنظيم قاعدة البيانات أو طريقة إعداد التقارير الدورية لضمان سهولة الوصول إليها واستخدامها بكفاءة",
        type: "textarea",
        required: true
      },
      {
        id: 'sql_proficiency_level',
        label: "ما مدى إلمامك بـ لغة SQL للاستعلام عن البيانات وإنشاء قواعد البيانات البسيطة",
        type: "textarea",
        required: true
      },
      {
        id: 'data_organization_method',
        label: "كيف تنظم البيانات بطريقة يسهل الوصول إليها واستخدامها عند الحاجة؟",
        type: "textarea",
        required: true
      },
      {
        id: 'big_data_handling',
        label: "كيف تتعامل مع البيانات الكبيرة دون فقدان الدقة أو التنظيم؟",
        type: "textarea",
        required: true
      },
      {
        id: 'la',
        label: 'ماهو تقييمك في المهارات التالية :'
      },
      {
        id: 'data_entry_accuracy',
        label: "دقة إدخال البيانات وتحديثها",
        type: "radio",
        Options: ["ضعيف", "مقبول", "جيد", "جيد جداً", "ممتاز"],
        required: true
      },
      {
        id: 'report_preparation',
        label: "إعداد التقارير",
        type: "radio",
        Options: ["ضعيف", "مقبول", "جيد", "جيد جداً", "ممتاز"],
        required: true
      },
      {
        id: 'data_analysis_kpis',
        label: "تحليل البيانات واستخلاص مؤشرات الأداء",
        type: "radio",
        Options: ["ضعيف", "مقبول", "جيد", "جيد جداً", "ممتاز"],
        required: true
      },
      {
        id: 'excel_skills',
        label: "Google Sheets or Excel",
        type: "radio",
        Options: ["ضعيف", "مقبول", "جيد", "جيد جداً", "ممتاز"],
        required: true
      },
      {
        id: 'power_bi',
        label: "Power BI",
        type: "radio",
        Options: ["ضعيف", "مقبول", "جيد", "جيد جداً", "ممتاز"],
        required: true
      },
      {
        id: 'python_skills',
        label: "Python",
        type: "radio",
        Options: ["ضعيف", "مقبول", "جيد", "جيد جداً", "ممتاز"],
        required: true
      }
    ]
  },

      "محلل البيانات"      /////////////// ok
  : {
    title: 'محلل البيانات',
    department: "قسم المحتوى الأكاديمي",
    questions: [
      {
        id: 'data_analysis_experience_duration',
        label: "هل لديك خبرة سابقة في تحليل البيانات؟ الرجاء ذكرها بالسنوات أو الشهور",
        type: "textarea",
         required: true

      },
      {
        id: 'data_analysis_tools_used',
        label: "إذا كانت الإجابة نعم اذكر طبيعة عملك وما الأدوات التي استخدمتها",
        type: "textarea",
         required: true
      },
      {
        id: 'data_accuracy_in_analysis',
        label: "كيف تضمن دقة البيانات عند جمعها وإدخالها وتحليلها؟",
        type: "textarea",
         required: true
      },
      {
        id: 'data_presentation_methods',
        label: "كيف تقدم نتائج تحليل البيانات بطريقة سهلة الفهم للفرق الأكاديمية أو الإدارية؟",
        type: "textarea",
         required: true
      },
      {
        id: 'complex_data_handling',
        label: "كيف تتعامل مع البيانات المعقدة والكبيرة؟",
        type: "textarea",
         required: true
      },
      {
        id: 'data_analysis_skills_evaluation',
        label: "إلمامك بالمفاهيم الأساسية للإحصاء وتحليل البيانات",
        type: "radio",
        Options: ["ضعيف", "مقبول", "جيد", "جيد جداً", "ممتاز"],
         required: true
      },
      {
        id: 'data_interpretation',
        label: "القدرة على تفسير البيانات وعرض النتائج بطريقة مفهومة",
        type: "radio",
        Options: ["ضعيف", "مقبول", "جيد", "جيد جداً", "ممتاز"],
         required: true
      },
      {
        id: 'analytical_reporting',
        label: "إعداد تقارير تحليلية دورية تساعد على تحسين الأداء",
        type: "radio",
        Options: ["ضعيف", "مقبول", "جيد", "جيد جداً", "ممتاز"],
         required: true
      },
      {
        id: 'teamwork_1',
        label: "العمل الجماعي والتعاون",
        type: "radio",
        Options: ["ضعيف", "مقبول", "جيد", "جيد جداً", "ممتاز"],
         required: true
      },
      {
        id: 'excel_skills_1',
        label: "Google Sheets or Excel",
        type: "radio",
        Options: ["ضعيف", "مقبول", "جيد", "جيد جداً", "ممتاز"],
         required: true
      }
    ]
  },

      "مسؤول / نائب مسؤول قسم المشاريع"   ////////// ok
  : {
    title: 'مسؤول / نائب مسؤول قسم المشاريع',
    department: "قسم المشاريع",
    questions: [
      {
        id: 'project_example_supervised',
        label: "اذكر مثال لمشروع قمت باقتراحه والإشراف على تنفيذه",
        type: "textarea",
         required: true
      },
      {
        id: 'project_followup_experience',
        label: "صِف تجربة سابقة لك في متابعة مشروع أو فريق، وكيف ساهمت في تحقيق أهدافه",
        type: "textarea",
         required: true
      },
      {
        id: 'project_delay_handling',
        label: "كيف تتعامل مع تأخير أو مشاكل مفاجئة في تنفيذ المشروع؟",
        type: "textarea",
         required: true
      },
      {
        id: 'project_improvement_suggestion',
        label: "اقترح طريقة لتحسين آلية متابعة المشاريع وضمان جودة تنفيذ الخطط داخل الفريق",
        type: "textarea",
         required: true
      },
      {
        id: 'project_reporting_method',
        label: "كيف تقوم بإعداد تقارير واضحة ومفهومة للمسؤولين والجهات العليا؟",
        type: "textarea",
         required: true
      },
      {
        id: 'project_quality_control',
        label: "كيف تراقب جودة المخرجات والتأكد من الالتزام بالمعايير؟",
        type: "textarea",
         required: true
      },
      {
        id: 'l',
        label: 'قيم نفسك في التالي'
      },
      {
        id: 'time_management_1',
        label: "تنظيم الوقت وإدارة الأولويات",
        type: "radio",
        Options: ["ضعيف", "مقبول", "جيد", "جيد جداً", "ممتاز"],
         required: true
      },
      {
        id: 'team_coordination1',
        label: "التنسيق مع الفرق المختلفة",
        type: "radio",
        Options: ["ضعيف", "مقبول", "جيد", "جيد جداً", "ممتاز"],
         required: true
      },
      {
        id: 'leadership',
        label: "مهارة القيادة",
        type: "radio",
        Options: ["ضعيف", "مقبول", "جيد", "جيد جداً", "ممتاز"],
         required: true
      },
      {
        id: 'problem_solving1',
        label: "حل المشكلات والأزمات",
        type: "radio",
        Options: ["ضعيف", "مقبول", "جيد", "جيد جداً", "ممتاز"],
         required: true
      },
      {
        id: 'creativity',
        label: "التفكير الإبداعي",
        type: "radio",
        Options: ["ضعيف", "مقبول", "جيد", "جيد جداً", "ممتاز"],
         required: true
      },
      {
        id: 'teamwork1',
        label: "العمل الجماعي والتعاون",
        type: "radio",
        Options: ["ضعيف", "مقبول", "جيد", "جيد جداً", "ممتاز"],
         required: true
      },
      {
        id: 'tech_tools_skills',
        label: "Google Workspace or Microsoft Office",
        type: "radio",
        Options: ["ضعيف", "مقبول", "جيد", "جيد جداً", "ممتاز"],
         required: true
      },
      {
        id: "p",
        label: "التعامل مع الخطط التشغيلية وإعدادها وتحديثها",
        type: "radio",
        Options: ["لدي خبرة في ذلك وقمت بذلك من قبل", "ليس لدي خبرة ولم أتعامل مع ذلك", "أخرى"],
         required: true
      }
    ]
  },

      "عضو قسم المشاريع"   ////////////// ok
  : {
    title:'عضو قسم المشاريع',
    department: "قسم المشاريع",
    questions: [
      {
        id: "diffe_meth",
        label: "كيف تتعامل مع تأخير أو صعوبة في إتمام مهمة محددة ضمن المشروع؟",
        type: "textarea",
                 required: true

      },
      {
        id: "idea_meth",
        label: "كيف تقدم الاقتراحات لتطوير أداء المشروع أو الفريق بطريقة فعّالة؟",
        type: "textarea",
                 required: true

      },
      {
        id: "challenge_meth",
        label: "صِف موقفًا واجهت فيه تحديًا أثناء العمل ضمن الفريق، وكيف تعاملت معه للحفاظ على سير المشروع",
        type: "textarea",
                 required: true

      },
      {
        id: 'co_dev',
        label: "اقترح طريقة لتعزيز التعاون بين أعضاء الفريق وضمان تنفيذ المهام بدقة وفي الوقت المحدد",
        type: "textarea",
                 required: true

      }
    ]
  },

      "عضو البرامج الميدانية"     ///////////// ok
  : {
    title: 'عضو البرامج الميدانية',
    department: "البرامج الميدانية",
    questions: [
      {
        id: 'field_program_experience',
        label: "هل لديك تجربة سابقة في تنفيذ برنامج ميداني، وما كانت مساهمتك الأساسية؟",
        type: "textarea",
                 required: true

      },
      {
        id: 'field_problem_solving',
        label: "كيف تتعامل مع مشكلة ميدانية أو عائق أثناء تنفيذ النشاط؟",
        type: "textarea",
                 required: true

      },
      {
        id: 'field_data_collection',
        label: "كيف تقوم بجمع البيانات والتقارير الميدانية بطريقة دقيقة وفعّالة؟",
        type: "textarea",
                 required: true

      },
      {
        id: 'field_teamwork_example',
        label: "صِف موقفًا عملت فيه ضمن فريق ميداني وتعاونت مع الآخرين لضمان نجاح البرنامج",
        type: "textarea",
                 required: true

      },
      {
        id: 'field_activity_improvement',
        label: "اقترح طريقة لتحسين تنظيم وتنفيذ الأنشطة الميدانية لضمان تجربة أفضل للمستفيدين",
        type: "textarea",
                 required: true

      },
      {
        id: 'field_logistics_experience',
        label: "ما هي خبرتك في الدعم اللوجستي وتنظيم المواقع الميدانية قبل التنفيذ؟",
        type: "textarea",
                 required: true

      },
      {
        id: 'field_data_documentation',
        label: "كيف تقوم بجمع البيانات والتقارير وتوثيق الصور؟",
        type: "textarea",
                 required: true

      }
    ]
  },

      "مسؤول / نائب مسؤول قسم المجتمع"   ///////ok
  : {
    title: 'مسؤول / نائب مسؤول قسم المجتمع',
    department: "قسم مجتمع قمم",
    questions: [
      {
        id: 'community_leadership_experience',
        label: "صف تجربة سابقة لك في إدارة مجتمع أو مبادرة طلابية، وما كانت مساهمتك الأساسية",
        type: "textarea",
         required: true
      },
      {
        id: 'community_motivation_method',
        label: "كيف تقوم بتحفيز الأعضاء على المشاركة الفعّالة في الأنشطة والمبادرات؟",
        type: "textarea",
         required: true
      },
      {
        id: 'community_engagement_tracking',
        label: "كيف تقوم بمتابعة المشاركات والتفاعل اليومي للأعضاء داخل مجتمع قمم؟",
        type: "textarea",
         required: true
      },
      {
        id: 'community_activity_coordination',
        label: "كيف تقوم بتنسيق الأنشطة والفعاليات بين أعضاء الفريق لضمان نجاحها؟",
        type: "textarea",
         required: true
      },
      {
        id: 'community_low_engagement_handling',
        label: "كيف تتعامل مع قلة التفاعل أو المشاركة من الأعضاء داخل المنصة؟",
        type: "textarea",
         required: true
      },
      {
        id: 'community_emergency_handling',
        label: "كيف ستتعامل مع المشكلات اليومية والطارئة أثناء الأنشطة والنقاشات؟",
        type: "textarea",
         required: true
      },
      {
        id: 'community_feedback_management',
        label: "كيف تقوم بجمع الملاحظات من الأعضاء وتحويلها إلى أفكار قابلة للتنفيذ لتحسين البرامج؟",
        type: "textarea",
         required: true
      },
      {
        id: 'community_initiative_evaluation',
        label: "كيف تقيم نتائج المبادرات داخل مجتمع قمم والاستفادة منها لتطوير البرامج؟",
        type: "textarea",
         required: true
      },
      {
        id: 'community_improvement_suggestion',
        label: "اقترح طريقة لتطوير مجتمع قمم وتحسين تجربة الأعضاء وزيادة تفاعلهم",
        type: "textarea",
         required: true
      }
    ]
  },

      "عضو قسم المجتمع"      //////////// ok
  : {
    title:  "عضو قسم المجتمع",
    questions: [
      {
        id: 'member_activity_experience',
        label: 'هل لديك خبرة في التعامل مع النشاطات والمجتمعات الطلابية؟ إذا كانت الإجابة نعم الرجاء ذكر مهامك ودورك الذي قمت به؟',
        type: 'textarea',
        required: true
      },
      {
        id: 'member_participation_encouragement',
        label: 'كيف تشجع الطلاب أو الأعضاء على المشاركة في الأنشطة والفعاليات؟',
        type: 'textarea',
        required: true
      },
      {
        id: 'member_event_support',
        label: 'كيف تقوم بمساعدة الفريق في تنظيم الفعاليات وضمان سيرها بسلاسة؟',
        type: 'textarea',
        required: true
      },
      {
        id: 'member_interaction_improvement',
        label: 'اقترح طريقة لتحسين التفاعل داخل مجتمع قمم وتجربة الأعضاء داخل المنصة.',
        type: 'textarea',
        required: true
      },
      {
        id: 'commitment_flexible',
        label: 'هل تستطيع الالتزام بتنفيذ والمشاركة في المبادرات التي سينظمها مجتمع قمم؟ ',
        type: 'radio',
        Options: ['نعم استطيع الالتزام دائما','لا أستطيع الالتزام','نعم مع بعض المرونة']
      }
    ]
  },

  //////////////////////  new add ///////////

  
  "نائب مسؤول قسم النوادي"  ///////// ok 
  : {
    title: "نائب مسؤول قسم النوادي",
    questions: [
      {
        id: "clubs_deputy_previous_experience",
        label: 'هل لديك تجربة سابقة في الإشراف أو إدارة فرق عمل نوادٍ طلابية أو تطوعية؟ إذا كانت الإجابة نعم، حدثنا عنها وعن تفاصيلها والتحديات التي واجهتها.',
        type: 'textarea',
        required: true
      },
      {
        id: "clubs_deputy_multitasking_style",
        label: 'كيف تتعامل مع بيئة متعددة الفقر والمشاريع في وقت واحد؟',
        type: 'textarea',
        required: true
      },
      {
        id: "clubs_deputy_motivation",
        label: 'ما الذي جذبك تحديداً لهذا الدور كنائب مسؤول قسم النوادي؟',
        type: 'textarea',
        required: true
      },
      {
        id: "clubs_deputy_monthly_followup",
        label: 'كيف تتابع تنفيذ الخطط الشهرية وتضمن التزام الجميع بها؟',
        type: 'textarea',
        required: true
      },
      {
        id: "clubs_deputy_report_preparation",
        label: 'ما طريقتك في إعداد التقارير الإدارية ومراجعتها قبل رفعها للإدارة العليا؟',
        type: 'textarea',
        required: true
      },
      {
        id: "clubs_deputy_meeting_documentation",
        label: 'صِف آلية فعّالة لتوثيق نتائج الاجتماعات الإدارية.',
        type: 'textarea',
        required: true
      },
      {
        id: "clubs_deputy_delay_handling",
        label: 'كيف تتصرف إذا لاحظت تأخر أحد النوادي في تنفيذ مهامه أو تقاريره؟',
        type: 'textarea',
        required: true
      },
      {
        id: "clubs_deputy_tools_used",
        label: 'ما الأدوات أو البرامج التي تستخدمها في إدارة وتنظيم الأعمال والمتابعة؟',
        type: 'checkbox',
        Options: ['Notion', 'Trello', 'Google Workspace', 'ClickUp', 'Microsoft Office', 'أخرى (يرجى التحديد)'],
        required: true
      },
      {
        id: "clubs_deputy_suggestions",
        label: 'ما اقتراحاتك لتطوير عمل النوادي من وجهة نظر فاعليتها؟',
        type: 'textarea',
        required: true
      },
      {
        id: "clubs_deputy_delay_solution",
        label: 'واجهت مؤخراً تأخراً متكرراً في رفع التقارير الشهرية - ما خطتك لمعالجة ذلك؟',
        type: 'textarea',
        required: true
      },
      {
        id: "a",
        label: 'إضافة أو تعليق',
        type: 'text',
        required: false
      }
    ]
  },

  "مسؤول الصفحات الإعلامية"    ///////////// ok
  : {
    title: "مسؤول الصفحات الإعلامية",
    questions: [
      {
        id: "w",
        label: ' هل سبق أن عملت على وضع خطة محتوى شهرية؟ إذا كانت الإجابة نعم، كيف تحدد نوع المحتوى المناسب لكل منصة؟',
        type: 'textarea',
        required: true
      },
      
      {
        id: "media_manager_kpis",
        label: 'ما أهم مؤشرات الأداء (KPIs) التي تتابعها لتقييم نجاح الحسابات الإعلامية؟',
        type: 'checkbox',
        Options: ['معدل التفاعل (Engagement Rate)', 'عدد المتابعين الجدد', 'الوصول (Reach)', 'معدل النقر (CTR)', 'أخرى (يرجى التحديد)'],
        required: true
      },
      {
        id: "media_manager_analytics_tools",
        label: 'ما الأدوات التي تستخدمها لمتابعة التحليلات والإحصاءات؟',
        type: 'checkbox',
        Options: ['Meta Insights', 'Google Analytics', 'أخرى (يرجى التحديد)'],
        required: true
      },
      {
        id: "media_manager_reporting_experience",
        label: 'هل لديك خبرة في إعداد تقارير دورية للإدارة؟ إذا كانت الإجابة نعم، صِف طريقة عرضك لها.',
        type: 'textarea',
        required: true
      },
      {
        id: "media_manager_low_engagement_handling",
        label: 'كيف تتعامل مع حالات انخفاض التفاعل في المنصات؟',
        type: 'textarea',
        required: true
      },
      {
        id: "media_manager_copywriting_skill",
        label: 'هل تجيد كتابة العناوين الجاذبة أو صياغة نصوص ترويجية؟ أعطِ مثالاً عملياً.',
        type: 'textarea',
        required: true
      },
      {
        id: "r",
        label: 'ما الطريقة المناسبة للرد على استفسارات الجمهور ولضمان صورة احترافية؟',
        type: 'textarea',
        required: true
      },
      {
        id: "media_manager_handling_abuse",
        label: 'إذا واجهت إساءة لفظية في التعليقات، كيف تتصرف؟',
        type: 'textarea',
        required: true
      },
      {
        id: "media_manager_delete_comment_policy",
        label: 'هل ترى أنه من المناسب حذف بعض التعليقات؟ متى؟ ولماذا؟',
        type: 'textarea',
        required: true
      },
      {
        id: "media_manager_idea_generation",
        label: 'كيف تقترح أفكاراً جديدة للفريق؟',
        type: 'textarea',
        required: true
      },
      {
        id: "media_manager_identity_balance",
        label: 'كيف توازن بين الجاذبية الإعلامية والمحافظة على الهوية النادي؟',
        type: 'textarea',
        required: true
      },
      {
        id: "b",
        label: 'إضافة أو تعليق',
        type: 'text',
        required: false
      }
    ]
  },

  "النادي الإنجليزي - منسق فعاليات"  /////////////// ok 
  : {
    title: "النادي الإنجليزي - منسق فعاليات",
    questions: [
      {
        id: "english_club_events_experience",
        label: ' هل لديك خبرة سابقة في تنسيق أو تنظيم فعاليات أو برامج؟ إذا كانت الإجابة نعم، اذكر تجربتك.',
        type: 'textarea',
        required: true
      },
      {
        id: "english_club_event_types",
        label: 'ما أنواع الفعاليات أو الأنشطة التي سبق أن نسقتها؟',
        type: 'checkbox',
        Options: ['كورسات', 'ورش', 'مؤتمرات', 'جلسات نقاش', 'أخرى (يرجى التحديد)'],
        required: true
      },
      {
        id: "english_club_pressure_handling",
        label: 'كيف تتعامل مع ضغوط العمل عند إدارة أكثر من فعالية في وقت واحد؟',
        type: 'textarea',
        required: true
      },
      {
        id: "english_club_timeline_planning",
        label: 'كيف تضع الجدول الزمني للفعاليات وتوزع المهام على الفريق؟',
        type: 'textarea',
        required: true
      },
      {
        id: "english_club_coordination_tools",
        label: 'ما الأدوات أو البرامج التي تستخدمها لتنسيق المهام ومتابعتها؟',
        type: 'checkbox',
        Options: ['Trello', 'Notion', 'Google Sheets', 'ClickUp', 'أخرى (يرجى التحديد)'],
        required: true
      },
      {
        id: "english_club_member_followup",
        label: 'كيف تضمن التزام الأعضاء بالأدوار المحددة والمهام المطلوبة منهم؟',
        type: 'textarea',
        required: true
      },
      {
        id: "english_club_event_report_elements",
        label: 'ما العناصر التي تتضمنها عادةً في التقرير بعد الفعالية؟',
        type: 'textarea',
        required: true
      },
      {
        id: "english_club_improvement_method",
        label: 'كيف تستخدم الملاحظات والتحديات لتحسين الفعاليات المستقبلية؟',
        type: 'textarea',
        required: true
      },
      {
        id: "c",
        label: 'إضافة أو تعليق',
        type: 'text',
        required: false
      }
    ]
  },

  "النادي الفكري والثقافة"  /////////// ok 
  : {
    title: "النادي الفكري والثقافة - مسؤول العضوية والمتابعة",
    questions: [
      {
        id: "culture_club_membership_background",
        label: 'ما علاقتك بمجال الأدب والثقافة؟ وكيف يمكن أن تفيد هذه الخلفية في عملك؟',
        type: 'textarea',
        required: true
      },
      {
        id: "culture_club_membership_experience",
        label: ' هل سبق أن عملت في مجال إدارة أو متابعة الأعضاء أو الفرق صف تجربتك(مثل HR أو العلاقات العامة)؟',
        type: 'textarea',
        required: true
      },
       
      {
        id: "culture_club_tracking_methods",
        label: 'ما الأساليب التي تستخدمها لمتابعة وحضور أداء الأعضاء بشكل منتظم؟',
        type: 'textarea',
        required: true
      },
      {
        id: "culture_club_member_evaluation",
        label: 'كيف تُقيّم أداء الأفراد وتتعامل مع نقاط الضعف أو التراجع لديهم؟',
        type: 'textarea',
        required: true
      },
      {
        id: "culture_club_motivation_style",
        label: 'كيف تُحفّز الفريق وتزيد من التزامهم واستمراريتهم؟',
        type: 'textarea',
        required: true
      },
      {
        id: "culture_club_uncooperative_member",
        label: 'كيف تتعامل مع عضو غير متعاون أو متغيب باستمرار؟',
        type: 'textarea',
        required: true
      },
      {
        id: "culture_club_progress_documentation",
        label: 'كيف تتابع تقدّم الفريق لكل عضو وتوثّقه؟',
        type: 'textarea',
        required: true
      },
      {
        id: "culture_club_conflict_resolution",
        label: 'حدثنا عن موقف واجهت فيه مشكلة بين أعضاء الفريق. كيف قمت بحلّها؟',
        type: 'textarea',
        required: true
      },
      {
        id: "culture_club_conflict_strategy",
        label: 'ما منهجك في التعامل مع النزاعات بطريقة تحفظ روح التعاون داخل النادي؟',
        type: 'textarea',
        required: true
      },
      {
        id: 'd',
        label: 'إضافة أو تعليق',
        type: 'text',
        required: false
      }
    ]
  },

  "مسؤول قسم القراءة"   ////////////// ok 
  : {
    title: "مسؤول قسم القراءة",
    questions: [
      {
        id: "reading_club_preferred_books",
        label: 'ما نوع الكتب التي تفضل قراءتها؟',
        type: 'checkbox',
        Options: ['فكر', 'تاريخ', 'رواية', 'أدب', 'سياسة', 'أخرى (يرجى التحديد)'],
        required: true
      },
      {
        id: "reading_club_experience",
        label: 'هل سبق أن شاركت في نادٍ للقراءة أو أدرت جلسة مناقشة كتاب؟ صف التجربة.',
        type: 'textarea',
        required: true
      },
      {
        id: "reading_club_selection_method",
        label: 'كيف تختار الكتب المناسبة لجلسات القراءة الجماعية؟',
        type: 'textarea',
        required: true
      },
      {
        id: "reading_club_summary_experience",
        label: 'احكِ لنا عن تجربة قمت فيها بتلخيص كتاب.',
        type: 'textarea',
        required: true
      },
      {
        id: "reading_club_summary_quality",
        label: 'برأيك، ما الفرق بين التلخيص الجيد والتلخيص السطحي؟',
        type: 'textarea',
        required: true
      },
      {
        id: "reading_club_argument_handling",
        label: 'ماذا تفعل إذا تحول النقاش حول كتاب إلى جدال شخصي بين الأعضاء؟',
        type: 'textarea',
        required: true
      },
      {
        id: "reading_club_engagement_methods",
        label: 'ما الطرق التي تستخدمها للحفاظ على حيوية الجلسة وعدم انحرافها عن الموضوع؟',
        type: 'textarea',
        required: true
      },
      {
        id: "reading_club_session_steps",
        label: 'ما خطواتك لتنظيم جلسة قراءة ناجحة من البداية إلى النهاية؟',
        type: 'textarea',
        required: true
      },
      {
        id: "reading_club_engaging_activities",
        label: 'كيف يمكن جعل أنشطة القراءة ممتعة وجاذبة للأعضاء الجدد؟',
        type: 'textarea',
        required: true
      },
      {
        id: "reading_club_tools",
        label: 'ما الأدوات أو التقنيات التي تستخدمها لتنسيق الجلسات أو متابعة تلخيص الكتب؟',
        type: 'textarea',
        required: true
      },
      {
        id: "reading_club_development_ideas",
        label: 'هل لديك أفكار لتطوير قسم القراءة أو توسيع تأثيره على مستوى الفريق أو المؤسسة؟',
        type: 'textarea',
        required: true
      },
      {
        id: "f",
        label: 'إضافة أو تعليق',
        type: 'text',
        required: false
      }
    ]
  },

  "مسؤول القسم الأدبي"   //////////////// ok 
  : {
    title: "مسؤول القسم الأدبي",
    questions: [
      {
        id: "literature_club_why_fit",
        label: 'ما الذي يجعلك مناسباً لتولي مسؤولية القسم الأدبي؟',
        type: 'textarea',
        required: true
      },
      {
        id: "literature_club_fields",
        label: 'ما المجالات الأدبية التي تجيدها أو تقرأ عنها باستمرار؟',
        type: 'checkbox',
        Options: ['شعر', 'قصة قصيرة', 'رواية', 'نقد أدبي', 'أدب ساخر', 'أخرى (يرجى التحديد)'],
        required: true
      },
      {
        id: "literature_club_influences",
        label: 'من أبرز الأدباء الذين أثروا فيك فكرياً وأسلوبياً؟',
        type: 'textarea',
        required: true
      },
      {
        id: "literature_club_session_planning",
        label: 'كيف تنظم جلسة أدبية وما العناصر التي تراها ضرورية لإنجاح فعالية أدبية؟',
        type: 'textarea',
        required: true
      },
      {
        id: "literature_club_low_engagement",
        label: 'كيف تتعامل مع ضعف التفاعل أو قلة الحضور في البرامج الأدبية؟',
        type: 'textarea',
        required: true
      },
      {
        id: "literature_club_event_types",
        label: 'ما نوع الفعاليات التي تراها مفيدة لتوسيع شبكة العلاقات الأدبية للنادي؟',
        type: 'textarea',
        required: true
      },
      {
        id: "literature_club_content_selection",
        label: 'كيف تختار المواضيع أو النصوص التي يمكن عرضها عبر الإعلام؟',
        type: 'textarea',
        required: true
      },
      {
        id: "literature_club_report_preparation",
        label: 'كيف تقوم بإعداد أو كتابة تقارير أدبية، أو نصوص إعلامية أدبية؟',
        type: 'textarea',
        required: true
      },
      {
        id: "literature_club_cancellation_handling",
        label: 'لو تم إلغاء فعالية أدبية قبل موعدها بيوم، ما خطواتك السريعة للتعامل مع الموقف؟',
        type: 'textarea',
        required: true
      },
      {
        id: "literature_club_quality_issue",
        label: 'إذا قدّم أحد المشاركين مادة أدبية دون التزام بمعايير، كيف تتصرف؟',
        type: 'textarea',
        required: true
      },
      {
        id: "literature_club_writer_support",
        label: 'كيف تتعامل مع شاعر أو كاتب يشعر أن النادي لا يمنحه التقدير الكافي؟',
        type: 'textarea',
        required: true
      },
      {
        id: "literature_club_program_planning",
        label: 'طُلب منك إعداد برنامج أدبي خلال أسبوع - كيف تخطط له؟',
        type: 'textarea',
        required: true
      },
      {
        id: "literature_club_criticism_response",
        label: 'إذا واجهت انتقادات حول اختيار مواضيع الفعاليات، كيف ترد وتتعامل معها؟',
        type: 'textarea',
        required: true
      },
      {
        id: "f",
        label: 'إضافة أو تعليق',
        type: 'text',
        required: false
      }
    ]
  },

  "النادي الديني - نائب مسؤول القسم الشرعي"   ///////// ok 
  : {
    title: "النادي الديني - نائب مسؤول القسم الشرعي",
    questions: [
      {
        id: "sharia_studies_background",
        label: 'ما العلوم الشرعية التي تعلمتها أو تلقيت فيها تعليم منهجي منتظم؟',
        type: 'checkbox',
        Options: ['عقيدة', 'فقه', 'أصول', 'تفسير', 'حديث', 'سيرة نبوية', 'علوم القرآن', 'أخرى (يرجى التحديد)'],
        required: true
      },
      {
        id: "sharia_programs_development_vision",
        label: 'ما رؤيتك لتطوير البرامج العلمية داخل النادي الديني؟',
        type: 'textarea',
        required: true
      },
      {
        id: "sharia_disagreement_handling",
        label: 'كيف تتعامل مع اختلاف وجهات النظر الشرعية بين الأعضاء أو المشايخ؟',
        type: 'textarea',
        required: true
      },
      {
        id: "sharia_activity_experience",
        label: 'اذكر موقفاً شاركت فيه في نشاط شرعي سابق، وما الذي تعلمته منه؟',
        type: 'textarea',
        required: true
      },
      {
        id: "sharia_programs_for_youth",
        label: 'ما نوع الدروس أو البرامج التي ترى أنها تجذب الشباب أكثر إلى العلم الشرعي؟',
        type: 'textarea',
        required: true
      },
      {
        id: "sharia_life_application",
        label: 'كيف يمكن برأيك ربط العلم الشرعي بالحياة اليومية للطلاب في القمم؟',
        type: 'textarea',
        required: true
      },
      {
        id: "sharia_teamwork_skill",
        label: 'ما مدى مهارتك في التواصل والعمل بروح الفريق داخل النادي؟',
        type: 'radio',
        Options: ['1 - ضعيف', '2 - متوسط', '3 - جيد', '4 - ممتاز'],
        required: true
      },
      {
        id: "sharia_program_evaluation",
        label: 'كيف تقوم بتقييم البرامج العلمية واقتراح طرق لتطويرها؟',
        type: 'textarea',
        required: true
      },
      {
        id: "sharia_plans_reports",
        label: 'كيف تقوم بإعداد الخطط والتقارير الخاصة بالقيم؟',
        type: 'textarea',
        required: true
      },
      {
        id: "sharia_current_programs",
        label: 'هل أنت ملتحق ببرنامج علمي إلكتروني أو على أرض الواقع؟ إذا كانت الإجابة نعم، يرجى ذكر البرامج التي تخرجت منها أو أنت ملتحق بها الآن.',
        type: 'textarea',
        required: true
      },
      {
        id: "g",
        label: 'إضافة أو تعليق',
        type: 'text',
        required: false
      }
    ]
  },

  "مشرف القسم الشرعي"       ////////////// ok 
  : {
    title: "مشرف القسم الشرعي",
    questions: [
      {
        id: "sharia_supervision_experience",
        label: 'هل لديك تجربة سابقة في الإشراف على أنشطة أو برامج شرعية؟',
        type: 'radio',
        Options: ['نعم', 'لا'],
        required: true
      },
      {
        id: "sharia_content_quality_method",
        label: 'ما الطريقة التي تتبعها لضمان جودة المحتوى العلمي في الدورات الشرعية؟',
        type: 'textarea',
        required: true
      },
      {
        id: "sharia_tech_utilization",
        label: 'كيف يمكن برأيك توظيف التقنية لخدمة القسم الشرعي وتطوير أدائه؟',
        type: 'textarea',
        required: true
      },
      {
        id: "sharia_section_development_vision",
        label: 'ما رؤيتك لتطوير قسم العلم الشرعي؟',
        type: 'textarea',
        required: true
      },
      {
        id: "sharia_fiqh_disagreement_handling",
        label: 'كيف تتعامل مع الاختلافات الفقهية أو الفكرية داخل الفريق أو بين الطلاب؟',
        type: 'textarea',
        required: true
      },
      {
        id: "sharia_programs_analysis",
        label: 'كيف تقوم بتحليل وتقييم أداء البرامج وكتابة الملاحظات التطويرية؟',
        type: 'textarea',
        required: true
      },
      {
        id: "sharia_reporting_process",
        label: 'كيف تكتب التقارير التفصيلية وترفعها للإدارة بانتظام؟',
        type: 'textarea',
        required: true
      },
      {
        id: "sharia_operational_planning",
        label: 'كيف تقوم بإعداد الخطط التشغيلية وتنظيم الأنشطة الشرعية؟',
        type: 'textarea',
        required: true
      },
      {
        id: "sharia_education_fields",
        label: 'ما العلوم الشرعية التي تعلمتها أو تلقيت فيها تعليم منهجي منتظم؟',
        type: 'checkbox',
        Options: ['عقيدة', 'فقه', 'أصول الفقه', 'أصول', 'تفسير', 'حديث', 'سيرة نبوية', 'علوم القرآن', 'أخرى (يرجى التحديد)'],
        required: true
      },
      {
        id: "h",
        label: 'إضافة أو تعليق',
        type: 'text',
        required: false
      }
    ]
  },


  "نائب قسم المحتوى التوجيهي"    ////////////// ok 
  : {
    title: "نائب قسم المحتوى التوجيهي",
    questions: [
      {
        id: "guidance_content_interest_reason",
        label: 'ما الذي جذبك للتقديم على منصب نائب مسؤول قسم المحتوى التوجيهي تحديداً؟',
        type: 'textarea',
        required: true
      },
      {
        id: "guidance_content_alignment",
        label: 'كيف تضمن أن المحتوى متوافق مع أهداف القسم والفئة المستهدفة؟',
        type: 'textarea',
        required: true
      },
      {
        id: "guidance_review_focus",
        label: 'عند مراجعة نص توجيهي، ما الجوانب الأساسية التي تركز عليها؟',
        type: 'textarea',
        required: true
      },
      {
        id: "guidance_multitasking_skills",
        label: 'كيف تتعامل مع أكثر من مشروع في وقت واحد دون فقدان التركيز أو التنظم',
        type: 'textarea',
        required: true
      },
      {
        id: "guidance_tools_familiarity",
        label: 'ما مدى إلمامك بأدوات مثل Notion، Trello، Google Workspace، ClickUp؟',
        type: 'radio',
        Options: ['1 - ضعيف', '2 - متوسط', '3 - جيد', '4 - ممتاز'],
        required: true
      },
      {
        id: "guidance_new_initiatives",
        label: 'كيف يمكن تطوير مبادرات جديدة داخل القسم لزيادة الأثر التوجيهي؟',
        type: 'textarea',
        required: true
      },
      {
        id: "guidance_content_alignment_2",
        label: 'كيف تضمن أن المحتوى متوافق مع أهداف القسم والفئة المستهدفة؟',
        type: 'textarea',
        required: true
      },
      {
        id: "i",
        label: 'إضافة أو تعليق',
        type: 'text',
        required: false
      }
    ]
  },

  "مسؤول ضبط الجودة"     ///////////////// ok 
  : {
        title: "مسؤول ضبط الجودة",
        questions: [
        {
        id: "qa_common_errors",
        label: 'ما أبرز أنواع الأخطاء التي تركز عليها عند مراجعة المحتوى الأكاديمي؟',
        type: 'checkbox',
        Options: ['أخطاء إملائية', 'أخطاء نحوية', 'أخطاء في علامات الترقيم', 'أخطاء في التنسيق', 'أخطاء في المحتوى العلمي', 'أخرى (يرجى التحديد)'],
        required: true
        },
        {
        id: "qa_review_methodology",
        label: 'صِف منهجيتك في مراجعة النصوص لضمان جودة المحتوى لغوياً وأكاديمياً.',
        type: 'textarea',
        required: true
        },
        {
        id: "qa_linguistic_vs_academic",
        label: 'ما الفرق بين المراجعة اللغوية والتحرير الأكاديمي؟ وكيف تتعامل مع كل نوع؟',
        type: 'textarea',
        required: true
        },
        {
        id: "qa_tools_used",
        label: 'ما الأدوات أو البرامج التي تستخدمها في عمليات المراجعة وضبط الجودة؟',
        type: 'checkbox',
        Options: ['Grammarly', 'Antidote', 'Microsoft Word', 'أخرى (يرجى التحديد)'],
        required: true
        },
        {
        id: "qa_term_handling",
        label: 'كيف تتعامل مع المصطلحات العلمية التي تختلف ترجمتها أو استخدامها بين التخصصات؟',
        type: 'textarea',
        required: true
        },
        {
        id: "qa_quality_manual_experience",
        label: 'هل سبق أن أعددت دليل ضبط جودة أو معايير مراجعة؟ صف تجربتك',
        type: 'textarea',
        required: true
        },
        {
        id: "qa_team_consistency",
        label: 'كيف تضمن توحيد الأسلوب والمنهج بين أفراد فريق الكتابة؟',
        type: 'textarea',
        required: true
        },
        {
        id: "qa_academic_text_steps",
        label: 'عند مراجعة نص أكاديمي، ما الخطوات التي تتبعها للتحقق من سلامته اللغوية؟',
        type: 'textarea',
        required: true
        },
        {
        id: "qa_quality_standards_application",
        label: 'كيف تضمن أن المحتوى الذي تراجعه متوافق مع معايير الجودة المحددة للمؤسسة؟',
        type: 'textarea',
        required: true
        },
        {
        id: "qa_quality_indicators",
        label: 'ما أهم المؤشرات التي تستخدمها لقياس جودة المحتوى الأكاديمي؟',
        type: 'textarea',
        required: true
        },
        {
        id: "qa_feedback_reports",
        label: 'كيف تقوم بإعداد تقارير الملاحظات للفريق؟ وما العناصر التي تحرص على تضمينها؟',
        type: 'textarea',
        required: true
        },
        {
        id: "qa_management_tools",
        label: 'ما الأدوات أو الأساليب التي تفضل استخدامها في إدارة عملية ضبط الجودة ومتابعتها؟',
        type: 'textarea',
        required: true
        },
        {
        id: "j",
        label: 'إضافة أو تعليق',
        type: 'text',
        required: false
        }
        ]
  },

  "مشرف تحديات المسار العلمي/الأدبي"   ///////////// ok 
  : {
        title: "مشرف تحديات المسار العلمي/الأدبي",
        questions: [
        {
        id: "challenge_grade12_knowledge",
        label: 'هل لديك معرفة بمواد الصف الثالث الثانوي؟',
        type: 'radio',
        Options: ['نعم', 'لا'],
        required: true
        },
        {
        id: "challenge_engagement_method",
        label: 'ما الأسلوب الذي تستخدمه لجعل الطلاب يتفاعلون مع أسئلة المراجعة العلمية ويشعرون بحماس لحلها؟',
        type: 'textarea',
        required: true
        },
        {
        id: "challenge_low_engagement_solution",
        label: 'تخيّل أنك لاحظت ضعف تفاعل الطلاب في أسبوع معين، ما الخطوات التي تتخذها لمعالجة ذلك؟',
        type: 'textarea',
        required: true
        },
        {
        id: "challenge_supervisor_traits",
        label: 'برأيك، ما الصفات التي تميز مشرف التحديات العلمي الناجح عن غيره؟',
        type: 'textarea',
        required: true
        },
        {
        id: "challenge_wrong_answers_handling",
        label: 'كيف تتعامل مع طالب يكرر الإجابات الخاطئة رغم التوجيه؟',
        type: 'textarea',
        required: true
        },
        {
        id: "challenge_smart_review_knowledge",
        label: 'ما مدى إلمامك بأساليب المراجعة الذكية لتحفيز الطلاب على التفكير التحليلي؟',
        type: 'radio',
        Options: ['1 - ضعيف', '2 - متوسط', '3 - جيد', '4 - ممتاز'],
        required: true
        },
        {
        id: "challenge_discussion_followup",
        label: 'كيف تقوم بمتابعة النقاشات الطلابية وتحفيز المشاركة العلمية؟',
        type: 'textarea',
        required: true
        },
        {
        id: "challenge_new_idea",
        label: 'اقترح فكرة أو مبادرة جديدة يمكن أن تجعل التحديات أكثر جاذبية وتشويقاً للطلاب.',
        type: 'textarea',
        required: true
        },
        {
        id: "k",
        label: 'إضافة أو تعليق',
        type: 'text',
        required: false
        }
        ]
  },

  
  //////////////////////////     3   ///////////////
    
     'عضو النشر'   ////////////// ok
     : {
    title: "عضو قسم النشر",
    questions: [
      {
        id: "publishing_why_fit",
        label: 'ما الذي يجعلك مناسباً لهذا الدور في قسم النشر؟',
        type: 'textarea',
        required: true
      },
      {
        id: "publishing_previous_experience",
        label: 'هل لديك خبرة سابقة في مجال النشر؟ إذا كانت الإجابة نعم الرجاء ذكرها بالتفصيل.',
        type: 'textarea',
        required: true
      },
      {
        id: "publishing_platforms",
        label: 'المنصات التي لديك خبرة في إدارتها أو التعامل معها',
        type: 'checkbox',
        Options: ['فيسبوك', 'انستغرام', 'تويتر (X)', 'تيك توك', 'لينكد إن', 'أخرى'],
        required: true
      },
      // {
      //   id: "publishing_content_quality_steps", ////
      //   label: 'ما مستوى خبرتك في إدارة أو النشر على وسائل التواصل الاجتماعي؟',
      //   type: 'radio',
      //   Options: ['مبتدئ', 'متوسط', 'متقدم'],
      //   required: true
      // },
      {
        id: "publishing_handle_negative",
        label: 'كيف تتعامل عادةً مع التعليقات أو الرسائل السلبية على المنصات؟',
        type: 'textarea',
        required: true
      },
      {
        id: "publishing_content_quality_steps",
        label: 'ما الخطوات التي تتبعها لضمان نشر المحتوى بشكل جيد وجذاب؟',
        type: 'textarea',
        required: true
      },
      {
        id: "publishing_commit_interaction",
        label: 'هل يمكنك الالتزام بالتفاعل المستمر مع المتابعين خلال اليوم؟',
        type: 'radio',
        Options: ['نعم', 'لا'],
        required: true
      },
      {
        id: "publishing_account_management_experience",
        label: 'هل سبق أن أدرت حساباً أو نشرت محتوى على صفحة عامة؟ صف التجربة.',
        type: 'textarea',
        required: true
      }
    ]
  },

  'كاتب محتوى'   ////////////////////// ok
  : {
    title: "كاتب محتوى",
    questions: [
      {
        id: "content_why_fit",
        label: 'ما الذي يجعلك مناسباً لهذا الدور في فريق الإعلام؟',
        type: 'textarea',
        required: true
      },
      {
        id: "content_experience_level",
        label: 'ما مستوى خبرتك في كتابة المحتوى؟',
        type: 'radio',
        Options: ['مبتدئ', 'متوسط', 'متقدم'],
        required: true
      },
      {
        id: "content_written_before",
        label: 'ما نوع المحتوى الذي كتبته من قبل (إن وجد)؟',
        type: 'radio',
        Options: [
          'منشورات لمنصات التواصل الاجتماعي',
          'مقالات أو مدونات',
          'نصوص تسويقية أو دعائية',
          'لم أكتب من قبل لكن أرغب في التعلم'
        ],
        required: true
      },
      {
        id: "content_idea_generation",
        label: 'كيف تبحث عادةً عن أفكار جديدة ومبتكرة للمحتوى؟',
        type: 'textarea',
        required: true
      },
      {
        id: "content_writing_steps",
        label: 'عند تكليفك بكتابة منشور، ما الخطوات التي تتبعها قبل البدء بالكتابة؟',
        type: 'textarea',
        required: true
      },
      {
        id: "content_teamwork_feedback",
        label: 'ما رأيك في العمل الجماعي؟ كيف تتعامل مع الملاحظات أو التعديلات على كتاباتك؟',
        type: 'textarea',
        required: true
      },
      {
        id: "content_task_commitment",
        label: 'ما مدى التزامك بأداء المهام وتسليمها في وقتها؟',
        type: 'textarea',
        required: true
      },
      {
        id: "content_previous_team_experience",
        label: 'ما مدى استعدادك لتعلم أساليب جديدة في كتابة المحتوى وتطوير مهاراتك؟',
        type: 'radio',
        Options: ['1 - غير مستعد', '2', '3', '4', '5 - مستعد جداً'],
        required: true
      },
      {
        id: "content_sample_work",
        label: 'هل سبق أن عملت ضمن فريق كتابة أو مشروع إعلامي؟ صف التجربة.',
        type: 'textarea',
        required: true
      },
      {
        id: "content_experience_level",
        label: 'نموذج من أعمالك (رابط أو النص )',
        type: 'textarea',
        required: false
      }
    ]
  },

  'ممنتج'   //////////////// ok
  : {
    title: "منتج في قسم التصميم والمونتاج",
    questions: [
      {
        id: "editing_software",
        label: 'ما البرامج التي تتقن استخدامها في المونتاج؟',
        type: 'checkbox',
        Options: ['Adobe Premiere', 'After Effects', 'CapCut', 'Other'],
        required: true
      },
      {
        id: "editing_experience_level",
        label: 'ما مستوى خبرتك في المونتاج؟',
        type: 'radio',
        Options: ['مبتدئ', 'متوسط', 'متقدم'],
        required: true
      },
      {
        id: "editing_previous_experience",
        label: 'هل سبق أن عملت على فيديوهات ترويجية أو تعليمية؟ صف خبرتك',
        type: 'textarea',
        required: true
      },
      {
        id: "editing_visual_identity",
        label: 'كيف تتأكد من التزامك بالهوية البصرية أثناء عملك على الفيديو؟',
        type: 'textarea',
        required: true
      },
      {
        id: "editing_inspiration",
        label: 'ما الذي يلهمك أثناء العمل على منتج فيديو جديد؟',
        type: 'textarea',
        required: true
      },
      {
        id: "editing_deadline_commitment",
        label: 'ما مدى التزامك بالمواعيد النهائية المحددة لتسليم الأعمال في الوقت المحدد؟',
        type: 'textarea',
        required: true
      },
      {
        id: "editing_sample_work",
        label: 'ما مدى استعدادك لتعلم أدوات جديدة أو تطوير مهاراتك في المونتاج؟',
        type: 'radio',
        Options: ['1 - غير مستعد', '2', '3', '4', '5 - مستعد جداً'],
        required: true
      },
      {
        id: "editing_why_fit",
        label: 'أرفق نموذجاً لأحد أعمالك السابقة (إن وجد)',
        type: 'textarea',
        required: false
      },
      {
        id: "editing_learning_readiness",
        label: 'ما الذي يجعلك مناسباً لهذا الدور في منصة قمم؟',
        type: 'textarea',
        required: true
      }
    ]
  },

  //////////////////////////    4   //////////////////////

      "نائب مسؤول قسم المصروفات"  ///ok
      : {
    title: "نائب مسؤول قسم المصروفات",
    questions: [
      {
        id: 'academic_qualification',
        label: 'ما هو مؤهلك الأكاديمي في مجال المحاسبة أو المالية؟',
        type: 'radio',
        Options: ['بكالاريوس', 'ماجستير', 'شهادة مهنية (مثل CPA، CMA)', 'أخرى (يرجى التحديد)'],
        required: true
      },
      {
        id: 'experience_summary',
        label: 'يرجى وصف خبرتك السابقة في مجال المحاسبة أو الإدارة المالية',
        type: 'text',
        required: true
      },
      {
        id: 'compliance_rating',
        label: 'كيف تقيم قدرتك على ضمان التزام الأعضاء بالإجراءات والسياسات المالية المعتمدة؟',
        type: 'radio',
        Options: ['1 - ضعيف', '2 - متوسط', '3 - جيد', '4 - ممتاز'],
        required: true
      },
      {
        id: 'digital_tools_used',
        label: 'أي من الأدوات الرقمية التالية تستخدمها لحفظ وأرشفة المستندات؟ (يمكن اختيار أكثر من خيار)',
        type: 'checkbox',
        Options: ['Microsoft Excel', 'Google Sheets', 'QuickBooks', 'ERP Systems (مثل SAP، Oracle)', 'أخرى (يرجى التحديد)'],
        required: true
      },
      {
        id: 'error_handling',
        label: 'كيف تتعامل مع الأخطاء أو المخالفات المالية عند اكتشافها؟',
        type: 'textarea',
        required: true
      },
      {
        id: 'financial_reporting_experience',
        label: 'ما هي خبرتك في إعداد تقارير مالية دورية؟',
        type: 'radio',
        Options: ['1 - ضعيف', '2 - متوسط', '3 - جيد', '4 - ممتاز'],
        required: true
      },
      {
        id: 'coordination_improvement',
        label: 'كيف تعتقد أنه يمكنك تحسين التنسيق مع عدة جهات في وقت واحد؟',
        type: 'textarea',
        required: true
      },
      {
        id: 'deadline_management',
        label: 'كيف تقيم قدرتك على التعامل مع المواعيد النهائية الضيقة والمشاريع المتعددة؟',
        type: 'radio',
        Options: ['1 - ضعيف', '2 - متوسط', '3 - جيد', '4 - ممتاز'],
        required: true
      },
      {
        id: 'organization_skill',
        label: 'كيف تقيم مهاراتك في تنظيم الملفات والمتابعة؟',
        type: 'radio',
        Options: ['1 - ضعيف', '2 - متوسط', '3 - جيد', '4 - ممتاز'],
        required: true
      },
      {
        id: 'development_focus',
        label: 'ما هو المجال الذي ترغب في تطوير مهاراتك فيه لأداء أفضل في هذا الدور؟',
        type: 'radio',
        Options: ['الإدارة المالية', 'استخدام الأدوات الرقمية', 'تحليل البيانات'],
        required: true
      },
      {
        id: 'additional_comment',
        label: 'إضافة أو تعليق',
        type: 'text',
        required: false
      }
    ]
  },

      "مسؤول قسم الإيرادات"    ////////////ok
      : {
    title: "مسؤول قسم الإيرادات",
    questions: [
      {
        id: 'revmgr_academic_major',
        label: 'ما هو تخصصك الأكاديمي؟',
        type: 'radio',
        Options: ['محاسبة', 'إدارة مالية', 'اقتصاد', 'أخرى (يرجى التحديد)'],
        required: true
      },
      {
        id: 'revmgr_experience_rating',
        label: 'كيف تقيم خبرتك العملية في إدارة الإيرادات:',
        type: 'radio',
        Options: ['1 - ضعيف', '2 - متوسط', '3 - جيد', '4 - ممتاز'],
        required: true
      },
      {
        id: 'revmgr_receipts_review_steps',
        label: 'ما الخطوات التي تتبعها لمراجعة واعتماد الإيصالات المالية؟',
        type: 'textarea',
        required: true
      },
      {
        id: 'revmgr_revenue_deposit_weekly_review',
        label: 'كيف يمكنك التأكد من توريد جميع الإيرادات للحساب الرسمي للمنصة؟',
        type: 'radio',
        Options: ['بواسطة مراجعة أسبوعية', 'إعداد تقارير شهرية', 'التواصل مع الفرق المعنية', 'أخرى (يرجى التحديد)'],
        required: true
      },
      {
        id: 'revmgr_coordination_with_reg_rating',
        label: 'كيف تقيم مهاراتك في التنسيق مع قسم التسجيل لضمان ربط الإيرادات بالطلاب والمستفيدين؟',
        type: 'radio',
        Options: ['1 - ضعيف', '2 - متوسط', '3 - جيد', '4 - ممتاز'],
        required: true
      },
      {
        id: "revmgr_report_focus_volume",
        label: 'ما هي العناصر الأساسية التي تركز عليها عند إعداد تقارير الإيرادات؟',
        type: 'radio',
        Options: ['حجم الإيرادات', 'توزيع الإيرادات', 'التوصيات للمستقبل', 'جميع ما سبق'],
        required: true
      },
      {
        id: 'revmgr_financial_analysis_rating',
        label: 'كيف تقيم مهاراتك في التحليل المالي:',
        type: 'radio',
        Options: ['1 - ضعيف', '2 - متوسط', '3 - جيد', '4 - ممتاز'],
        required: true
      },
      {
        id: 'revmgr_use_digital_tools',
        label: 'هل لديك خبرة في استخدام الأدوات الرقمية للتعامل مع المستندات المالية؟',
        type: 'radio',
        Options: ['نعم', 'لا'],
        required: true
      },
      {
        id: 'revmgr_digital_tools_list',
        label: 'إذا كانت الإجابة نعم، يرجى ذكر الأدوات المستخدمة',
        type: 'text',
        required: false,
        dependsOn: { questionId: 8, value: 'نعم' }
      },
      {
        id: 'revmgr_integrity_transparency_text',
        label: 'كيف تؤكد على أهمية النزاهة والشفافية في تعاملاتك المالية؟',
        type: 'textarea',
        required: true
      },
      {
        id: 'revmgr_recommendations_short',
        label: 'ما هي أهم التوصيات التي تعتقد أنه يجب رفعها إلى الإدارة المالية لتحسين عمليات إدارة الإيرادات؟',
        type: 'text',
        required: true
      },
      {
        id: 'revmgr_additional_comments',
        label: 'إضافة أو تعليق',
        type: 'text',
        required: false
      }
    ]
  },

      "نائب مسؤول قسم الإيرادات"  ///////// ok
  : {
    title: "نائب مسؤول قسم الإيرادات",
    questions: [
      {
        id: 'revdep_tracking_capacity_rating',
        label: 'كيف تقيم قدرتك على متابعة عمليات استلام الإيرادات وتوثيقها بشكل دوري؟',
        type: 'radio',
        Options: ['1 - ضعيف', '2 - متوسط', '3 - جيد', '4 - ممتاز'],
        required: true
      },
      {
        id: 'revdep_supervision_strategies',
        label: 'ما هي الاستراتيجيات التي تتبعها للإشراف على الفرق الفرعية (إيرادات مشاريع - منح - تبرعات - توثيق) قسم الإيرادات؟',
        type: 'textarea',
        required: true
      },
      {
        id: "revdep_recording_system_electronic",
        label: 'ما هي الطرق التي تستخدمها لتنظيم وحفظ الإيصالات والسجلات المالية؟',
        type: 'radio',
        Options: ['نظام إلكتروني (مثل Excel أو ERP)', 'الأرشفة الورقية', 'كليهما', 'أخرى (يرجى التحديد)'],
        required: true
      },
      {
        id: 'revdep_ensure_earchive_updates',
        label: 'ما هي الإجراءات التي تتبعها لضمان تحديث الأرشيف الإلكتروني بانتظام؟',
        type: 'textarea',
        required: true
      },
      {
        id: "revdep_reporting_collect_from_teams",
        label: 'كيف تقوم بإعداد التقارير المرحلية والملخصات الدورية؟',
        type: 'radio',
        Options: ['جمع البيانات من الفرق', 'استخدام نماذج جاهزة', 'تحليل البيانات بشكل دوري', 'أخرى (يرجى التحديد)'],
        required: true
      },
      {
        id: "revdep_memo_focus_all",
        label: 'ما هي النقاط الأساسية التي تركز عليها عند كتابة محاضر الاجتماعات؟',
        type: 'radio',
        Options: ['الوقت والتاريخ', 'القرارات المتخذة', 'التوصيات والملاحظات', 'جميع ما سبق'],
        required: true
      },
      {
        id: "revdep_identify_financial_challenges",
        label: 'كيف تساهم في رصد التحديات المالية واقتراح الحلول المناسبة؟',
        type: 'textarea',
        required: true
      },
      {
        id: "revdep_absence_task_distribution",
        label: 'في حالة غياب المسؤول، كيف تضمن استمرارية عمل اللجنة دون انقطاع؟',
        type: 'radio',
        Options: ['توزيع المهام على الفرق', 'التواصل مع الإدارات الأخرى', 'متابعة الأعمال اليومية', 'أخرى (يرجى التحديد)'],
        required: true
      },
      {
        id: "revdep_transparency_accuracy_text",
        label: 'كيف تؤكد على أهمية الشفافية والدقة في جميع الإجراءات المالية؟',
        type: 'textarea',
        required: true
      },
      {
        id: "revdep_multitask_collab_rating",
        label: 'كيف تقيم قدرتك على العمل مع فرق متعددة ومهام متوازية؟',
        type: 'radio',
        Options: ['1 - ضعيف', '2 - متوسط', '3 - جيد', '4 - ممتاز'],
        required: true
      },
      {
        id: "revdep_additional_comments",
        label: 'إضافة أو تعليق',
        type: 'text',
        required: false
      }
    ]
  },

      "نائب مسؤول التسجيل"  ////////// ok
  : {
    title: "نائب مسؤول التسجيل",
    questions: [
      {
        id: "regdep_registration_experience_rating",
        label: 'ما مدى خبرتك في تنظيم عمليات التسجيل بشكل عام؟',
        type: 'radio',
        Options: ['1 - ضعيف', '2 - متوسط', '3 - جيد', '4 - ممتاز'],
        required: true
      },
      {
        id: "regdep_issue_raise_to_manager",
        label: 'إذا واجهتك مشكلة في عمل فريق الاستفسارات، كيف تتعامل معها؟',
        type: 'radio',
        Options: ['أرفع المشكلة إلى المسؤول', 'أتحدث مع الفريق لمحاولة حلها', 'أبحث عن حلول خارجية', 'أخرى (يرجى التحديد)'],
        required: true
      },
      {
        id: "regdep_data_review_manual",
        label: 'ما هي الطريقة التي تتبعها لمراجعة البيانات المدخلة للتأكد من دقتها؟',
        type: 'radio',
        Options: ['مراجعة يدوية', 'استخدام برامج خاصة', 'التعاون مع زملاء الفريق', 'لم أشارك في ذلك سابقاً'],
        required: true
      },
      {
        id: "regdep_escalation_followup_rating",
        label: 'كيف تقيم قدرتك على متابعة المشكلات ورفعها للمسؤول؟',
        type: 'radio',
        Options: ['1 - ضعيف', '2 - متوسط', '3 - جيد', '4 - ممتاز'],
        required: true
      },
      {
        id: "regdep_weekly_report_elements",
        label: 'ما هي العناصر الأساسية التي تفضل تضمينها في التقارير الأسبوعية؟',
        type: 'text',
        required: true
      },
      {
        id: "regdep_coord_pref_meetings",
        label: 'في حال كنت بحاجة للتنسيق مع قسم الإيرادات، ما هي الطريقة التي تفضلها؟',
        type: 'radio',
        Options: ['الاجتماعات الدورية', 'البريد الإلكتروني', 'الاتصال المباشر', 'أخرى (يرجى التحديد)'],
        required: true
      },
      {
        id: "regdep_backup_cloud",
        label: 'ما هي إستراتيجيتك لحفظ النسخ الاحتياطية من البيانات بشكل دوري؟',
        type: 'radio',
        Options: ['التخزين السحابي', 'التخزين المحلي', 'إعداد نسخ احتياطية تلقائية', 'أخرى (يرجى التحديد)'],
        required: true
      },
      {
        id: "regdep_handle_multitask_under_pressure",
        label: 'كيف تتعامل مع المهام المتعددة في مواقف الضغط العالي؟',
        type: 'text',
        required: true
      },
      {
        id: "regdep_accuracy_rating",
        label: 'كيف تصف دقتك في العمل؟',
        type: 'radio',
        Options: ['1 - ضعيف', '2 - متوسط', '3 - جيد', '4 - ممتاز'],
        required: true
      },
      {
        id: "regdep_teamwork_enhancement",
        label: 'كيف تعزز روح العمل الجماعي داخل فريق التسجيل؟',
        type: 'text',
        required: true
      },
      {
        id: "regdep_backup_pref_cloud_services",
        label: 'ما هي الطريقة المفضلة لديك لحفظ النسخ الاحتياطية من البيانات؟',
        type: 'radio',
        Options: ['التخزين السحابي (Google Drive، Dropbox)', 'التخزين المحلي', 'كلاهما', 'أخرى (يرجى التحديد)'],
        required: true
      },
      {
        id: "regdep_additional_comments",
        label: 'إضافة أو تعليق',
        type: 'text',
        required: false
      }
    ]
  },

      "عضو الاستفسارات"     ///////// ok 
  : {
    title: "عضو الاستفسارات",
    questions: [
      {
        id: "inq_member_response_rating",
        label: 'كيف تقيم قدرتك على الرد على استفسارات الطلاب بشكل فعال؟',
        type: 'radio',
        Options: ['1 - ضعيف', '2 - متوسط', '3 - جيد', '4 - ممتاز'],
        required: true
      },
      {
        id: "inq_member_ask_more_details",
        label: 'إذا كان هناك استفسار غير واضح من طالب، كيف تتعامل معه؟',
        type: 'radio',
        Options: ['أطلب مزيد من التفاصيل', 'أقدم ما أعتقد أنه صحيح', 'أحيل الطالب إلى مسؤول آخر', 'أخرى (يرجى التحديد)'],
        required: true
      },
      {
        id: "inq_member_try_solve",
        label: 'كيف تتعامل مع مشكلة يواجهها أحد المستفيدين؟',
        type: 'radio',
        Options: ['أحاول حلها بنفسي', 'أبلغ المسؤول', 'أعطي المستفيد اقتراحات', 'أخرى (يرجى التحديد)'],
        required: true
      },
      {
        id: "inq_member_customer_service_experience",
        label: 'ما هو مدى خبرتك السابقة في خدمة العملاء أو التعامل مع المستفيدين؟',
        type: 'radio',
        Options: ['1 - ضعيف', '2 - متوسط', '3 - جيد', '4 - ممتاز'],
        required: true
      },
      {
        id: "inq_member_communication_rating",
        label: 'كيف تقيم مهاراتك في التواصل مع مختلف الشخصيات؟',
        type: 'radio',
        Options: ['1 - ضعيف', '2 - متوسط', '3 - جيد', '4 - ممتاز'],
        required: true
      },
      {
        id: "inq_member_ensure_user_satisfaction",
        label: 'كيف يمكنك ضمان رضا المستفيدين عن تجربة التسجيل؟',
        type: 'textarea',
        required: true
      },
      {
        id: "inq_member_refer_to_manager_immediately",
        label: 'في حال كانت المشكلة تتطلب خبرة أعلى، هل ستقوم بإحالتها للمسؤول؟',
        type: 'radio',
        Options: ['نعم، على الفور', 'لا، سأحاول حلها بنفسي أولاً', 'أحياناً حسب تقديري'],
        required: true
      },
      {
        id: "inq_member_prioritize_responses",
        label: 'كيف تتعامل مع الاستفسارات الكثيرة في وقت قصير؟',
        type: 'radio',
        Options: ['أضع أولوية للرد', 'أعمل بجد أكبر', 'أطلب المساعدة من الزملاء', 'أخرى (يرجى التحديد)'],
        required: true
      },
      {
        id: "inq_member_handle_difficult_situations_rating",
        label: 'كيف تصف قدرتك على التعامل مع مواقف صعبة؟',
        type: 'radio',
        Options: ['1 - ضعيف', '2 - متوسط', '3 - جيد', '4 - ممتاز'],
        required: true
      },
      {
        id: "inq_member_improvement_idea",
        label: 'إذا كان بإمكانك تحسين تجربة الاستفسارات، فما هي الفكرة التي ستطرحها؟',
        type: 'text',
        required: true
      },
      {
        id: "inq_member_additional_comments",
        label: 'إضافة أو تعليق',
        type: 'text',
        required: false
      }
    ]
  },

      "نائب مسؤول قسم المشاريع"   /////////// ok 
  : {
    title: "نائب مسؤول قسم المشاريع",
    questions: [
      {
        id: "projdep_committee_followup_rating",
        label: 'كيف تقيم قدرتك على متابعة سير عمل اللجان التابعة للمشاريع بشكل دوري؟',
        type: 'radio',
        Options: ['1 - ضعيف', '2 - متوسط', '3 - جيد', '4 - ممتاز'],
        required: true
      },
      {
        id: "projdep_handle_team_delay",
        label: 'إذا لاحظت أن إحدى الفرق تتأخر عن الخطة الزمنية، ما هو الإجراء الذي ستقوم به؟',
        type: 'textarea',
        required: true
      },
      {
        id: "projdep_tool_word",
        label: 'ما هي الأدوات التي تفضل استخدامها لتوثيق مراحل تنفيذ المشاريع؟',
        type: 'checkbox',
        Options: ['Microsoft Word', 'Google Drive / Sheets', 'برامج إدارة المشاريع (مثل Trello أو Asana)', 'أخرى (يرجى التحديد)'],
        required: true
      },
      {
        id: "projdep_report_frequency_weekly",
        label: 'كم مرة تقوم بإعداد تقارير دورية عن سير المشاريع؟',
        type: 'radio',
        Options: ['أسبوعياً', 'شهرياً', 'عند الحاجة', 'أخرى (يرجى التحديد)'],
        required: true
      },
      {
        id: "projdep_ensure_report_accuracy_personal_review",
        label: 'كيف تضمن دقة التقارير المقدمة لك من اللجان؟',
        type: 'radio',
        Options: ['مراجعتها بدقة شخصياً', 'طلب التعديلات اللازمة من الفرق', 'التواصل مع الأعضاء المعنيين', 'أخرى (يرجى التحديد)'],
        required: true
      },
      {
        id: "projdep_meeting_minutes_key_elements",
        label: 'ما هي العناصر الأساسية التي تضعها في اعتبارك عند كتابة محاضر الاجتماعات؟',
        type: 'text',
        required: true
      },
      {
        id: "projdep_challenges_identify_weak_points",
        label: 'كيف تتعامل مع التحديات التي قد تواجه المشاريع؟',
        type: 'radio',
        Options: ['بحث النقاط الضعيفة مع الفرق', 'تقديم اقتراحات للحلول', 'رفع الموضوع للمسؤول', 'جميع ما سبق'],
        required: true
      },
      {
        id: "projdep_help_team_if_struggling",
        label: 'إذا كان أحد الفرق يواجه صعوبة في تنفيذ عمله، كيف يمكنك مساعدتهم؟',
        type: 'text',
        required: true
      },
      {
        id: "projdep_multitask_rating",
        label: 'كيف تقيم قدرتك على التعامل مع مهام متعددة في وقت واحد؟',
        type: 'radio',
        Options: ['1 - ضعيف', '2 - متوسط', '3 - جيد', '4 - ممتاز'],
        required: true
      },
      {
        id: "projdep_team_spirit_activities",
        label: 'كيف تعزز روح الفريق والالتزام بالعمل التطوعي بين أعضاء الفريق؟',
        type: 'radio',
        Options: ['تنظيم أنشطة مشتركة', 'تقديم الدعم والتوجيه', 'الاحتفاء بالإنجازات والمساهمات', 'جميع ما سبق'],
        required: true
      },
      {
        id: "projdep_additional_comments",
        label: 'إضافة أو تعليق',
        type: 'text',
        required: false
      }
    ]
  },

  ////////////////////////////// 5 /////////////////

  
  "مسؤول العلاقات العامة" ///////////////// ok
  : { 
    title: "مسؤول العلاقات العامة",
    questions: [
      {
        id: "pr_team_lead_experience",
        label: 'هل لديك تجربة في قيادة فريق علاقات عامة، وما التحديات التي واجهتها وكيف تعاملت معها؟',
        type: 'textarea',
        required: true
      },
      {
        id: "pr_strategy_methodology",
        label: 'ما منهجيتك في وضع خطة علاقات عامة سنوية أو استراتيجية؟ وما العناصر الأساسية التي تركز عليها؟',
        type: 'textarea',
        required: true
      },
      {
        id: "pr_official_representation_experience",
        label: 'هل قمت من قبل بتمثيل جهة رسمية في فعالية أو مؤتمر؟',
        type: 'radio',
        Options: ['نعم', 'لا'],
        required: true
      },
      {
        id: "pr_partnership_building_steps",
        label: 'إذا طُلب منك إقناع جهة رسمية بالدخول في شراكة، ما خطواتك العملية في بناء هذه العلاقة؟',
        type: 'textarea',
        required: true
      },
      {
        id: "pr_sensitive_correspondence_handling",
        label: 'كيف تتعامل مع المراسلات الرسمية الحساسة التي تتطلب دقة عالية في الصياغة؟',
        type: 'textarea',
        required: true
      },
      {
        id: "pr_positive_image_delivery",
        label: 'كيف تضمن نقل صورة إيجابية عن منصة قمم في اللقاءات والفعاليات؟',
        type: 'textarea',
        required: true
      },
      {
        id: "pr_task_distribution_method",
        label: 'كيف توزّع المهام على فريق العلاقات العامة لضمان أعلى إنتاجية؟',
        type: 'textarea',
        required: true
      },
      {
        id: "pr_plan_followup_tools",
        label: 'ما إداكك في متابعة تنفيذ الخطط والتأكد من مطابقتها للأهداف الاستراتيجية؟',
        type: 'radio',
        Options: ['1 - ضعيف', '2 - متوسط', '3 - جيد', '4 - ممتاز'],
        required: true
      },
      {
        id: 'pr_meeting_management_experience',
        label: 'ما خبرتك في تنظيم الاجتماعات وكتابة تقارير دقيقة؟ وما الخطوات التي تتبعها لضمان جودتها؟',
        type: 'textarea',
        required: true
      },
      {
        id: "pr_documentation_and_file_management",
        label: 'كيف تقوم بالتوثيق وإدارة الملفات الرسمية؟',
        type: 'textarea',
        required: true
      },
      {
        id: "pr_required_skills",
        label: 'ما أهم المهارات التي ترى أنها ضرورية لإدارة العلاقات العامة؟',
        type: 'textarea',
        required: true
      },
      {
        id: 'additional_comment',
        label: 'إضافة أو تعليق',
        type: 'text',
        required: false
      }
    ]
  },

  "نائب مسؤول العلاقات العامة" /////////////// ok
  : {
    title: "نائب مسؤول العلاقات العامة",
    questions: [
      {
        id: "pr_team_lead_experience",
        label: 'هل لديك تجربة في قيادة فريق علاقات عامة، وما التحديات التي واجهتها وكيف تعاملت معها؟',
        type: 'textarea',
        required: true
      },
      {
        id: "pr_strategy_methodology",
        label: 'ما منهجيتك في وضع خطة علاقات عامة سنوية أو استراتيجية؟ وما العناصر الأساسية التي تركز عليها؟',
        type: 'textarea',
        required: true
      },
      {
        id: "pr_official_representation_experience",
        label: 'هل قمت من قبل بتمثيل جهة رسمية في فعالية أو مؤتمر؟',
        type: 'radio',
        Options: ['نعم', 'لا'],
        required: true
      },
      {
        id: "pr_partnership_building_steps",
        label: 'إذا طُلب منك إقناع جهة رسمية بالدخول في شراكة، ما خطواتك العملية في بناء هذه العلاقة؟',
        type: 'textarea',
        required: true
      },
      {
        id: "pr_sensitive_correspondence_handling",
        label: 'كيف تتعامل مع المراسلات الرسمية الحساسة التي تتطلب دقة عالية في الصياغة؟',
        type: 'textarea',
        required: true
      },
      {
        id: "pr_positive_image_delivery",
        label: 'كيف تضمن نقل صورة إيجابية عن منصة قمم في اللقاءات والفعاليات؟',
        type: 'textarea',
        required: true
      },
      {
        id: "pr_task_distribution_method",
        label: 'كيف توزّع المهام على فريق العلاقات العامة لضمان أعلى إنتاجية؟',
        type: 'textarea',
        required: true
      },
      {
        id: "pr_plan_followup_tools",
        label: 'ما إدراكك في متابعة تنفيذ الخطط والتأكد من مطابقتها للأهداف الاستراتيجية؟',
        type: 'radio',
        Options: ['1 - ضعيف', '2 - متوسط', '3 - جيد', '4 - ممتاز'],
        required: true
      },
      {
        id: "pr_meeting_management_experience",
        label: 'ما خبرتك في تنظيم الاجتماعات وكتابة تقارير دقيقة؟ وما الخطوات التي تتبعها لضمان جودتها؟',
        type: 'textarea',
        required: true
      },
      {
        id: "pr_documentation_and_file_management",
        label: 'كيف تقوم بالتوثيق وإدارة الملفات الرسمية؟',
        type: 'textarea',
        required: true
      },
      {
        id: "pr_required_skills",
        label: 'ما أهم المهارات التي ترى أنها ضرورية لإدارة العلاقات العامة؟',
        type: 'textarea',
        required: true
      },
      {
        id: "additional_comment",
        label: 'إضافة أو تعليق',
        type: 'text',
        required: false
      }
    ]
  }
}

export default jobsData;