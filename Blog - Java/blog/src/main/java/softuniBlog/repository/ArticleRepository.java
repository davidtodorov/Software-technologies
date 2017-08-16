package softuniBlog.repository;

import org.codehaus.groovy.runtime.dgmimpl.arrays.IntegerArrayGetAtMetaMethod;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import softuniBlog.entity.Article;

/**
 * Created by David on 11-Aug-17.
 */

@Repository
public interface ArticleRepository extends JpaRepository<Article, Integer>{

}
