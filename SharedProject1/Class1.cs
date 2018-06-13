using System;

namespace SharedProject1
{
    class Class1
    {
		public string Name;

        public Class1(string newName)
        {
			Name = newName;
		}
		
		public string Hello(string name)
		{
			return "Hello " + name;
		}

		public string Hello()
		{
			return "Hello " + Name;
		}
	}
}
