package alg;

import java.util.Set;

public class Solution {
    public boolean wordBreak(String s, Set<String> dict) {
             return wordBreakHelper(s, dict, 0);
    }
 
    public boolean wordBreakHelper(String s, Set<String> dict, int start){
        if(start == s.length()) 
            return true;
 
        for(String a: dict){
            int len = a.length();
            int end = start+len;
 
            //end index should be <= string length
            if(end > s.length()) 
                continue;
 
            if(s.substring(start, start+len).equals(a))
                if(wordBreakHelper(s, dict, start+len))
                    return true;
        }
 
        return false;
    }
}