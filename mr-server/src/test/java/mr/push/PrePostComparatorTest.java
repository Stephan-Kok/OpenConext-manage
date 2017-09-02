package mr.push;

import mr.TestUtils;
import org.junit.Test;

import java.io.IOException;
import java.util.List;
import java.util.Map;
import java.util.Set;

import static org.junit.Assert.*;

public class PrePostComparatorTest implements TestUtils{

    private PrePostComparator subject = new PrePostComparator();

    @Test
    public void testCompare() throws IOException {
        List<Map<String, Object>> prePush = objectMapper.readValue(readFile("push/pre.push.json"), List.class);
        List<Map<String, Object>> postPush = objectMapper.readValue(readFile("push/post.push.json"), List.class);

        Set<Delta> deltas = subject.compare(prePush, postPush);
        assertEquals(3, deltas.size());
    }

}