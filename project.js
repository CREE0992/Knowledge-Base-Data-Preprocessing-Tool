/* Application fields and sample data. MIT License. */
const SPEC={
  "id": "A09",
  "slug": "knowledge-prep",
  "name": "知识库资料预处理工具",
  "desc": "清理文字、切分段落、合并重复内容，并保留资料来源。",
  "fields": [
    {
      "key": "texts",
      "label": "导入TXT或Markdown文件",
      "type": "upload",
      "value": [],
      "mode": "text"
    },
    {
      "key": "text",
      "label": "也可以直接粘贴资料",
      "type": "textarea",
      "value": "旅行水杯规格\n\n容量：350ml。材质：不锈钢。\n\n使用说明\n清洗后晾干；避免放入微波炉。"
    },
    {
      "key": "source",
      "label": "粘贴资料来源",
      "type": "text",
      "value": "产品说明.txt"
    },
    {
      "key": "chunk",
      "label": "每段最大字符数",
      "type": "number",
      "value": 300,
      "min": 20
    }
  ],
  "tables": [],
  "sampleFiles": "text",
  "limits": "仅按空白与字符长度处理；完全重复片段合并来源，不作语义去重。",
  "dirname": "knowledge-prep",
  "example": {
    "_files": {
      "texts": [
        {
          "name": "清洁说明.md",
          "size": 50,
          "text": "清洁说明\n\n清洗后晾干；避免放入微波炉。"
        }
      ]
    },
    "text": "旅行水杯规格\n\n容量：350ml。材质：不锈钢。\n\n使用说明\n清洗后晾干；避免放入微波炉。",
    "source": "产品说明.txt",
    "chunk": 300
  },
  "inputTitle": "资料与分段设置",
  "outputTitle": "处理结果",
  "action": "处理资料"
};
