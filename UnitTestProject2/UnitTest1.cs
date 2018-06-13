using Microsoft.VisualStudio.TestTools.UnitTesting;
using SharedProject1;

namespace UnitTestProject2
{
    [TestClass]
    public class UnitTest1
	{
		public string duplicateString = "Duplicate";
		[TestMethod]
        public void TestMethod1()
        {
			Class1 helloWorld = new Class1("World");
			Assert.AreEqual("Hello World", helloWorld.Hello());
        }
    }
}
