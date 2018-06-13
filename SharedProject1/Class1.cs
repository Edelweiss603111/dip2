using System;

namespace SharedProject1
{
    class Class1
	{
		public string duplicateString = "String";
		public string dupStr = "Duplicate";
		public string Name;

        public Class1(string newName)
        {
			Name = newName;
		}
		
		public string Hello(string name)
		{
			string newName = name;
			return "Hello " + newName;
		}

		public string Hello()
		{
			string newName = Name;
			return "Hello " + newName;
		}
	}
}
