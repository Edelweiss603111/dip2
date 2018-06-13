using System;
using NUnit.Framework;
using ConsoleDip;

namespace ClassLibraryDIp
{
	[TestFixture]
    public class Class1
	{
		[Test]
		public void TestMethod1()
		{
			ClassDip1 hello1 = new ClassDip1("Sveta");
			Assert.AreEqual("Hello Sveta", hello1.Message);
		}
	}
}
