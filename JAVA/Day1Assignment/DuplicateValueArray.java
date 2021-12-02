
public class DuplicateValueArray {
	public static void main(String atgs[])
	{
		int array[]= {9,25,19,2,55,11,6,9};
		for(int i=0;i<array.length;i++)
		{
			for(int j=i+1;j<array.length;j++)
			{
				if(array[i]==array[j])
				{
					System.out.println(array[j]);
				}
			}
		}
	}

}

