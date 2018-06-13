using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using ConsoleDip;

namespace UnitTestDip
{
    [TestClass]
    public class UnitTest1
    {
        [TestMethod]
        public void TestMethod1()
        {
            ClassDip1 hello1 = new ClassDip1("World");
            Assert.AreEqual("Hello Sveta", hello1.Message);
        }

        [TestMethod]
        public void TestMethod3()
        {
        }

        [TestMethod]
        public void TestMethod4()
        {
        }
    }
}
