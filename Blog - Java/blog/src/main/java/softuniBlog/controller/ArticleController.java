package softuniBlog.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import softuniBlog.bindingModel.ArticleBindingModel;
import softuniBlog.entity.Article;
import softuniBlog.entity.User;
import softuniBlog.repository.ArticleRepository;
import softuniBlog.repository.UserRepository;


@Controller
public class ArticleController {
    private final ArticleRepository articleRepository;
    private final UserRepository userRepository;

    @Autowired
    public ArticleController(ArticleRepository articleRepository, UserRepository userRepository) {
        this.articleRepository = articleRepository;
        this.userRepository = userRepository;
    }


    @GetMapping("/article/create")
    @PreAuthorize("isAuthenticated()")
    public String create(Model model){
        model.addAttribute("view", "article/create");
        return  "base-layout";
    }

    @PostMapping("/article/create")
    @PreAuthorize("isAuthenticated()")
    public String createProcess(ArticleBindingModel model) {
        UserDetails currentUser = (UserDetails) SecurityContextHolder.getContext()
                .getAuthentication().getPrincipal();

        User user = this.userRepository.findByEmail(currentUser.getUsername());

        Article article = new Article(
                model.getTitle(),
                model.getContent(),
                user
        );

        this.articleRepository.saveAndFlush(article);
        return "redirect:/";
    }
}