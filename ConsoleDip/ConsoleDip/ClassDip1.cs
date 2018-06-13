using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleDip
{
    public class ClassDip1
    {
        private string _someName;

        public ClassDip1()
        {
            _someName = "Arina";
        }

        public ClassDip1(string name)
        {
            _someName = name;
        }

        public string Message
        {
            get { return "Hello " + _someName; }
            set { _someName = value; }
        }
    }
}
