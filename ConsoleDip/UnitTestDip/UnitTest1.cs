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
            ClassDip1 hello1 = new ClassDip1("Sveta");
            Assert.AreEqual("Hello Sveta", hello1.Message);
        }

        [TestMethod]
        public void TestMethod2()
        {
            ClassDip1 hello1 = new ClassDip1("Sega");
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
