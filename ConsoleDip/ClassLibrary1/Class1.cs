using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using NUnit.Framework;
using ConsoleDip;

namespace ClassLibrary1
{
    [TestFixture]
    public class Class1
    {
        [TestCase]
        public static void Test1()
        {
            ClassDip1 hello1 = new ClassDip1("World");
            Assert.AreEqual("Hello Sveta", hello1.Message);
        }

        [TestCase]
        public static void Test2()
        {
            ClassDip1 hello1 = new ClassDip1("World");
            Assert.AreEqual("Hello World", hello1.Message);
        }
    }
}
