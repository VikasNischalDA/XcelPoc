using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace XcelPoc.Data
{

    public class JsSpreadWorksheet
    {
        public List<int> minDimensions { get; set; } = new List<int>();
        public string worksheetName { get; set; }
        public List<List<object>> data { get; set; } = new List<List<object>>();
        public List<Column> columns { get; set; } = new List<Column>();
        public Dictionary<string, string> style { get; set; } = new Dictionary<string, string>();
    }
    public class Column
    {
        public string title { get; set; }
        public string width { get; set; }
    }

    public class Root
    {
        public List<JsSpreadWorksheet> JsSpreadWorksheet { get; set; }
    }

    public class Style
    {
        public string A1 { get; set; }
        public string B1 { get; set; }
    }

    
}
